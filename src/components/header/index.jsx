import Logo from "../logo";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.MenuContainer}>
      <Logo />

      <ul className={styles.Menu}>
        <li>
          <a href="/">
            <ion-icon name="search-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="/">
            <ion-icon name="menu-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
}
