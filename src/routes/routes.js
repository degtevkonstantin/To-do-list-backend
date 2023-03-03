const { validationText } = require('../middlewares/task-validation');

const express = require('express')
const router = express.Router();
const { getAllTasks, createOneTask, deleteOneTask, deleteAllTasks} = require('../controllers/task.controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', validationText, createOneTask);
router.post('/tasks', createOneTask);
router.delete('/tasks', deleteOneTask);
router.delete('/allTasks', deleteAllTasks);

module.exports = router;