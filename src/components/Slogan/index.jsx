import styles from './Slogan.module.css';
import IMGProfessor from '../../assets/professor.png';

function Slogan() {
    return (
        <section id="slogan" className={styles.slogan}>
            <div className={styles.sloganTitle}>
                <h1>Problemas com conversões? O Delta resolve para você. É fácil de encontrar!</h1>
            </div>
            <div className={styles.sloganProfessor}>
                <img src={IMGProfessor} alt="" />
            </div>
        </section>
    )
}

export default Slogan;
