import { useState, useEffect } from "react";
import styles from "./Temperatura.module.css";

function Temperatura() {
  const [celsius, setCelsius] = useState({ value: 0, original: 0 });
  const [fahrenheit, setFahrenheit] = useState({ value: 32, original: 32 });
  const [kelvin, setKelvin] = useState({ value: 273.15, original: 273.15 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    const v = value === "" ? "" : parseFloat(value);
    setCelsius({ ...celsius, value: v });
    setFahrenheit({
      ...fahrenheit,
      value: v === "" ? "" : ((v * 9) / 5 + 32).toFixed(2),
    });
    setKelvin({ ...kelvin, value: v === "" ? "" : (v + 273.15).toFixed(2) });
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    const v = value === "" ? "" : parseFloat(value);
    setFahrenheit({ ...fahrenheit, value: v });
    setCelsius({
      ...celsius,
      value: v === "" ? "" : (((v - 32) * 5) / 9).toFixed(2),
    });
    setKelvin({
      ...kelvin,
      value: v === "" ? "" : (((v - 32) * 5) / 9 + 273.15).toFixed(2),
    });
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    const v = value === "" ? "" : parseFloat(value);
    setKelvin({ ...kelvin, value: v });
    setCelsius({ ...celsius, value: v === "" ? "" : (v - 273.15).toFixed(2) });
    setFahrenheit({
      ...fahrenheit,
      value: v === "" ? "" : (((v - 273.15) * 9) / 5 + 32).toFixed(2),
    });
  };

  const handleFocus = (setter) => () => {
    setter((prev) => ({ ...prev, original: prev.value }));
    setter((prev) => ({ ...prev, value: "" }));
  };

  const handleBlur = () => {
    setIsTransitioning(true);
    setCelsius((prev) => ({ ...prev, value: prev.original }));
    setFahrenheit((prev) => ({ ...prev, value: prev.original }));
    setKelvin((prev) => ({ ...prev, value: prev.original }));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(`#celsius`) &&
        !e.target.closest(`#fahrenheit`) &&
        !e.target.closest(`#kelvin`)
      ) {
        handleBlur();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300); // 300ms é a duração da transição no CSS
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section id="temperatura" className={styles.temperatura}>
      <div className={styles.temperaturaTitle}>
        <h2>Conversor de Temperatura</h2>
      </div>
      <div className={styles.units}>
        <div className={styles.panel}>
          <h2 className={styles.bg__unit}>°C</h2>
          <h3>Celsius</h3>
          <input
            type="number"
            id="celsius"
            className={isTransitioning ? styles.transition : ""}
            value={celsius.value}
            onFocus={handleFocus(setCelsius)}
            onChange={handleCelsiusChange}
          />
        </div>

        <div className={styles.panel}>
          <h2 className={styles.bg__unit}>°F</h2>
          <h3>Fahrenheit</h3>
          <input
            type="number"
            id="fahrenheit"
            className={isTransitioning ? styles.transition : ""}
            value={fahrenheit.value}
            onFocus={handleFocus(setFahrenheit)}
            onChange={handleFahrenheitChange}
          />
        </div>

        <div className={styles.panel}>
          <h2 className={styles.bg__unit}>°K</h2>
          <h3>Kelvin</h3>
          <input
            type="number"
            id="kelvin"
            className={isTransitioning ? styles.transition : ""}
            value={kelvin.value}
            onFocus={handleFocus(setKelvin)}
            onChange={handleKelvinChange}
          />
        </div>
      </div>
    </section>
  );
}

export default Temperatura;
