#!/bin/bash

WD=$(dirname "$0")
S3_BUCKET='dev.komiyak.com'

aws s3 sync $WD/prototypes/json/ s3://$S3_BUCKET/challeweb/json/

