const mongoose = require("mongoose");
const book = require("../schemas/book.schema");

const find_by_genre = async (genre, limit) => {
  return book.aggregate([
    { $sort: { createdAt: -1 } },
    { $match: { genre } },
    { $limit: limit },
    {
      $lookup: {
        from: "authors",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: "$author",
    },
    {
      $project: {
        author_name: "$author.fullname",
        author_id: "$author._id",
        _id: 1,
        title: 1,
        rating: 1,
        language: 1,
        publisher: 1,
        genre: 1,
        price: 1,
        createdAt: 1,
      },
    },
  ]);
};

const find_by_id = async (id) => {
  return book.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: "authors",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: "$author",
    },
    {
      $project: {
        author_name: "$author.fullname",
        author_id: "$author._id",
        characters: 1,
        _id: 1,
        title: 1,
        description: 1,
        isbn: 1,
        rating: 1,
        language: 1,
        publisher: 1,
        genre: 1,
        price: 1,
        publishedOn: 1,
      },
    },
  ]);
};

const find_by_author = async (author_id) => {
  return book.find({ author: mongoose.Types.ObjectId(author_id) });
};

const find_latest = async (limit) => {
  return book.aggregate([
    { $sort: { createdAt: -1 } },
    { $limit: limit },
    {
      $lookup: {
        from: "authors",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: "$author",
    },
    {
      $project: {
        author_name: "$author.fullname",
        author_id: "$author._id",
        _id: 1,
        title: 1,
        description: { $substr: ["$description", 0, 500] },
        image: 1,
        rating: 1,
        publisher: 1,
        genre: 1,
        price: 1,
      },
    },
  ]);
};

module.exports = {
  find_by_id,
  find_by_genre,
  find_by_author,
  find_latest,
};
