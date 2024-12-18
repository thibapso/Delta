import { useState, useEffect } from "react";
import styles from "./Pace.module.css";
import IMGRunning from "../../assets/running.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Pace() {
  const [distance, setDistance] = useState("0");
  const [timeHours, setTimeHours] = useState("0");
  const [timeMin, setTimeMin] = useState("0");
  const [timeSec, setTimeSec] = useState("0");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <h2 className={styles.CalculadoraTitle}>Calculadora de Pace</h2>
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
                  onFocus={() => distance === "0" && setDistance("")}
                  onBlur={() => distance === "" && setDistance("0")}
                  onChange={(e) => setDistance(e.target.value)}
                  required
                />
                <span>km</span>
              </div>
            </div>

            <div className={styles.inputBox}>
              <label>Tempo total (h/m/s)</label>
              <div className={styles.inlineInputs}>
                <div className={styles.inputField}>
                  <input
                    className={styles.inputTempo}
                    type="number"
                    value={timeHours}
                    onFocus={() => timeHours === "0" && setTimeHours("")}
                    onBlur={() => timeHours === "" && setTimeHours("0")}
                    onChange={(e) => setTimeHours(e.target.value)}
                    placeholder="H"
                    min="0"
                    required
                  />
                  {isSmallScreen && <span>Horas</span>}
                </div>
                <div className={styles.inputField}>
                  <input
                    className={styles.inputTempo}
                    type="number"
                    value={timeMin}
                    onFocus={() => timeMin === "0" && setTimeMin("")}
                    onBlur={() => timeMin === "" && setTimeMin("0")}
                    onChange={(e) => setTimeMin(e.target.value)}
                    placeholder="M"
                    min="0"
                    required
                  />
                  {isSmallScreen && <span>Minutos</span>}
                </div>
                <div className={styles.inputField}>
                  <input
                    className={styles.inputTempo}
                    type="number"
                    value={timeSec}
                    onFocus={() => timeSec === "0" && setTimeSec("")}
                    onBlur={() => timeSec === "" && setTimeSec("0")}
                    onChange={(e) => setTimeSec(e.target.value)}
                    placeholder="S"
                    min="0"
                    required
                  />
                  {isSmallScreen && <span>Segundos</span>}
                </div>
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
                  Mais informações sobre o Pace
                </a>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Pace;
