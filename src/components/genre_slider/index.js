import Constants from "constants.js";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { apiStates, useApi } from "useApi.js";
import styles from "./genreslider.module.css";
import { Link } from "react-router-dom";
import { convertToSlug } from "utilities";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function GenreSlider({ genre }) {
  const { state, error, data } = useApi(
    Constants.API_GET_BOOKS_BY_GENRE(genre, 10)
  );

  const renderTitle = () => {
    return (
      <header data-genre={genre} className={styles.Header}>
        <p className={styles.Title}>{genre}</p>
        <a href="/" className={styles.ShowAllBtn}>
          Show all
        </a>
      </header>
    );
  };

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
                <p className={styles.BookTitle}>{book.title}</p>
              </Link>
              <p className={styles.Author}>by: {book.author_name}</p>
            </div>
            <div>
              <p className={styles.Price}>${book.price}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  const renderBody = () => {
    return (
      <div className={styles.Container}>
        {renderTitle()}

        <div className={styles.List}>
          <div
            className={`${styles.Navigator} ${styles.NavigatePrev} swiper-button-prev_${genre}`}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
          <div
            className={`${styles.Navigator} ${styles.NavigateNext} swiper-button-next_${genre}`}
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>

          <Swiper
            spaceBetween={50}
            loop={true}
            navigation={{
              nextEl: `.swiper-button-next_${genre}`,
              prevEl: `.swiper-button-prev_${genre}`,
            }}
            slidesPerView={5}
            breakpoints={{
              375: {
                slidesPerView: 2,
                spaceBetween: 20,
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
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((book) => {
              return renderSlide(book);
            })}
          </Swiper>
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
