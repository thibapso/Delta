import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav id="navbar">
                <div className={styles.navbarContent}>
                    <div className={styles.navbarLogo}>
                        <a href="#slogan">
                            &lt; Delta &gt;
                        </a>
                    </div>
                    <div className={styles.navbarMenu}>
                        <ul>
                            <li><a href="#moedas" className={`${styles.navLink} ${styles.moedas}`}>Moedas</a></li>
                            <li><a href="#imc" className={`${styles.navLink} ${styles.imc}`}>IMC</a></li>
                            <li><a href="#medidas" className={`${styles.navLink} ${styles.medidas}`}>Medidas</a></li>
                            <li><a href="#temperatura" className={`${styles.navLink} ${styles.temperatura}`}>Temperatura</a></li>
                            <li><a href="#formas" className={`${styles.navLink} ${styles.formas}`}>Formas</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
