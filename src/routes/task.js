const express = require('express')
const router = express.Router();
const { validationText } = require('../middlewares/task-validation');
const { getAllTasks, createOneTask, deleteOneTask, deleteAllTasks, editTextById, editCheckboxById} = require('../controllers/task-controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', validationText, createOneTask);
router.delete('/tasks/:id', deleteOneTask);
router.delete('/tasks', deleteAllTasks);
router.patch('/tasks/:id/text', editTextById);
router.patch('/tasks/:id/checkbox', editCheckboxById)

module.exports = router;