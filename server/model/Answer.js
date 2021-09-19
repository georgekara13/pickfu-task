const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Answer = mongoose.model("Answer", answerSchema);

module.exports = { Answer };
