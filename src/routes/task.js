const express = require('express')
const router = express.Router();
const { validationText } = require('../middlewares/task-validation');
const { 
  getAllTasks, 
  createOneTask, 
  deleteOneTask, 
  deleteAllTasks, 
  editTextById, 
  editCheckboxById
} = require('../controllers/task-controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', validationText, createOneTask);
router.delete('/tasks/:id', deleteOneTask);
router.delete('/tasks', deleteAllTasks);
router.patch(`/tasks/text/:id/`, editTextById);
router.patch('/tasks/checkbox/:id/', editCheckboxById);

module.exports = router;