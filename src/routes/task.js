const express = require('express')
const router = express.Router();
const { validationText, validationCheckbox } = require('../middlewares/task-validation');
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
router.patch(`/tasks/text/:id/`,validationText, editTextById);
router.patch('/tasks/checkbox/:id/', validationCheckbox, editCheckboxById);

module.exports = router;