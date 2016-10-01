#!/usr/bin/env bash

docker-compose -f docker-compose.yml up -d;

docker logs nodemongorecipes_mongo_1;
docker logs nodemongorecipes_web_1;
