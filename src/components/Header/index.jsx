import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav id="navbar">
        <div className={styles.navbarContent}>
          <div className={styles.navbarLogo}>
            <a href="#slogan">&lt; Delta &gt;</a>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            &#9776;
          </div>
          <div
            ref={menuRef}
            className={`${styles.navbarMenu} ${
              menuOpen ? styles.menuOpen : ""
            }`}
          >
            <ul>
              <li>
                <a
                  href="#moedas"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Moedas
                </a>
              </li>
              <li>
                <a href="#imc" className={styles.navLink} onClick={closeMenu}>
                  IMC
                </a>
              </li>
              <li>
                <a
                  href="#medidas"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Medidas
                </a>
              </li>
              <li>
                <a
                  href="#temperatura"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Temperatura
                </a>
              </li>
              <li>
                <a
                  href="#formas"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Formas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
