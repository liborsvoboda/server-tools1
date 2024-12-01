# Check to see if we can use ash, in Alpine images, or default to BASH.
SHELL_PATH = /bin/ash
SHELL = $(if $(wildcard $(SHELL_PATH)),/bin/ash,/bin/bash)

start:
	cd app/frontends/website; npm run start

build:
	cd app/frontends/website; npm run build

run:
	go run app/services/website/main.go

build-run: build run

watch-run:
	air --build.send_interrupt true --build.cmd "go build -o ./tmp/main app/services/website/main.go" -build.bin "./tmp/main" --build.exclude_dir "app/frontends"

tooling:
	go install github.com/cosmtrek/air@latest

contact:
	curl -il -X POST -d '{"name":"Ale Kenn", "email":"me@aleintech.com", "msg":"hi there, can you help me"}' -H "Content-Type: application/json" http://localhost:8080/api/contact

# ==============================================================================

SERVICE_IMAGE := gobridge/website:0.0.1

image:
	docker build \
		-f zarf/docker/dockerfile \
		-t $(SERVICE_IMAGE) \
		.

run-docker:
	docker run -p8080:8080 gobridge/website:0.0.1

# ==============================================================================

install:
	cd app/frontends/website; npm i react-scripts

tidy:
	go mod tidy
	go mod vendor

deps-upgrade:
	go get -u -v ./...
	go mod tidy
	go mod vendor
