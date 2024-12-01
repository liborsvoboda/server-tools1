package main

import (
	"context"
	"embed"
	"errors"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/ardanlabs/conf/v3"
	"github.com/gobridge/website/app/services/website/handlers"
	"github.com/gobridge/website/foundation/logger"
)

//go:embed static
var static embed.FS

func main() {
	traceIDFunc := func(ctx context.Context) string {
		return handlers.GetTraceID(ctx)
	}

	log := logger.New(os.Stdout, "WEBSITE", traceIDFunc)

	// -------------------------------------------------------------------------

	ctx := context.Background()

	if err := run(ctx, log); err != nil {
		log.Print(ctx, "ERROR", "msg", err)
		os.Exit(1)
	}
}

func run(ctx context.Context, log *logger.Logger) error {

	// -------------------------------------------------------------------------
	// Configuration

	cfg := struct {
		conf.Version
		Web struct {
			ReadTimeout     time.Duration `conf:"default:5s"`
			WriteTimeout    time.Duration `conf:"default:10s"`
			IdleTimeout     time.Duration `conf:"default:120s"`
			ShutdownTimeout time.Duration `conf:"default:20s"`
			Host            string        `conf:"default:0.0.0.0:8080"`
		}
	}{
		Version: conf.Version{
			Desc: "GoBridge Website",
		},
	}

	const prefix = ""
	help, err := conf.Parse(prefix, &cfg)
	if err != nil {
		if errors.Is(err, conf.ErrHelpWanted) {
			fmt.Println(help)
			return nil
		}
		return fmt.Errorf("parsing config: %w", err)
	}

	// -------------------------------------------------------------------------
	// App Starting

	log.Print(ctx, "starting service")
	defer log.Print(ctx, "shutdown complete")

	out, err := conf.String(&cfg)
	if err != nil {
		return fmt.Errorf("generating config for output: %w", err)
	}
	log.Print(ctx, "startup", "config", out)

	// -------------------------------------------------------------------------
	// Start API Service

	log.Print(ctx, "startup", "status", "starting website")

	if err := handlers.SetRoutes(log, static); err != nil {
		return err
	}

	api := http.Server{
		Addr:         cfg.Web.Host,
		Handler:      http.DefaultServeMux,
		ReadTimeout:  cfg.Web.ReadTimeout,
		WriteTimeout: cfg.Web.WriteTimeout,
		IdleTimeout:  cfg.Web.IdleTimeout,
		ErrorLog:     logger.NewStdLogger(log),
	}

	serverErrors := make(chan error, 1)

	go func() {
		log.Print(ctx, "startup", "status", "api router started", "host", api.Addr)
		serverErrors <- api.ListenAndServe()
	}()

	// -------------------------------------------------------------------------
	// Shutdown

	shutdown := make(chan os.Signal, 1)
	signal.Notify(shutdown, syscall.SIGINT, syscall.SIGTERM)

	select {
	case err := <-serverErrors:
		return fmt.Errorf("server error: %w", err)

	case sig := <-shutdown:
		log.Print(ctx, "shutdown", "status", "shutdown started", "signal", sig)
		defer log.Print(ctx, "shutdown", "status", "shutdown complete", "signal", sig)

		ctx, cancel := context.WithTimeout(ctx, cfg.Web.ShutdownTimeout)
		defer cancel()

		if err := api.Shutdown(ctx); err != nil {
			api.Close()
			return fmt.Errorf("could not stop server gracefully: %w", err)
		}
	}

	return nil
}
