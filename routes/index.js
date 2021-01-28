const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("router loaded!");
// calling home controller
router.get('/', homeController.home);

// poiting to users router
router.use('/users', require('./users'));

module.exports = router;