# Template for Web Development

The open project template for new JavaScript projects using ES6, SCSS 
and Gulp. Feel free to clone this repository!

Usage
-----

When creating a new vanilla JavaScript/HTML/CSS/NodeJS project, try
cloning this repository as a start template for your project.

You will get:
1. HTML files are preprocessed and moved to the build directory.
2. SCSS files are preprocessed and joined to a single file in the build 
directory. Entry point is `src/client/scss/index.scss` file.
3. JavaScript (ES6) is preprocessed and joined into a single file in the
build directory, including sourcemaps. Entry point is 
`src/client/js/index.js` file.
4. All server JavaScript ES6 code is processed to ES5 and moved to the
build directory.
5. All other files are just moved to the build directory by default.

Feel free to improve and extend this template!

Hot Start
---------

Having latest [Git](https://git-scm.com/) and 
[NodeJS](https://nodejs.org/en/) installed (NodeJS v4-6), execute the
following:

```sh
git clone https://github.com/ZitRos/webdev-template
cd webdev-template    # enter directory just created
npm install           # install all the dependencies
run                   # build & run the project
./run.sh              # *nix shell script to build & run
```