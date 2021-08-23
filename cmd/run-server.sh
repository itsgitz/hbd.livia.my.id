#!/usr/bin/env bash

docker run --rm -d --name dear-livia.my.id -p 8080:80 -v "$(pwd):/var/www/html" php:7.4-apache
