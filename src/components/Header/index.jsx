import { useRef, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  const navRef = useRef();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const showNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible); // Alterna o estado da navbar
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h3>
          <a href="#slogan">&lt; Delta &gt;</a>
        </h3>
        <nav ref={navRef} className={styles.nav}>
          <a href="#pace">Pace</a>
          <a href="#imc">IMC</a>
          <a href="#medidas">Medidas</a>
          <a href="#temperatura">Temperatura</a>
          <a href="#formas">Formas</a>

          <button
            className={`${styles.navBtn} ${styles.navCloseBtn} ${
              isNavbarVisible ? styles.active : ""
            }`}
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button
          className={`${styles.navBtn} ${isNavbarVisible ? styles.active : ""}`}
          onClick={showNavbar}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;
