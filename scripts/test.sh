#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"

node_modules/.bin/karma start $BASE_DIR/../config/karma.conf.js $*
