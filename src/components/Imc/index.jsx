import { useState } from 'react';
import styles from './Imc.module.css';
import IMGHalter from '../../assets/halter.png';

function Imc() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [description, setDescription] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue > 0) {
      const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
      setBmi(bmiValue);

      let desc = '';
      if (bmiValue < 18.5) {
        desc = 'Abaixo do peso';
      } else if (bmiValue < 24.9) {
        desc = 'Peso normal';
      } else if (bmiValue < 29.9) {
        desc = 'Sobrepeso';
      } else {
        desc = 'Obesidade';
      }
      setDescription(desc);
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <section id="imc" className={styles.imc}>
      <div className={styles.imcTitle}>
        <h2>Calculadora de IMC</h2>
      </div>
      <div className={styles.imcContent}>
        <div className={styles.imcHalter}>
          <img src={IMGHalter} alt="Halter" />
        </div>
        <div className={styles.imcForms}>
          <form id="form" onSubmit={handleCalculate}>
            <h1 id="title">Calculadora - IMC</h1>

            <div className={styles.inputBox}>
              <label htmlFor="weight">Peso em quilograma (kg)</label>
              <div className={styles.inputField}>
                <i className="material-icons-outlined">scale</i>
                <input
                  type="number"
                  step="0.01"
                  id="weight"
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
                <span>kg</span>
              </div>
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="height">Altura em metros (m)</label>
              <div className={styles.inputField}>
                <i className="material-icons-outlined">straighten</i>
                <input
                  type="number"
                  step="0.01"
                  id="height"
                  name="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
                <span>m</span>
              </div>
            </div>

            <button id="calculate" type="submit">Calcular</button>
          </form>

          {showInfo && (
            <div id="infos">
              <div id="result">
                <div id="bmi">
                  <span id="value">{bmi}</span>
                  <span>Seu IMC</span>
                </div>
                <div id="description">
                  <span>{description}</span>
                </div>
              </div>

              <div id="more_info">
                <a href="https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm" target="_blank" rel="noopener noreferrer">
                  Mais informações sobre o IMC
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Imc;