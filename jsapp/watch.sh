#!/bin/bash
fsmonitor -p -d js '!index.js' '!templates.js' '!application.js' ember build -o ../public/js/application.js -d
