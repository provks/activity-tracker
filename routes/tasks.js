const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks_controller');

console.log("Tasks router loaded!");

// calling tasks controller
router.get('/', tasksController.tasks);

module.exports = router;