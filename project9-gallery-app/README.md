# To Build and Run your own version of the TD-Project9 React Gallery App:

# For Developers:

    This readme.md provides the basic how-to ..

    .. for developers who might fork this repo.

    .. and want to modify it, build and run their own version

# Flicker API keys:

  To get this project running you will need a Flickr non-commercial api key.

    Steps to get a Flicker non-commercial api key:

      STEP 1:

      have a yahoo acct, use it to sign in to Flickr

      and go to the App Garden and apply for a non-commercial api key..

[Follow this link to apply for a non-commercial api-key from Flickr](https://www.flickr.com/services/apps/create/apply/)

      STEP 2:

      Place it a file that is NOT part of your github repouse

        create a data/config.js to export the key in a object, like this...

        ```const flickr = {apikey: 'yourkey', secret: 'yoursecret'}
           export default flickr
        ```

        to keep the flicker api-key and secret - a secret ....

        ....make sure to place a ref in your .gitignore to thge config.js file

                The 'secret' is needed only when...

                  the flickr api method requires a sign-on.

                For flickr app sign-on, Flickr requires using OATH.

                  Since I dont use flickr's methods that require a sign-on...

                  this project does NOT implement OATH.

[To read about, learn how your Flickr app should use OATH follow this link](https://www.flickr.com/services/api/auth.oauth.html)

      STEP 3:

      Verify the flickr api calls your app will need to make

[To verify your flickr api call syntax use follow this link](https://www.flickr.com/services/api/explore/flickr.photos.search)
