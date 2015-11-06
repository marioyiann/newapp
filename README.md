# Setting up Gulp & Bootstrap Sass
---

Newapp is a Scaffold for responsive websites based on Bootstrap with SASS framework and automated workflow based on Gulp.

**Features**
Bootstrap 3.3.5
Gulp 3.9.0

## Getting Started

### 1. Git clone
```sh
$ git clone https://github.com/marioyiann/newapp.git
```

### 2. Install node modules 
Make sure you have installed [Node.js](https://nodejs.org) 
```sh
$ npm install
```

### 4. Run Gulp
```sh
$ gulp
```

### 5. Start coding

> Uncomment out what is absolutely necessary on scss files.

---

#### Folder Structure
```
newapp/
|
|
|-- app/
|		|-- index.html 					# index file
|		|-- css/						# css folder
|		|-- img/ 						# place your images 
|		|-- js/							# exported min.js files
|		
|-- dev/
|		|-- assets/						# assets
|		|		|-- bootstrap/ 			# bootstrap fonts + javascript + stylesheets
|		|
|		|-- js							# folder to create your custom javascript files
|		|
|		|--	scss/						# scss folder
|		|		|-- main.scss			# main scss file
|		|		|-- base/				# basic styles e.g. reset, normalize etc.
|		|		|-- components/			# compontents e.g. navigation, buttons etc.
|		|		|-- helpers/			# mixing, variables, functions etc.
|		|		|-- layout/ 			# layout, e.g. grid, header, footer etc.
|		|		|-- pages/				# pages layout e.g. home, about, contact etc.
|		|		|-- vendors/			# vendors e.g. bootstrap
|
|
|-- gulpfile.js 						# magic happens here
```


Hope you enjoy it and find it useful!
Find me on: [Twitter](https://twitter.com/marioyiann)

**License**
MIT