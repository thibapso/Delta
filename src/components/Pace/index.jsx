import { useState } from "react";
import styles from "./Pace.module.css";
import IMGRunning from "../../assets/running.png"; // Imagem da corrida
import "@fortawesome/fontawesome-free/css/all.min.css"; // Para utilizar ícones do FontAwesome

function Pace() {
  const [distance, setDistance] = useState("");
  const [timeHours, setTimeHours] = useState("");
  const [timeMin, setTimeMin] = useState("");
  const [timeSec, setTimeSec] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false); // Variável para controlar se o resultado será mostrado

  const calculate = () => {
    const totalSec =
      parseInt(timeHours || 0) * 3600 +
      parseInt(timeMin || 0) * 60 +
      parseInt(timeSec || 0);

    if (distance && totalSec) {
      const paceSec = totalSec / parseFloat(distance);
      const paceMinutes = Math.floor(paceSec / 60);
      const paceSeconds = Math.floor(paceSec % 60);
      const speed = (distance / (totalSec / 3600)).toFixed(2);

      // Armazenar Pace e Velocidade Média separadamente
      setResult({
        pace: `Pace: ${paceMinutes}m ${paceSeconds}s/km`,
        speed: `Velocidade Média: ${speed} km/h`,
      });
      setShowResult(true);
    } else {
      setResult("Por favor, preencha todos os campos necessários.");
      setShowResult(false);
    }
  };

  return (
    <section id="pace" className={styles.pace}>
      <div className={styles.paceTitle}>
        <h2>Calculadora de Pace</h2>
      </div>
      <div className={styles.paceContent}>
        <div className={styles.paceImage}>
          <img
            src={IMGRunning}
            alt="Correndo"
            className={styles.runningImage}
          />
        </div>
        <div className={styles.paceForm}>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className={styles.title} id="title">
              Calculadora Pace
            </h1>
            <div className={styles.inputBox}>
              <label htmlFor="distance">Distância (km)</label>
              <div className={styles.inputField}>
                <i className="fa-solid fa-shoe-prints"></i>
                <input
                  type="number"
                  id="distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  required
                />
                <span>km</span>
              </div>
            </div>

            <div className={styles.inputBox}>
              <label>Tempo Total (h/m/s)</label>
              <div className={styles.inlineInputs}>
                <input
                  type="number"
                  value={timeHours}
                  onChange={(e) => setTimeHours(e.target.value)}
                  placeholder="H"
                  min="0"
                  max="23" // Limita as horas de 0 a 23
                  required
                />
                <input
                  type="number"
                  value={timeMin}
                  onChange={(e) => setTimeMin(e.target.value)}
                  placeholder="M"
                  min="0"
                  max="59" // Limita os minutos de 0 a 59
                  required
                />
                <input
                  type="number"
                  value={timeSec}
                  onChange={(e) => setTimeSec(e.target.value)}
                  placeholder="S"
                  min="0"
                  max="59" // Limita os segundos de 0 a 59
                  required
                />
              </div>
            </div>

            <button onClick={calculate}>Calcular</button>
          </form>

          {showResult && (
            <div className={styles.result}>
              <div className={styles.paceDetails}>
                <span>{result.pace}</span>
                <br />
                <span>{result.speed}</span>
              </div>
              <div className={styles.more_info} id="more_info">
                <a
                  href="https://www.atletis.com.br/o-que-e-pace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mais informações sobre o IMC
                </a>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Pace;
