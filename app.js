const apiRouters = require('./src/routes/task');
const express = require('express');
const mongoose = require('mongoose');
const { PORT,  DB_CONNECTION } = require('./config')
const app = express();
app.use(express.json());
app.use('/', apiRouters);

const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });
    
    app.listen(PORT, () => {
      console.log(`Example app listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

loadApp();

