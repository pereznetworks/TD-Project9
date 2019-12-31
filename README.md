# TD-Project9 - Yet Another React Gallery App

# Preface:

    This is a experimental project, not meant for production

    If you are a Developer

      Please read the Developer-how-to using the link below...

  [README.MD for building and running the TD-Project9/project9-gallery-app](https://github.com/pereznetworks/TD-Project9/tree/master/project9-gallery-app)

# Project Summary:

      As part of Team Treehouse Full-Stack Java Script Tech Degree...

      In this project, we are challenged to create a Gallery App with React.

      I detail the steps I took in

      Preparing for the Project...

      Meeting Project Expectations...

      Exceeding Project Expectations...

# Exceeds

    I did implement the Exceeds Expectations features

      A loading indicator...

        A loading indicator displays each time the app is fetches new data
          or
        when the going back to Home from the Search page

      Friendly no results page....

        If no matches are found by the search,
        a friendly user message tells the user there are no matches.

      404-like page not found page...

        A 404-like error route explains that
          the URL does not match an existing route.

#CSS Tweaks:

      I also made some tweaks to the Search form styling so the button
        matched the NavLink buttons

       and so that the search form home, input and submit button...
         look like 1 element

       The navLink activeStyle uses `background color: #800080;`

# Preparing for the project:

      Created this GitHib repo

          added a section line at the top of .gitignore...

            `# TD-Project9 specific directories and files`
            `project9-gallery-app/node_modules/`

      Created my documentation of Flickr's API docs

          read and digested Flickr exhaustive API documentation

          saved the bits I would need and some important links

      Got a Flickr Api Key

          Logged in to Flicker,

          went to the Flickr's App Garden and got a non-commercial api key..`

          -- this is being changed --- not sure how, Yet

          -- but will somehow move api calls to a backend server

# Steps to Meet Project Expectations:

      Step 1: Use React-Create-app to create ..
       the build environment for the app

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

              a Home component: route '/'
                 which loads the header, navbar, a search link
                   and the gallery component

              a Nav component: route of /navLink/:navLinkLabel
                whose route is set to pick up a parameter, :navLinkLabel
                also loads the header, navbar and gallery components

                loads the photos associated with the :navLinkLabel that
                    was clicked from the Home route

                    so each navlink, when selected, will also show the route...
                    in the browser address bar

                   the /navlinks/:navLinkLabel route will load
                   the Nav component
                    and then an if statement uses the :navLinkLabel param
                        to decide which set of photos to pass to
                          the gallery component

              a Search component: route of /search
                 with a search form
                    also loads the header and gallery components
                passes the search results to the gallery component
                  a new api call is made each time the form is submitted


            the Gallery itself is a re-useable component
             with a class of "photo-container"
              the photo-container has 3 sub components
              the search results or photos to be displayed
              an h2 title
              and loads the 24 images, in the set of photo...
                passed to it from either the Home, Nav or Search components

            a GalleryItem sub-component
              each img is displayed is an li  
                when iterating through each search result
                  to be used to render each img  

            a component, div with a class of 'not-found'
               if a path is invalid
               loads a custom 'page not found' error page

           a component, div with a class of 'no-Results'
              if a search return no results
              loads a custom 'no results' error page

      Step 4: Plan and Setup Routes

        after 4 sets of photos loaded...

            / : loads the Home component
                set the 'Glaciers' navlink to active
                and show the 'Glaciers' set of photos

            /search : when searching for new categories of images.
                make an flickr api call with query set to submitted input
                results are passed to the gallery component to be displayed

            /nav/:navlink : loads a the nav component
               form the home page or with-in the nav component itself...
               the photos object associated with the selected navLink
               are passed to the gallery component to be displayed

            /not found  : not found
                displays the page not found error if no matching routes

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

              styling bugs:  getting the search form and nav links buttons....
                      to look more consistent

              getting routes to match project requirements

      Step 11:  cross-browser consistency

              fixed some styling so the same in Safari, Chrome and Edge
              on Windows10 and MacOS
              used webkit-appearance to over user-stylesheet in Safari

              looks good on Tablet running
              iOS, Android, Chrome

              UI is functional on iPhone and Andriod phone..
               although would like to implement ..
                the newer menu style used in modern web site and apps

# Future Releases:

          Secure implantation
            react front-end that securely access backend routes

          Safe-Search:
            really wanting to address flickr safe-search problem
              and leaving well enough alone for now
            did write a custom content filter to ....
              started catching innocent phrases ...
                that might yield 'un-safe' results

          Full Screen View:
            I would like to implement a full-screen view
            when an image is clicked in the gallery view
             full-screen component will display the image...
               using the entire browse window
            there will be a next, previous to simply view those images..
              with out going back to the gallery view
            there will also be a 'back to the gallery component'
              showing the same set of photos

            I almost had this figured out, but have some bugs to fix before...
              committing the changes to the master branch

              also this would seem to be beyond the project speqs
