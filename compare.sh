#!/bin/bash
yarn clean-good && yarn clean-bad

echo "Building bad"
time yarn good build --no-cache -q

yarn clean-good

echo "Building good"
time yarn bad build --no-cache -q