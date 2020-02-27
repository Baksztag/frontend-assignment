# Implementation notes

## Prerequisites

Make sure you have Node and npm installed locally. Node 10.15.3 and npm 6.9.2 were used during implementation.

To start the project, execute the following commands
```
npm install
node server.js
npm start
```

## Overview

This solution uses React to meet the requirements.
For convenience the project is bootstrapped with `create-react-app`.
ESLint with configuration extending airbnb standard is used to enforce code style consistency.
Custom hooks are used to separate logic from representation and to facilitate testing.
To limit the bundle size, there are no dependencies except React's dependencies and `node-sass` library for using `.sass` files.
Due to little complexity of the task and attention to bundle size,
no extra library is used neither for state management nor out-of-the-box ui elements. Resources are fetched using the `Fetch API`.
According to `source-map-explorer`, the final js bundle size is 137.49KB.
Solution has a simple layout based on provided wireframes that is implemented using SASS
and uses media queries to make it adjust to different screen sizes.
The error message is short, doesn't use technical jargon and provides direction for the user.
Unfortunately at this point the solution lacks tests, works properly only on Chrome and has some styling issues.

## Opportunities for improvement

* Implement tests
* Fix sorting by date on Firefox and Safari
* Fix article image ratio on small screens
* Refine UI
* Differentiate errors with >=400 and >=500 status codes
* Consider switching from React to vanilla JS

# Schibsted frontend task app

This is a very basic npm project with default webpack setup.

You should use this project as a base for your solution.
Feel free to modify/extend this with whatever you need.

In case you need some assistance take a look at official webpack docs:
 - [Guides](https://webpack.js.org/guides/)
 - [Concepts](https://webpack.js.org/concepts/)

Eventually this application will request live data from a real API.

You can find the full description of your assignment in [ASSIGNMENT.md](ASSIGNMENT.md)

## API Documentation
Api server can be found in `server.js` file. You should not modify this file, only use it.

To run the server do:
> `$ node server.js`

Server will start listening on port `6010`.

The server has 2 endpoints:

`/articles/sports` - returns a list of articles from `sport` category

`/articles/fashion` - returns a list of articles from `fashion` category

Be aware of backend errors!
