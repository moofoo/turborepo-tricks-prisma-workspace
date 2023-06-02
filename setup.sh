#!/bin/bash

docker pull node:20.2.0-alpine3.17
docker pull postgres:15.3-alpine3.17

docker image build -f dockerfiles/Dockerfile.node -t custom-node:latest dockerfiles

yarn
yarn workspace prisma-client build
yarn