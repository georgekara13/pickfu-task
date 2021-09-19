const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { DB } = require("./configuration/DB");
const { Logger } = require("./configuration/Logger");

// models
const { Answer } = require("./model/Answer");

mongoose.Promise = global.Promise;
mongoose.connect(DB.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  Logger.info(`API is up in port ${port}, running in ${DB.MODE} mode`);
});

app.get("/api/getanswers", (req, res) => {
  Answer.find()
    .sort({ createdAt: -1 })
    .limit(100)
    .exec((err, doc) => {
      if (err) {
        Logger.warn(err);
        return res.status(400).send(err);
      }
      res.status(200).json({
        doc,
      });
    });
});

app.post("/api/addanswer", (req, res) => {
  const answer = new Answer(req.body);

  Logger.info(`Received payload: ${JSON.stringify(req.body)}`);

  answer.save((err, doc) => {
    if (err) {
      Logger.warn(err);
      return res.status(400).send(err);
    }
    res.status(200).json({
      post: true,
      answerId: doc._id,
    });
  });
});
