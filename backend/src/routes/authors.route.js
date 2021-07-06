const router = require("express").Router();
const authorsController = require("../controllers/authors.controller");
const booksController = require("../controllers/books.controller");
//routes for authors api

//get list of all authors
//TODO: define paging
const list = router.get("/list", async (req, res, next) => {
  let list = await authorsController.list();

  res.status(200).send({
    status: 200,
    result: {
      total_count: list.length,
      data: list,
    },
  });
});

//get single authors by its id
const find = router.get("/find/:id", async (req, res, next) => {
  try {
    let author = await authorsController.find(req.params.id);
    let books = await booksController.find_by_author(req.params.id);

    res.status(200).send({
      status: 200,
      result: {
        data: {
          author: author,
          books: books
        },
      },
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      error: error,
    });
  }
});

module.exports = { list, find };
