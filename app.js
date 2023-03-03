const express = require('express');
const mongoose = require('mongoose');
const Task = require('./src/models/task/index');
const app = express();
app.use(express.json());

const apiRouters = require('./src/routes/routes');

const url = "mongodb+srv://degtevfortech:VvfSo5MgiYWNvp7B@cluster0.97mygr1.mongodb.net/To_do_list"

mongoose.connect(url)

app.use('/', apiRouters);

app.listen(8000, () => {
  console.log('Work 8000')
});