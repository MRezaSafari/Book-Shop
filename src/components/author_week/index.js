import styles from "./authorweeek.module.css";
import Constants from "constants.js";
import { apiStates, useApi } from "useApi.js";

export default function AuthorWeek({ authorId }) {
  const { state, error, data } = useApi(Constants.API_GET_AUTHOR(authorId));

  const renderBody = () => {
    return (
      <div className={styles.Container}>
        <div className={styles.Books}>
          <ul>
            {Array.from(data.books)
              .slice(0, 2)
              .map((book) => {
                return (
                  <li>
                    <a href="/">
                      <img
                        src={`${Constants.BOOK_IMAGE_PATH}${book._id}.jpg`}
                        alt={book.title}
                      />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.Image}>
          <img
            src={`${Constants.AUTHOR_IMAGE_PATH}${data.author._id}.jpg`}
            alt={data.author.fullname}
          />
        </div>
        <div className={styles.Information}>
          <p className={styles.Title}>Author of the Week</p>
          <p className={styles.Name}>{data.author.fullname}</p>
          <p className={styles.BornLocation}>{data.author.born_location}</p>
          <p className={styles.Biography}>{data.author.biography}</p>
        </div>
      </div>
    );
  };

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "General error"}</p>;
    case apiStates.SUCCESS:
      return renderBody();
    default:
      return <p>loading...</p>;
  }
}
