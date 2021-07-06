const router = require("express").Router();
const booksController = require("../controllers/books.controller");

//routes for books api

//get list of books filtered by genre
//TODO: define paging
const byGenre = router.get(
  "/by/genre/:genre/:limit",
  async (req, res, next) => {
    try {
      let list = await booksController.find_by_genre(
        req.params.genre,
        +req.params.limit
      );

      res.status(200).send({
        status: 200,
        result: {
          total_count: list.length,
          data: list,
        },
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        error: error,
      });
    }
  }
);

//get list of latest books
const latest = router.get("/latest/:limit", async (req, res, next) => {
  try {
    let list = await booksController.find_latest(+req.params.limit);

    res.status(200).send({
      status: 200,
      result: {
        total_count: list.length,
        data: list,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      error: error,
    });
  }
});

//get single book by its id
const find = router.get("/find/:id", async (req, res, next) => {
  try {
    let item = await booksController.find_by_id(req.params.id);

    res.status(200).send({
      status: 200,
      result: {
        data: item[0],
      },
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      error: error,
    });
  }
});

module.exports = { find, byGenre, latest };
