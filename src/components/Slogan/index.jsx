  import styles from "./Slogan.module.css";
  import IMGProfessor from "../../assets/professor.png";

  function Slogan() {
    return (
      <section id="slogan" className={styles.slogan}>
        <div className={styles.sloganContent}>
          <div className={styles.sloganTitle}>
            <h1>
              Problemas com conversões? O{" "}
              <strong className={styles.highlight}>Delta</strong> <br /> resolve
              para você. É fácil de encontrar!
            </h1>
          </div>
        </div>
        <div className={styles.sloganProfessor}>
          <img
            src={IMGProfessor}
            alt="Professor"
            className={styles.professorImg}
          />
        </div>
      </section>
    );
  }

  export default Slogan;
