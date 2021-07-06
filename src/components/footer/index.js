import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.Container}>
      <div className="container">
        <p>Copyright © 2021. Bookly inc.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
