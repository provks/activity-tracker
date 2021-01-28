const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

console.log("router loaded!");

// calling users controller
router.get('/', usersController.profile);

module.exports = router;