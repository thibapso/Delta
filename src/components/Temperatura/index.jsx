import styles from './Temperatura.module.css';

function Temperatura() {
    return (
        <section id="temperatura" className={styles.temperatura}>
            <div className={styles.temperaturaTitle}>
                <h2>Conversor de Temperatura</h2>
            </div>
        </section>
    )
}

export default Temperatura;
