import { useRef, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  const navRef = useRef();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const showNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
    navRef.current.classList.remove(styles.responsive_nav);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h3>
          <a href="#slogan">&lt; Delta &gt;</a>
        </h3>
        <nav ref={navRef} className={styles.nav}>
          <a href="#pace" onClick={closeNavbar}>
            Pace
          </a>
          <a href="#imc" onClick={closeNavbar}>
            IMC
          </a>
          <a href="#medidas" onClick={closeNavbar}>
            Medidas
          </a>
          <a href="#temperatura" onClick={closeNavbar}>
            Temperatura
          </a>
          <a href="#formas" onClick={closeNavbar}>
            Formas
          </a>

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
