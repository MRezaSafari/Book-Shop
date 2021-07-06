import GenreSlider from "components/genre_slider";
import LatestBooks from "components/latest_books";
import Quotes from "components/quotes";
import AuthorWeek from "components/author_week";
import Searchbox from "components/searchbox";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Searchbox />
      </div>
      <div className="container">
        <Quotes />
      </div>

      <LatestBooks />

      <div className={styles.GenreContainer}>
        <div className="container">
          <GenreSlider genre={"Classics"} />
          <GenreSlider genre={"Fictions"} />
        </div>
      </div>

      <div className="container">
        <AuthorWeek authorId={"60e2d92bcbb7b22ce41aaddb"} />
      </div>
    </>
  );
}
