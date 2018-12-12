# To Build and Run your own version of the TD-Project9 React Gallery App:

# For Developers:

    This readme.md provides the basic how-to ..

    .. for developers who might download and/or clone this repo.

    .. and want to modify it, build and run their own version

# Assuming you know to download and/or clone a github repo...

    if not do yet know how to clone or download a github repo...

    go back grasshopper, go back...

# Using Create App built-in scripts:

    npm start
      Starts the development server.

    npm run build
      Bundles the app into static files for production.

    npm test
      Starts the test runner.

    npm run eject
      Removes this tool
      copies ...
        build dependencies,
        configuration files
        and scripts into the app directory.
      If you do this, you can’t go back!

    for complete info using the build and development work-flow
      and bootstrapping provided by Create App see the following link...

[ReadMe for Create App](./CreateReactApp-README.md)

# Flicker API keys setup:

    To get this project up and running you will need...

    a Flickr non-commercial api key.

    I did not include mine in this repo for obvious reasons..

# Steps to get a Flicker non-commercial api key:

      STEP 1:

      have a yahoo acct, use it to sign in to Flickr

      and go to the App Garden and apply for a non-commercial api key..

[Follow this link to apply for a non-commercial api-key from Flickr](https://www.flickr.com/services/apps/create/apply/)

      STEP 2:

      Place your API-KEY and associated SECRET in a safe, secure place

        in your code, place it in a separate file that is....

        NOT part of your github repo

        to keep the flicker api-key and it's secret - a secret ....

          assuming you are also using github

            in .gitignore

            ....make sure include a ref to the config.js file,

      STEP 3:

      Decide whether you will need to use the SECRET

        For this project you will just need your API-KEY

          The 'SECRET' is needed only when...

            the flickr api method requires a sign-on.

          For flickr app sign-on, Flickr requires using OATH.

            Since I dont use flickr's methods that require a sign-on...

            this project does NOT implement OATH.

[To read about, learn how your Flickr app should use OATH follow this link](https://www.flickr.com/services/api/auth.oauth.html)

      STEP 4:

      Setup a javascript module that exports your API-KEY

        this projects src/app.js...

         will try to import the API-KEY from a javascript file, like this...

`import flickr from '../Flickr/config`

         this javscript file is expected to export a key in a object,

         the code may look like this...

 `const flickr = {key: 'yourkey',};
  export default flickr;
 `

         if you DO implement OATH,

         you will probably will not be using a copy this repo...

         but if you do and are still using a copy this repo......

         you should add the 'secret' to the flickr object

         as indicated in the code snippet below

         then make sure do add, in your app code, Api.secret

            everywhere that it uses, Api.key

 `const Api = {key: 'yourkey', secret: 'yourSecret'};
  export default Api
 `

      Step 5:

      Verify the flickr api call and methods your app will need...

          Using the link to flickr's api method helper...

          ...link is immediately below this paragraph...

          The flickr api method helper will show the ....

            available methods, options and response data

            as well as a complete working flickr api url request

          but it will also...

          plug a 'temp' API-KEY for you, to demo the api-call functionality

          don't fooled...

          ....by the demo of flickr non-sign-on methods...

          you will still need your API-KEY in your app's api calls ....

          otherwise none of the flickr method's api calls will work

          in latest verisons of Chrome an warning is logged

            xhr.js:178 HTTP-Based Public Key Pinning is deprecated.
            Chrome 69 and later will ignore HPKP response headers.
            (Host: api.flickr.com)

            this means ...
              it's a good idea to implement security ...
              before making this project part of a production app or service


[To verify your flickr method api call syntax, follow this link](https://www.flickr.com/services/api/explore/flickr.photos.search)

      Step 6:

          using flickr.photo.search

          with a query of sunset

          I saved a sample set of data to a json file


[A how to piece photo source urls together, including image size, safe-search, # per page..](https://www.flickr.com/services/api/misc.urls.html)

    Warning:

    I hoped to make this a 'family-friendly' photo searching app

    it seems....
      Flickr relies on photo owners and creators to...
       tag their photos correctly
       so the safe-search options ...
       does not always filter out 'mature' or 'adult' content

      I started writing a custom filter using regexp and string matching
        to start catching words and phrases ...
        that someone may innocently use
         but seem to consistently return 'unexpected' results

[Sample Photo src url, saved to json format](./src/Flickr/howTo.json)

[A sample set of data set can be found here ](./src/Flickr/sample.json)

     Step 7:

        If you get past the 'Flicker API keys setup' ...

        then you are probably ready for a little break ...

        and the next phase..

        Godspeed...
