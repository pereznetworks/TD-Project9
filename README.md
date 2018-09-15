# TD-Project9 - Yet Another React Gallery App

# Preface:

  If you are a Developer and/or a Team Treehouse Project Reviewer...

    or just someone who dares to tinker with code in Node.js and React

    and you want to modify, build and/or run this app...

    then you are welcome to click on the link below...

  [README.MD for building and running the TD-Project9/project9-gallery-app](https://github.com/pereznetworks/TD-Project9/tree/master/project9-gallery-app)

  If you want to get a little background on this project and ...

    what it took to complete it

    then continue reading and come back to the link later...


# Project Summary:

      As part of Team Treehouse Full-Stack Java Script Tech Degree...

      In this project, we are challenged to create a Gallery App with React.

      I detail the steps I took in

      Preparing for the Project...

      Meeting Project Expectations...

      Exceeding Project Expectations...

# Preparing for the project:

      Created this GitHib repo

          added a section line at the top of .gitignore...

            `# TD-Project9 specific directories and files`
            `project9-gallery-app/node_modules/`

      Created my documentation of Flickr's API docs

          read and digested Flickr exhaustive API documentation

          saved the bits I would need and some important links

      Got a Flickr Api Key

          Logged in to Flicker, using my Yahoo acct,

          went to the Flickr's App Garden and got a non-commercial api key..

          placed the key in config.js that exports an object, flickr.apikey

          place reference to config.js in the repo's .gitignore under...

              `# TD-Project9 specific directories and files`
              `project9-gallery-app/data/config.js`

# Steps to Meet Project Expectations:

      Step 1: Use React-Create-app to create an the build environment for the app

          Using the command:

              `npx create-react-app project9-gallery-app`

          I created the app and the build environment for the app...

              which is in the directory, project9-gallery-app/

      Step 2:  Download project files and start to map out the App

          from from project files...

             imported css and 'container' div into ./src/App.js

             edited html into jsx format so that...

                app would load  and look exactly like the app-mockup           

      Step 3:   Studied app-mockup and project speqs

              the app should have at least..

                  a header component

                    with a title, logo and a
                    form sub-component
                      with a class of  "search-form"
                      with a search input and button

                  a nav component with a class of "main-nav"
                     a sub-component
                         and a ul
                          with 3 list items
                          labeled Cats, Dogs, Computers

                     a div sub-component with a class of "photo-container"
                      the photo-container has 3 sub components

                        the Gallery itself
                          the search results or photos to be displayed
                          an h2 title
                          demo has ul/li 4 thumbnail images

                        a Gallery sub-component
                          each img is displayed is an li  
                          apparently is needs to be
                            a single reusable component
                            when iterating through each search result
                              to be used to render each img  

                        a div with a class of 'not-found'
                          that should be hidden
                           unless no results are found

      Step 4: Setup Routes

          Routes setup as of 9/14/2018 are:
          This is subject to change during this initial development phase

            / : home which always loads the header and nav components
                the header components
                  has a sub component : search
                the nav is a top-level component for now
                  may be implementing sub-components here also

            /gallery  : gallery
                will implement a similar route with parameters
                  the parameters will be passed from the header/search component
              and from the nav component

            /not found  : not found
                only displayed when no results returned or 404 page not found

      Step 5: Verify flick api call is working

            using just fetch and axios, am getting warnings:

              HTTP-Based Public Key Pinning is deprecated.
              Chrome 69 and later will ignore HPKP response headers.
              (Host: api.flickr.com)

            verified I am getting response in json format

              for the sake of showing this to friends and family

              I am hard-coding the safe-search option to highest level = 3

      TODO: plug the json response data into the  various components

            so that photos display

              make sure that photos do a quick zoom affect

              just like in the app-mockup

      TODO: implement query search
