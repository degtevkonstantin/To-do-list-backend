const apiRouters = require('./src/routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const { PORT,  DB_CONNECTION } = require('./config')

const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });
    
    app.listen(PORT, () => {
      console.log("Example app listening on", PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

loadApp();

app.use('/', apiRouters);
