const booksRouter = require("./books.route");
const authorsRouter = require("./authors.route");

//call all routes initiation here
module.exports = (app) => {
  app.use("/api/books", [
    booksRouter.find,
    booksRouter.latest,
    booksRouter.byGenre,
  ]);
  app.use("/api/authors", [authorsRouter.list]);
};
