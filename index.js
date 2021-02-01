// require the library
const express = require('express');
const path = require('path');
// define port
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
// import firebase config module
const firebase = require('./config/firebase');

// firebase-admin
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// middleware for accessing static files from assets directory
app.use(express.static('./assets'));

// to allow express to use layouts
app.use(expressLayouts);
// extract styles and scripts from sub-pages to head of layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// user express router
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
// path for the ejs files directory, views
app.set('views', './views');        // another way of set without using path
// app.set('views', path.join(__dirname, 'views'));


// start server
app.listen(port, function(err){
    if(err) {
        console.log('Error while running server', err);
        return;
    }
    console.log('Server is running on port', port);
})