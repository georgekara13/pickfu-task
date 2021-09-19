const express = require("express");
const mongoose = require("mongoose");

const DB = require("./configuration/DB").DB();
const { Logger } = require("./configuration/Logger");

mongoose.Promise = global.Promise;
mongoose.connect(DB.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 3001;
const app = express();

app.listen(port, () => {
  Logger.info(`API is up in port ${port}, running in ${DB.MODE} mode`);
});
