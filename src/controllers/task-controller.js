const { 
  getTasks, 
  createTask, 
  deleteTask, 
  deleteTasks, 
  editTextTask, 
  editCheckboxTask
} = require("../services/task-services");

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
    const { id } = req.params
    const infoAboutDeletion = await deleteTask(id);

    res.status(200).send(infoAboutDeletion);
  } catch (error) {
    res.status(400).send("Failed to delete task");
  }
}

const deleteAllTasks = async (req, res) => {
  try {
    const infoAboutDeletion = await deleteTasks();

    res.status(200).send(infoAboutDeletion);
  } catch (error) {
    res.status(400).send("Failed to delete tasks");
  }
}

const editTextById = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const taskAfterUpdate = await editTextTask(id, text);

    res.status(200).send(taskAfterUpdate);
  } catch {
    res.status(400).send("Failed to edit task");
  }
}

const editCheckboxById = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCheck } = req.body;

    const taskAfterUpdate = await editCheckboxTask(id, isCheck);

    res.status(200).send(taskAfterUpdate);
  } catch {
    res.status(400).send("Failed to edit task");
  }
}

  module.exports = {
    getAllTasks,
    createOneTask,
    deleteOneTask,
    deleteAllTasks,
    editTextById,
    editCheckboxById,
  }

