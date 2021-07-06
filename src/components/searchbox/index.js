import styles from "./searchbox.module.css";

export default function Searchbox() {
  return (
    <div className={styles.Container}>
      <div className={styles.CategoryIcon}>
        <ion-icon name="apps-outline"></ion-icon>
      </div>
      <div className={styles.Category}>
        <select name="Category">
          <option value="Fictions">Fictions</option>
          <option value="Classics">Classics</option>
        </select>
      </div>
      <div className={styles.Input}>
        <input type="search" placeholder="Search books..." />
      </div>
      <div className={styles.SearchIcon}>
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
  );
}
