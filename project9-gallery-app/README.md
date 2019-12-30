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

        This repo does not use any front-end authentication 
        
        and is an experimental app only, not meant for production
       
            Some suggest placing your api keys ...
            
            in a hidden gitigonored .env file at the root of your project 
       
            Then in your app, import and assign it to a variable like : 
            
                const myapikey = process.env.myflickerapikey
            
                   However, in my testing as well as other's, 
                   
                   the api key still is visible 
                   
                   So this is a no-go for production projects
                   
            So from React documentation 
        
                https://create-react-app.dev/docs/adding-custom-environment-variables/
        
                WARNING: 
                
                Do not store any secrets (such as private API keys) in your React app!

                Environment variables are embedded into the build, 
                
                   ... meaning anyone can view them by... 
                   
                   inspecting your app's react code in chrome's nodejs inspector
            
         So, the solution to this is very advanced 
         
         and it is more of an infrastucture implementation issue 
            
            for example, many recommended that a Backend server should be setup
            
                then the backend server handles app external api calls securely
                
                however, react app is still ...
                
                front-end code running in a user's browser 
                
                and will need to access the backend server routes 
                
                    so secure auth and encrypted communicaiton must be setup
         
                         This is out of the scope of this project 
            
         For stuff like OATH, please check other OAuth2 or other Security sources 
         
      Step 5:

      Verify the flickr api call and methods in your app will need...

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

    Warning:  I hoped to make this a 'family-friendly' photo searching app

    it seems....
      Flickr relies on photo owners and creators to...
       tag their photos correctly
       so the safe-search options ...does not always filter out 'mature' or 'adult' content

      I started writing a custom filter using regexp and string matching
        to start catching words and phrases ...
        that someone may innocently use
         but seem to consistently return 'unexpected' results

[Sample Photo src url, saved to json format](./src/Flickr/howTo.json)

[A sample set of data set can be found here ](./src/Flickr/sample.json)

     Step 7:
     
        Untill I can find a solution to to following issues, 
        
            I will not be moving forward with this project

        If you get past the 'Flicker API keys setup' ...
        
        Implement Auth and some sort of backend server 
        
            to securely handle api calls, (this is not too hard, can axious for example) 
        
            without leaving backend sever routes exposed to the internet...
        
        and feel comfortable with how flicker and other photo/image soureces ...
        
            do/do not tag mature content properly
            
            or have found another source of images and photos to search

        then you are probably ready for a little break ...

        and the next phase..

        Godspeed...
