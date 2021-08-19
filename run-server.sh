#!/usr/bin/env bash

docker run --rm -d --name vuejs-web-server -p 8080:80 -v "$(pwd):/var/www/html" php:7.4-apache
