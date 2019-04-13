#!/bin/bash

PROJDIR=$PWD
S3_BUCKET='dev.komiyak.com'

aws s3 sync $PROJDIR/prototypes/json/ s3://$S3_BUCKET/challeweb/json/

