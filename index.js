// require the library
const express = require('express');
const path = require('path');
// define port
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

// to allow express to use layouts
app.use(expressLayouts);

// user express router
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
// path for the ejs files directory, views
app.set('views', path.join(__dirname, 'views'));


// start server
app.listen(port, function(err){
    if(err) {
        console.log('Error while running server', err);
        return;
    }
    console.log('Server is running on port', port);
})