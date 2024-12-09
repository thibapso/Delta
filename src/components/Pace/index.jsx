import { useState } from "react";
import styles from "./Pace.module.css";

function Pace() {
  const [distance, setDistance] = useState("");
  const [paceMin, setPaceMin] = useState("");
  const [paceSec, setPaceSec] = useState("");
  const [timeHours, setTimeHours] = useState("");
  const [timeMin, setTimeMin] = useState("");
  const [timeSec, setTimeSec] = useState("");
  const [result, setResult] = useState("");

  const handleFocus = (setter) => () => setter("");

  const calculateTimeAndSpeed = () => {
    const totalPaceSec = parseInt(paceMin) * 60 + parseInt(paceSec);
    const totalSec = totalPaceSec * parseFloat(distance);
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = Math.floor(totalSec % 60);
    const speed = (distance / (totalSec / 3600)).toFixed(2);

    setResult(
      `Tempo Total: ${hours}h ${minutes}m ${seconds}s | Velocidade Média: ${speed} km/h`
    );
  };

  const calculatePaceAndSpeed = () => {
    const totalSec =
      parseInt(timeHours) * 3600 + parseInt(timeMin) * 60 + parseInt(timeSec);
    const paceSec = totalSec / parseFloat(distance);
    const paceMinutes = Math.floor(paceSec / 60);
    const paceSeconds = Math.floor(paceSec % 60);
    const speed = (distance / (totalSec / 3600)).toFixed(2);

    setResult(
      `Pace: ${paceMinutes}m ${paceSeconds}s/km | Velocidade Média: ${speed} km/h`
    );
  };

  return (
    <section id="pace" className={styles.pace}>
      <div className={styles.paceTitle}>
        <h2>Calculadora de Pace</h2>
      </div>

      <div className={styles.cardsContainer}>
        {/* Card 1: Calcular Tempo e Velocidade */}
        <div className={styles.card}>
          <h3>Calcular Tempo Total e Velocidade Média</h3>
          <label>Distância (km):</label>
          <input
            type="number"
            value={distance}
            onFocus={handleFocus(setDistance)}
            onChange={(e) => setDistance(e.target.value)}
          />

          <label>Pace (min/km):</label>
          <div className={styles.inlineInputs}>
            <input
              type="number"
              value={paceMin}
              onFocus={handleFocus(setPaceMin)}
              onChange={(e) => setPaceMin(e.target.value)}
              placeholder="Min"
            />
            <input
              type="number"
              value={paceSec}
              onFocus={handleFocus(setPaceSec)}
              onChange={(e) => setPaceSec(e.target.value)}
              placeholder="Seg"
            />
          </div>

          <button
            className={styles.botao}
            type="button"
            onClick={calculateTimeAndSpeed}
          >
            Calcular
          </button>
        </div>

        {/* Card 2: Calcular Pace e Velocidade */}
        <div className={styles.card}>
          <h3>Calcular Pace e Velocidade Média</h3>
          <label>Distância (km):</label>
          <input
            type="number"
            value={distance}
            onFocus={handleFocus(setDistance)}
            onChange={(e) => setDistance(e.target.value)}
          />

          <label>Tempo Total:</label>
          <div className={styles.inlineInputs}>
            <input
              type="number"
              value={timeHours}
              onFocus={handleFocus(setTimeHours)}
              onChange={(e) => setTimeHours(e.target.value)}
              placeholder="Hs"
            />
            <input
              type="number"
              value={timeMin}
              onFocus={handleFocus(setTimeMin)}
              onChange={(e) => setTimeMin(e.target.value)}
              placeholder="Min"
            />
            <input
              type="number"
              value={timeSec}
              onFocus={handleFocus(setTimeSec)}
              onChange={(e) => setTimeSec(e.target.value)}
              placeholder="Seg"
            />
          </div>

          <button
            className={styles.botao}
            type="button"
            onClick={calculatePaceAndSpeed}
          >
            Calcular
          </button>
        </div>
      </div>

      {result && <div className={styles.result}>{result}</div>}
    </section>
  );
}

export default Pace;
