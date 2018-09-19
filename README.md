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

                    with a title,
                     loads the NavLinks
                      with a link to load the search form

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
                           or a page not found error occurs

      Step 4: Plan and Setup Routes

          am a little unclear if the search form and the nav buttons
            should be rendered on the page at the same time

            / : loads the header component
                sub components:
                  with nav link button and a Search button
                  may also include a logo, title, etc..
                loads gallery component to show default set of sunset pics

            /search : when searching for new categories of images.
                  the search form will appear,
                  replacing the nav component
                  when search results are shown the nav compnent will show
                    the button labels will change...
                    to show the requested search categories
                  loads gallery component to show default set of sunset pics
                  but then does replace default results with search results

            /nav/:navlink : loads a gallery of photos using a param
               reusable component is loaded to display pictures
               displaying photos from the nav component and search component
               used by home and search routes

            /not found  : not found
                only displayed when no results returned or 404 page not found

      Step 5: Verify flickr api call method is working

            using axios, am getting warnings:

              HTTP-Based Public Key Pinning is deprecated.
              Chrome 69 and later will ignore HPKP response headers.
              (Host: api.flickr.com)

              probably because am not using OATH sign-on
              and not implementing TSL and other security for this project

            verified I am getting response in json format

              for the sake of making family-friendly

              I am hard-coding the safe-search option to safe = 1

              although I had to write a least one custom content filter ...
              to cover one word 'innocent' search phrase...
                that consistently yielded 'un-safe' results

      Step 6: Adjust Routes to use BrowserRouter, Switch, Route and NavLinks

               able to access params passed via route through props.match

      Step 7: loaded default json response data and navlinlk photo data

              the Header component is loaded by Home, Nav and Search components

              on initial page load :

              Home page displays default photos using the Gallery component

              the Navlinks point to /nav/:navlinkslabel
                which load the nav component
                 - which is an exact dup of the home page
                 except the actvie nav links stays highlighted
                 and also displays the photos using the Gallery component

      Step 8: implemented a query search using the search form

              makes flickr api call and...
               loads photos using the Gallery component

              a 'Home' page button load the Home page

      Step 9: implement a custom 404 not found component for invalid urls

               also a no results component when a search returns no photos

      Step 10: fixed bugs

              major bug fix: continuous api-calls

                    at first, implemented nav component the same...
                      as the search component
                      this worked great...but....
                      but this meant that a separate route...
                        ugh....
                        would not be shown for each nav link set of photos

                    once I started using the route with a param
                     /nav:navlinkslabel
                      relying on testing for props.match.params.navlinkslabel
                      resulted in nav component making non-stop api-calls

                    other attempts resulted in reaching a max limit for
                      setting state

                    also limited by the fact the api-calls are async
                      so have to wait for these to finish....
                        ... before a component tries to access the data

                    finally decided to load nav link photo once....
                     after app loads components
                      at beginning of app

              styling bugs:  getting the search form and nav links ....
                      to look more consistent

              getting routes to match project requirements

              really wanting to address flickr safe-search problem
                and leaving well enough alone for now
                  did write a custom content filter to ....
                  start catching innocent phrases ...
                    that might yield 'un-safe' results

      TODO:  cross-browser consistency
      
              some of the styling appears different in Safari
              also need to work on smart-phone sized screen

              iOS, Android, Chrome on tablet, laptop and pc sized-screens ok

              haven't tested Windows 10 Edge browser yet either..  
