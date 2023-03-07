const Task = require('../models/task');

const getTasks = async () => {
  const tasks = await Task.find();

  return tasks;
};

const createTask = async (text) => {
  const newTask = new Task({ text });
  const savedTask = await newTask.save();

  return savedTask;
};

const deleteTask = async (id) => {
  const infoAboutDeletion = await Task().deleteOne({_id: id });

  return infoAboutDeletion;
}

const deleteTasks = async () => {
  const infoAboutDeletion = await Task.deleteMany();

  return infoAboutDeletion;
}

const editTextTask = async (id, text) => {
  const taskAfterUpdate = await Task.findByIdAndUpdate(
    id, 
    { text },
    { new: true }
   );

  return taskAfterUpdate;
}

const editCheckboxTask = async  (id, isCheck) => {
  const taskAfterUpdate = await Task.findByIdAndUpdate(
    id, 
    { isCheck },
    { new: true }
   );
  
  return taskAfterUpdate;
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  deleteTasks,
  editTextTask,
  editCheckboxTask,
}
