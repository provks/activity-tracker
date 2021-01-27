// require the library
const express = require('express');
const path = require('path');
// define port
const port = 8000;

const app = express();
// set up view engine
app.set('view engine', 'ejs');
// path for the ejs files directory, views
app.set('views', path.join(__dirname, 'views'));

// route to render index file from views
app.get('/', function(req, res){
    return res.render('index');
});
// contact route
app.get('/contact', function(req, res){
    return res.status(200).render('contact', {title: "Contact Us"});
});
// 404 route
app.get('*', function(req, res){
    return res.status(200).render('404', {title: "OOPS! Not Found!"});
});

// start server
app.listen(port, function(err){
    if(err) {
        console.log('Error while running server', err);
        return;
    }
    console.log('Server is running on port', port);
})