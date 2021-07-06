const mongoose = require("mongoose");

//mongo schema for books
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      enum: ["Classics", "Fictions"],
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    characters: {
      type: Array,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    publishedOn: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);
