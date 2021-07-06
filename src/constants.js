const BACKEND_URL = "http://localhost:3030/";

//not really a constant ...
const Constants = {
  AUTHOR_IMAGE_PATH: `${BACKEND_URL}assets/images/authors/`,
  BOOK_IMAGE_PATH: `${BACKEND_URL}assets/images/books/`,
  API_GET_AUTHOR: (author) => `authors/find/${author}`,
  API_GET_BOOKS_BY_GENRE: (genre, limit) => `books/by/genre/${genre}/${limit}`,
  API_GET_BOOKS_LATEST: (limit) => `books/latest/${limit}`,
  API_GET_BOOK: (id) => `books/find/${id}`,
};

export default Constants;
