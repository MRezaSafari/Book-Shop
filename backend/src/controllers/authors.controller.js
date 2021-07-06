const mongoose = require("mongoose");
const author = require("../schemas/author.schema");

const list = async () => {
  return author.find();
};

const find = async (author_id) => {
  return author.findOne({ _id: mongoose.Types.ObjectId(author_id) });
};

module.exports = { list, find };
