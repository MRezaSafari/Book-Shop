const mongoose = require("mongoose");

//mongo schema for authors
const authorSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    biography: {
      type: String,
      required: true,
      trim: true,
    },
    born_location: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    born_date: {
      type: Date,
      required: true,
    },
    death_date: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("author", authorSchema);
