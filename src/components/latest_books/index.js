import Rating from "components/rating";
import Constants from "constants.js";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { apiStates, useApi } from "useApi.js";
import styles from "./latestbooks.module.css";
import { Link } from "react-router-dom";
import { convertToSlug } from "utilities";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function LatestBooks() {
  const { state, error, data } = useApi(Constants.API_GET_BOOKS_LATEST(10));

  const renderSlide = (book) => {
    return (
      <SwiperSlide key={book._id}>
        <div className={styles.SlideContainer}>
          <Link to={`/book/${book._id}/${convertToSlug(book.title)}`}>
            <img
              src={`${Constants.BOOK_IMAGE_PATH}${book._id}.jpg`}
              alt={book.title}
            />
          </Link>

          <div className={styles.InfoContainer}>
            <div>
              <Link to={`/book/${book._id}/${convertToSlug(book.title)}`}>
                <p className={styles.Title}>{book.title}</p>
              </Link>
              <p className={styles.AuthorContainer}>
                by: <span className={styles.Author}>{book.author_name}</span>
              </p>
              <div>
                <Rating rating={book.rating} />
              </div>
              <p className={styles.description}>
                {book.description.substr(
                  0,
                  book.description.lastIndexOf(" ", 200)
                )}{" "}
                ...
              </p>
            </div>
            <div>
              <p className={styles.Price}>${book.price}</p>
              <a href="/" className={styles.AddToCart}>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  const renderBody = () => {
    return (
      <div className={styles.LatesBooksContainer}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loopAdditionalSlides={10}
          initialSlide={1}
          roundLengths={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((book) => {
            return renderSlide(book);
          })}
        </Swiper>
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
