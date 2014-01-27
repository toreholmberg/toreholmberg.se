# toreholmberg.se

Static [Middleman](http://middlemanapp.com/) build hosted on Amazon S3 using the [Middleman S3 Sync extension](https://github.com/fredjean/middleman-s3_sync) for deployments.

## Usage

1. Clone this repository

2. Install gem dependencies using bundler:

	````
	$ bundle
	````
3. Run middleman server:

	````
	$ middleman
	````
4. Load `http://0.0.0.0:4567` in your browser.

5. Voila!

## Deploy to Amazon S3

1. Create a [.s3_sync file](https://github.com/fredjean/middleman-s3_sync#through-s3_sync-file) contaning your AWS credentials.

2. Modify `config.rb` with your bucket and region:

	````
	activate :s3_sync do |s3_sync|
  		s3_sync.bucket = <your-bucket>
  		s3_sync.region = <your-region>
	end
	````

3. Run Middleman build:
	
	````
	$ middleman build
	````
	
4. Apply updates to S3 bucket:

	````
	$ middleman s3_sync
	````

5. Done!