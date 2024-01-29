const mongoose = require("mongoose");
const tosoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Todo", tosoSchema);
