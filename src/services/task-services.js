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

const patchTextTask = async (id, text) => {
  const infoAboutEditing = await Task.findByIdAndUpdate(id, { text });
  return infoAboutEditing;
}

const patchCheckboxTask = async  (id, isCheck) => {
  const infoAboutEditing = await Task.findByIdAndUpdate(id, { isCheck });
  return infoAboutEditing;
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  deleteTasks,
  patchTextTask,
  patchCheckboxTask,
}
