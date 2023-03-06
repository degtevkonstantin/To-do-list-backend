const Task = require("../models/task");

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
  const infoAboutDeletion = await Task({_id: id }).deleteOne()

  return infoAboutDeletion;
}

const deleteTasks = async () => {
  const infoAboutDeletion = await Task.deleteMany()

  return infoAboutDeletion;
}

const editTextTask = async (id, text) => {
  const objectAfterUpdate = await Task.replaceOne({_id: id}, { text: text });

  return objectAfterUpdate;
}

const editCheckboxTask = async  (id, isCheck) => {
  const objectAfterUpdate = await Task.findByIdAndUpdate(id, { isCheck });
  
  return objectAfterUpdate;
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  deleteTasks,
  editTextTask,
  editCheckboxTask,
}
