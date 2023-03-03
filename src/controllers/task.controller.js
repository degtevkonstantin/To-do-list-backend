const { getTasks, createTask, deleteTask, deleteTasks, patchTask} = require("../services/task-services");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();

    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send("Failed to get tasks");
  }
};

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;
    const task = await createTask(text);

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Failed to create tasks");
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const objectId = req.body.id
    const info = await deleteTask(objectId);

    res.status(200).send(info)
  } catch (error) {
    res.status(400).send("Failed to delete task");
  }
}

const deleteAllTasks = async (req, res) => {
  try {
    const info = await deleteTasks();

    res.status(200).send(info)
  } catch (error) {
    res.status(400).send("Failed to delete tasks")
  }
}

const patchOneTask = async (req, res) => {
  try {
    const { id } = req.body;
    const { text } = req.body;
    const { isCheck } = req.body;
    const info = await patchTask(id, text, isCheck);

    res.status(200).send(info)
  } catch {
    res.status(400).send("Failed to patch task")
  }
}

  module.exports = {
    getAllTasks,
    createOneTask,
    deleteOneTask,
    deleteAllTasks,
    patchOneTask,
  }

