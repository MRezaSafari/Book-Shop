import styles from "./quotes.module.css";
export default function Quotes() {
  return (
    <div className={styles.Container}>
      <p className={styles.Text}>
        “Life is to be lived, not controlled; and humanity is won by continuing
        to play in face of certain defeat.”
      </p>
      <p className={styles.From}>Ralph Ellison, Invisible Man</p>
    </div>
  );
}
