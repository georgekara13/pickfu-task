const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socketIO = require("socket.io");

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

const server = require("http").createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  Logger.info(`New connection ${socket.id}`);

  socket.on("initial_data", () => {
    Answer.find()
      .sort({ createdAt: -1 })
      .limit(100)
      .exec((err, doc) => {
        if (err) {
          Logger.warn(err);
        }

        io.sockets.emit("get_data", doc);
      });
  });

  socket.on("add_answer", (doc) => {
    const answer = new Answer(doc);
    Logger.info(JSON.stringify(doc));
    answer.save((err, doc) => {
      if (err) {
        Logger.warn(err);
      }

      io.sockets.emit("change_data");
    });
  });

  socket.on("disconnect", () => {
    Logger.info(`Client ${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  Logger.info(`API is up in port ${port}, running in ${DB.MODE} mode`);
});
