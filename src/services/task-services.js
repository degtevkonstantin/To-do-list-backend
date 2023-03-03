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

const deleteTask = async (id1) => {
  await Task.find({_id: id1}).deleteOne()
  return true
}

const deleteTasks = async () => {
  await Task.deleteMany()
  return true
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  deleteTasks,
}
