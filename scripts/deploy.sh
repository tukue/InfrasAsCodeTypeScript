#!/bin/bash
ENVIRONMENT=$1

if [ "$ENVIRONMENT" = "prod" ]; then
    echo "Deploying to production..."
    cdk deploy --all --require-approval never \
        --context environment=prod
elif [ "$ENVIRONMENT" = "dev" ]; then
    echo "Deploying to development..."
    cdk deploy --all --require-approval never \
        --context environment=dev
else
    echo "Invalid environment. Use 'dev' or 'prod'"
    exit 1
fi
