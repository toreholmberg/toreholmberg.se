# toreholmberg.se

> Ultra simple static site. Build using Gulp, deployed to S3 and served via CloudFlare.

## Prerequisites

- Node
- [Gulp CLI](https://github.com/gulpjs/gulp-cli)
- [AWS CLI](https://github.com/aws/aws-cli#installation) (deployments)

## Installation

1. Install node.

2. Install Gulp CLI:

  ```sh
  npm install -g gulp-cli
  ```

3. Install module dependencies

  ```sh
  npm install
  ```

## Usage

1. Build project, start watchers and development server:

  ```sh
  gulp
  ```

2. Browse to http://localhost:3000 :sunglasses:

## Deployment

To deploy build to S3:

1. Production build:

  ```sh
  NODE_ENV=production gulp build
  ```

2. Run S3 deploy script:

  ```sh
  AWS_ACCESS_KEY_ID=optional AWS_SECRET_ACCESS_KEY=optional S3_BUCKET=required ./deploy.sh
  ```

3. Purge CloudFlare cache:

  ```sh
  CF_ZONE=required CF_AUTH_EMAIL=required CF_AUTH_KEY=required ./purge.sh
  ```
