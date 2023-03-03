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
  const result = await Task({_id: id }).deleteOne()
  return result;
}

const deleteTasks = async () => {
  const result = await Task.deleteMany()
  return result;
}

const patchTask = (id, text, isCheck) => {
  const result = Task.findByIdAndUpdate(id, {text, isCheck})
  return result;
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  deleteTasks,
  patchTask,
}
