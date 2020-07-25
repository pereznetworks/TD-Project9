# To Build and Run your own version of the TD-Project9 React Gallery App:

# Project Update

## This project is in the process of being re-worked

- coming soon for v2
  - goals, milestones and release eta

# For Developers:

- Please make sure to update all project deps

- caveat: code in this repo may not work after you do update project deps

  - This readme.md provides the basic how-to ..
    - for developers who might download and/or clone this repo.
    - and want to modify it, build and run their own version

## Assuming you know to download and/or clone a github repo...

- if you do yet know how to clone or download a github repo...
  - go back grasshopper, go back...

## Using Create App built-in scripts:

- npm start
  - Starts the development server.

- npm run build
  - Bundles the app into static files for production.

- npm test
  - Starts the test runner.

- npm run eject
  - Removes this tool
  - copies ...
  - build dependencies,
  - configuration files
  - and scripts into the app directory.
  - If you do this, you can’t go back!

  - for complete info using the build and development work-flow and bootstrapping provided by Create App see the following link...
  - [ReadMe for Create App](./CreateReactApp-README.md)

## Flicker API keys setup needed

- To get this project up and running you will need...
  - a Flickr non-commercial api key.
  - I did not include mine in this repo for obvious reasons..

## STEP 1:

- get your own Flickr api key
  - use whatever email address you want to sign-up for sign in to Flickr
  - and go to the App Garden and apply for a non-commercial api key..
  - [Follow this link to apply for a non-commercial api-key from Flickr](https://www.flickr.com/services/apps/create/apply/)

## STEP 2:

- Place your API-KEY and associated SECRET in a safe, secure place

  - Do NOT place this info in your code
    - place it in a separate file that is....
      - NOT part of your github repo

  - So how do I make api calls using plain React?
    - .. in short .. you dont ...
    - see STEP 4

## STEP 3:

  - Decide whether you will need to use ...

  - your FLICKR SECRET and your FLICKR API-KEY

  - The 'SECRET' is needed only when...

    - the flickr api method requires a sign-on.
    - For flickr app sign-on, Flickr requires using OATH.
      - This project does NOT implement OATH on the backend or frontend,
      - since I dont use flickr's methods that require a sign-on...

  - [To read more Flickr apps and OATH follow this link](https://www.flickr.com/services/api/auth.oauth.html)

## STEP 4:

  - As stated above,
    - this repo does not use any front-end authentication
    - and is at an experimental stage only, not meant for production

  - Some suggest placing your api keys ...
    - in a hidden gitignored .env file at the root of your project
    - then in a separate module, import and assign it to a variable like :
    - `import 'process';
       export default myapikey = process.env.myflickerapikey;`

  - Then in main react app.js
    - `import separateModule.myapikey`

  - However, in my testing as well as other's,
    - the api key still is visible
      - check this out in your browsers dev-tools
    - So this is a no-go for production or even in development
      - don't want to make this a habit

- So from React documentation
  - https://create-react-app.dev/docs/adding-custom-environment-variables/

  - WARNING:
    - Do not store any secrets (such as private API keys) in your React app!
    - Environment variables are embedded into the build,
    - meaning anyone can view them by...
    - inspecting your app's react code in chrome's react inspector

- So, the solution to this is very advanced
  - and it is more of an infrastructure implementation issue

  - a server-side app handles app external api calls securely
    - for example, AXIOS does this
    - however, a react app is still ...
      - front-end code running in a user's browser
      - and will need to call the backend server routes
        - so on the backend server
          - axios is used to make secure auth and tsl encrypted communication calls

  - for a development server, the best idea is to :
    - have the front-end code call your back-end server
      - the backend server makes the secure api call
        - using AXIOS' built in secure https calls

  - the challenge is implementing React Stateful components to trigger a call to server-side route that...
    - first makes the AXIOS https secure calls
    - the data sent it response will be processed
    - wrapped in freshly compiled react components
    - and sent to user browser to be rendered

- For stuff like OATH, please check the OAuth2 NPM package
  - or other Security Authentication sources

- Okay, more steps still to go

## Step 5:

- Verify the flickr api call and methods that your app will need...

- Using the link to flickr's api method helper
  - the link is immediately below this section...

- The flickr api method helper will show the ....
  - available methods, options and response data
  - as well as a complete working flickr api url request
  - but it will also...
    - plug a 'temp' API-KEY for you, to demo the api-call functionality
  - don't fooled...
    - by the demo of flickr non-sign and sign methods...
    - you will still need your specific API-KEY in your code for the api calls to work
  - otherwise flickr method's api calls will work a few times
    - eventually flickr will block the ip address your making the api calls from

  - in some versions of Chrome the following warning is logged
    - `xhr.js:178 HTTP-Based Public Key Pinning is deprecated. Chrome 69 and later will ignore HPKP response headers. (Host: api.flickr.com)`
    - this highlights the warning on this from Step 4...
    - implement, review, triple check security ...
    - before going production with any app or service...

- [To verify your flickr method api call syntax, follow this link](https://www.flickr.com/services/api/explore/flickr.photos.search)

## Step 6:

- using flickr.photo.search
  - with a query of 'sunset'
  - I saved a sample set of data to a json file

- [A how to piece photo source urls together, including image size, safe-search, # per page..](https://www.flickr.com/services/api/misc.urls.html)

- Warning: I hoped to make this a "family-friendly" photo searching app, however...

- CAVEAT:
  - Flickr relies on photo owners and creators to...
    - tag their photos appropriately
  - which of course most do not do
  - and lots of people have different views on what is "family friendly"
  - so the safe-search options
    - frequently do not filter out what some may consider 'mature' or 'adult' content

- I started writing a custom filter
  - using regexp and string matching
  - to start catching words and phrases
    - that someone may innocently use
  - but no matter how exhaustive,
    - even when the same exact queries
      - consistently return 'unexpected' results

- [Sample Photo src url, saved to json format](./src/Flickr/howTo.json)

- [A sample set of data set can be found here ](./src/Flickr/sample.json)

- Until I can find a solution to to STEP 6:caveat issue
  - I will not be moving forward with this project

## Step 7:

- If you get past steps 1 through 6

- Implement Auth and some sort of backend server
    - to securely handle api calls,
      - (this is not too hard, can use axious for example)
    - without leaving backend server routes exposed to the internet...
      - (this is the not-so-easy-part)

- and feel comfortable with
  - how flicker and other photo/image sources and results
  - that do/do not tag mature content properly
  - or have found another source of images and photos to search

- then you are probably ready for a little break ...

- And a for the next phase of your project
  - Godspeed...
