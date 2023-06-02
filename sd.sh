#!/bin/bash

echo "Cleaning up"
yarn clean-good > /dev/null 2>&1
yarn clean-bad > /dev/null 2>&1
docker system prune -f > /dev/null 2>&1

echo "Building bad"
time yarn bad build --no-cache -q


echo "Cleaning up"
yarn clean-good > /dev/null 2>&1
yarn clean-bad > /dev/null 2>&1
docker system prune -f > /dev/null 2>&1

echo "Building good"
time yarn good build --no-cache -q

