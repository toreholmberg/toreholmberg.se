aws --version
aws configure set default.region us-east-1
aws configure set default.output json

echo "Deploying to S3 bucket: $AWS_S3_BUCKET"
aws s3 sync ./build/ s3://$AWS_S3_BUCKET --acl public-read
