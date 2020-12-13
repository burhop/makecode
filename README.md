#Forked from BuildBee

Project status: Just Staring

![projects](./docs/screenshots/projects.png)
![tutorials](./docs/screenshots/tutorial.png)
![javascript](./docs/screenshots/javascript.png)

# About TBD

# About PXTs

This repo contains an editor built with [Microsoft MakeCode (PXT)](https://github.com/Microsoft/pxt). The editor is hosted on the GitHub pages at [http://microsoft.github.io/pxt-sample/](http://microsoft.github.io/pxt-sample/)

[![Build Status](https://travis-ci.org/Microsoft/pxt-sample.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-sample)
[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)



## Running locally

These instructions allow to run locally to modify the sample.

### Setup

The following commands are a 1-time setup after synching the repo on your machine.

* install [node.js](https://nodejs.org/en/)

* install the PXT command line
```
npm install -g pxt
```
* install the dependencies
```
npm install
```

### Running the local server

After you're done, simple run this command to open a local web server:
```
yarn start
```

After making a change in the source, refresh the page in the browser.


# Adding new examples

Housekeeping: Please use lowercase for all filenames and dashes for all filenames.


* Design your project and then flip over to the javascript mode
* Take a screenshot and save as project-image.png
* Copy and paste into a markdown file
* For step-by-step tutorials, follow the formatting in heart-shape.md
* List your project by adding a codecard to tutorials.md or examples.md

* To live test your new file
``` yarn start ``
```http://localhost:3232/index.html#tutorial:/examples/YOUR-MD-FILE.md```

* OR to build your new example and have it appear on the dashboard
```yarn checkdocs && yarn start```
* When the browser loads, hard refresh 


## Example code location
Add your code to the following location
```docs/examples/example-name.md```

Follow this guide to work out the format
https://makecode.com/writing-docs/tutorials

Or look at heart-shape.md

## Example image locations
Add your project images to the following location
```static/examples/example-name/project-image.png```

## List your project
List your step-by-step tutorials to the list using codecards

```docs/tutorials.md```

List your finished examples to the list using codecards
 
```docs/examples.md```

