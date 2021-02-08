const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("router loaded!");
// calling home controller
router.get('/', homeController.home);

// poiting to users router
router.use('/users', require('./users'));

// handle 404
router.get("*", function(req, res) {
    return res.render('404', {
        title: "Trackit - 404"
    });
});

module.exports = router;