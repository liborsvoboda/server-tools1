// Package logger provides support for initializing the log system.
package logger

import (
	"context"
	"fmt"
	"io"
	"log"
	"path/filepath"
	"runtime"
	"time"

	"log/slog"
)

// TraceIDFunc represents a function that can return the trace id from
// the specified context.
type TraceIDFunc func(ctx context.Context) string

// Logger represents a logger for logging information.
type Logger struct {
	handler     slog.Handler
	traceIDFunc TraceIDFunc
}

// New constructs a new log for application use.
func New(w io.Writer, serviceName string, traceIDFunc TraceIDFunc) *Logger {

	// Convert the file name to just the name.ext when this key/value will
	// be logged.
	f := func(groups []string, a slog.Attr) slog.Attr {
		if a.Key == slog.SourceKey {
			if source, ok := a.Value.Any().(*slog.Source); ok {
				v := fmt.Sprintf("%s:%d", filepath.Base(source.File), source.Line)
				return slog.Attr{Key: "file", Value: slog.StringValue(v)}
			}
		}

		return a
	}

	// Construct the slog JSON handler for use.
	handler := slog.Handler(slog.NewJSONHandler(w, &slog.HandlerOptions{AddSource: true, Level: slog.LevelInfo, ReplaceAttr: f}))

	// Attributes to add to every log.
	attrs := []slog.Attr{
		{Key: "service", Value: slog.StringValue(serviceName)},
	}

	// Add those attributes and capture the final handler.
	handler = handler.WithAttrs(attrs)

	return &Logger{
		handler:     handler,
		traceIDFunc: traceIDFunc,
	}
}

// NewStdLogger returns a standard library Logger that wraps the slog Logger.
func NewStdLogger(logger *Logger) *log.Logger {
	return slog.NewLogLogger(logger.handler, slog.LevelInfo)
}

// Print logs with the given context.
func (log *Logger) Print(ctx context.Context, msg string, args ...any) {
	var pcs [1]uintptr
	runtime.Callers(2, pcs[:])

	r := slog.NewRecord(time.Now(), slog.LevelInfo, msg, pcs[0])

	if log.traceIDFunc != nil {
		args = append(args, "trace_id", log.traceIDFunc(ctx))
	}
	r.Add(args...)

	log.handler.Handle(ctx, r)
}
