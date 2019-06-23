# Gulp-Sass-Starter-Kit

A basic Gulpfile kit that I created and use to facilitate my learning of SASS and Advanced CSS.  It is based on [this one](https://www.youtube.com/watch?v=QgMQeLymAdU) My thanks to Kevin Powell for clearing up all my previous Gulp-related confusion, especially pertaining to differences between Gulp 3 and 4. Sometimes all you need is just a basic tool that gets the job done without a lot of extras and this definitely fit the bill.

Now for some instructions for setting up the environment...

**Steps**
---------

**Download or Pull The Repo**  
	The button is at the top of the page obviously.

**Create the folder structure you want to use for your project**  
    Place the content of the kit in a folder and rename it to something useful. A sample folder structure is provided but you can change it to whatever you want to create. If you change it, don't forget to change the content of the paths variable in gulpfile.js to match your folder structure. You can delete the contents of index.html and replace it with something more relevant. 

**Install NPM**  
    Install NPM if you haven't already.  Check at command line with npm -v

 **Install Node**  
	Make sure you have node installed on your computer by typing node-v in the command line.  If it's not there, install it.

**Install gulp-cli**  
    This should already be installed globally on your computer if you've used this repo before; but you can do it again without harm.  Use the command npm install gulp-cli -g Afterward, check installation with gulp -v command.

**Initialize NPM locally at the root of your project folder**  
    Make sure you are now in your project folder.  Use command npm init at the terminal. At this point the terminal will ask you some questions pertaining to your project. Once answered, a package.json file will be generated in the root of your project folder.

 **Install all the node packages needed for gulp, sass and browser-sync**   
    Use the command npm install --save-dev gulp gulp-sass browser-sync  Once this is done, it creates a node_modules file in your directory containing the packages and dependencies needed to run these applications.  A devDependencies branch has now been added to the package.json file because these apps are for development, not production.  We are now good to go.

**Start the server**  
  Use the command gulp watch

Happy Coding!
