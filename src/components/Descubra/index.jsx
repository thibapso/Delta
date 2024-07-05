import styles from './Descubra.module.css';

function Descubra() {
    return (
        <section id="descubra" className={styles.descubra}>
            <div className={styles.descubraTitle}>
                <h2>Descubra!</h2>
            </div>
            <div className={styles.descubraCards}>
                <div className={styles.Cards__BemEstar}>
                    <h2>Bem-estar</h2>
                    <p className="material-icons-outlined">spa</p>
                    <div>
                        <ul>
                            <li><a href="">- Conversão de Moedas</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.Cards__Fisica}>
                    <h2>Física</h2>
                    <p className="material-icons-outlined">cloud</p>
                </div>

                <div className={styles.Cards__Geometria}>
                    <h2>Geometria</h2>
                    <p className="material-icons-outlined">category</p>
                </div>
            </div>
        </section>
    )
}

export default Descubra;
