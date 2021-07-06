import { useParams } from "react-router-dom";
import Constants from "constants.js";
import { apiStates, useApi } from "useApi.js";
import styles from "./book.module.css";
import Rating from "components/rating";
import { dateToYMD } from "utilities";

export default function BookPage() {
  let { id } = useParams();
  const { state, error, data } = useApi(Constants.API_GET_BOOK(id));

  const renderBody = () => {
    return (
      <div class="container">
        <div className={styles.Container}>
          <div className={styles.Rating}>
            <Rating size={25} rating={data.rating} />
            <p>{data.rating}</p>
          </div>
          <p className={styles.Title}>{data.title}</p>
          <p className={styles.Author}>{data.author_name}</p>
          <p className={styles.Publisher}>
            Published by: {data.publisher} on
            {dateToYMD(new Date(data.publishedOn))}
          </p>
          <p className={styles.Isbn}>ISBN: {data.isbn}</p>
          <div className={styles.Informations}>
            <div className={styles.Image}>
              <img
                src={`${Constants.BOOK_IMAGE_PATH}${data._id}.jpg`}
                alt={data.title}
              />
            </div>
            <div className={styles.Info}>
              <p className={styles.Description}>{data.description}</p>

              <p className={styles.Language}><b>Language:</b> {data.language}</p>
              <p className={styles.Characters}>
                Characters:{" "}
                {data.characters.map((character) => {
                  return <span>{character}</span>;
                })}
              </p>
            </div>
          </div>
          <p className={styles.Price}>${data.price}</p>

          <a href="/" className={styles.AddToCart}>
            Add to Cart
          </a>
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
