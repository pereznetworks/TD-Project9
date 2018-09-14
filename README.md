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

          mock-up index.html ...

           a main div class, "container"

             and 4 sub-components

              a form component with a class of  "search-form"
                with a search input and button

              a nav component with a class of "main-nav"
                  which has ul
                    with 3 list items
                      labeled Cats, Dogs, Computers

              a div component with a class of "photo-container"
                  with a resuslts h2 title
                  and 4 thumbnail images

              a hidden div component with a calls of 'not-found'
