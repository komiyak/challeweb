#!/bin/bash

WD=$(dirname "$0")
S3_BUCKET='challeweb-dev.komiyak.com'
PREFIX='challeweb'

aws s3 sync $WD/build/ s3://$S3_BUCKET

