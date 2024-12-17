import React from "react";
import styles from "./Footer.module.css";
import IMGLogo from "../../../public/favicon.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.footerCol} ${styles.footerLogoCol}`}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoAlinhar}>
                <a href="#slogan">
                  <img src={IMGLogo} alt="Logo" />
                  <h3>Delta</h3>
                </a>
              </div>
              <p className={styles.footerLogoParagrafo}>
                Problemas com conversões? O Delta resolve para você. É fácil de
                encontrar!
              </p>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#slogan">Início</a>
              </li>
              <li>
                <a href="#pace">Pace</a>
              </li>
              <li>
                <a href="#imc">IMC</a>
              </li>
              <li>
                <a href="#medidas">Medidas</a>
              </li>
              <li>
                <a href="#temperatura">Temperatura</a>
              </li>
              <li>
                <a href="#formas">Formas</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Repositório</h4>
            <ul>
              <li>
                <a href="https://github.com/thibapso/delta" target="_blank">
                  GitHub - Delta
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Me Siga</h4>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/thibapso/" target="_blank">
                <box-icon
                  name="linkedin"
                  type="logo"
                  color="#1e1e1e"
                ></box-icon>
              </a>
              <a href="https://github.com/thibapso" target="_blank">
                <box-icon name="github" type="logo" color="#1e1e1e"></box-icon>
              </a>
              <a href="https://www.behance.net/thibapso" target="_blank">
                <box-icon name="behance" type="logo" color="#1e1e1e"></box-icon>
              </a>
              <a href="https://www.instagram.com/thibapso/" target="_blank">
                <box-icon
                  name="instagram"
                  type="logo"
                  color="#1e1e1e"
                ></box-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
