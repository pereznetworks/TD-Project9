# To Build and Run your own version of the TD-Project9 React Gallery App:

# For Developers:

    This readme.md provides the basic how-to ..

    .. for developers who might fork this repo.

    .. and want to modify it, build and run their own version

# Flicker API keys setup:

  To get this project up and running you will need a Flickr non-commercial api key.

    Steps to get a Flicker non-commercial api key:

      STEP 1:

      have a yahoo acct, use it to sign in to Flickr

      and go to the App Garden and apply for a non-commercial api key..

[Follow this link to apply for a non-commercial api-key from Flickr](https://www.flickr.com/services/apps/create/apply/)

      STEP 2:

      Place your API-KEY and associated SECRET in a safe, secure place

        in your code, place it in a separate file that is....

        NOT part of your github repo

        to keep the flicker api-key and it's secret - a secret ....

        ....make sure to place a ref in your .gitignore to thge config.js file

                The 'secret' is needed only when...

                  the flickr api method requires a sign-on.

                For flickr app sign-on, Flickr requires using OATH.

                  Since I dont use flickr's methods that require a sign-on...

                  this project does NOT implement OATH.

[To read about, learn how your Flickr app should use OATH follow this link](https://www.flickr.com/services/api/auth.oauth.html)

      STEP 3:

      Setup a javascript that exports your API-KEY

        this projects src/app.js...

         will try to import the API-KEY from a javascript file, like this...

         `import flicker from '../data/config`

         this javscript file is expected to export a key in a object,

         the code may look like this...

         ```
            const flickr = {apikey: 'yourkey',}
            export default flickr
         ```
         if you do implement OATH,

         you will probably will not be using this code...

         but if you do and are still using a fork of this repo......

         you should add the secret to the flickr object like this

         ```
            const flickr = {apikey: 'yourkey', secret: 'yourSecret'}
            export default flickr
         ```

      Step 4:

      Verify the flickr api calls your app will need to make...

          Using the link immedialty below this paragraph.

          The flickr api method helper will show the ....

            available methods, options and response data

            as well as the complete api url syntax

          but it will also...

          plug a 'temp' API-KEY for you, to demo the api-call functionality

          don't fooled ....by the demo of flickr non-sign-on methods...

          you will still need your API-KEY in your app's api calls ....

          otherwise none of the flickr method's api calls will work

[To verify your flickr method api call syntax, follow this link](https://www.flickr.com/services/api/explore/flickr.photos.search)

      Step 5:

        If you get past 'Flicker API keys setup' steps 1-4...

        then you are proably ready for a little break ...

        and the next phase.. Godspeed...
