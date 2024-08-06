import { useState, useEffect } from "react";
import styles from "./Medidas.module.css";

function Medidas() {
  const [kilometers, setKilometers] = useState({ value: 1, original: 1 });
  const [meters, setMeters] = useState({ value: 1000, original: 1000 });
  const [centimeters, setCentimeters] = useState({ value: 100000, original: 100000 });
  const [millimeters, setMillimeters] = useState({ value: 1000000, original: 1000000 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleKilometersChange = (e) => {
    const value = e.target.value;
    const v = value === "" ? "" : parseFloat(value);
    setKilometers({ ...kilometers, value: v });
    setMeters({ ...meters, value: v === "" ? "" : v * 1000 });
    setCentimeters({ ...centimeters, value: v === "" ? "" : v * 100000 });
    setMillimeters({ ...millimeters, value: v === "" ? "" : v * 1000000 });
  };

  const handleMetersChange = (e) => {
    const value = e.target.value;
    const v = value === "" ? "" : parseFloat(value);
    setMeters({ ...meters, value: v });
    setKilometers({ ...kilometers, value: v === "" ? "" : v / 1000 });
    setCentimeters({ ...centimeters, value: v === "" ? "" : v * 100 });
    setMillimeters({ ...millimeters, value: v === "" ? "" : v * 1000 });
  };

  const handleCentimetersChange = (e) => {
    const value = e.target.value;
    const v = value === "" ? "" : parseFloat(value);
    setCentimeters({ ...centimeters, value: v });
    setKilometers({ ...kilometers, value: v === "" ? "" : v / 100000 });
    setMeters({ ...meters, value: v === "" ? "" : v / 100 });
    setMillimeters({ ...millimeters, value: v === "" ? "" : v * 10 });
  };

  const handleMillimetersChange = (e) => {
    const value = e.target.value;
    const v = value === "" ? "" : parseFloat(value);
    setMillimeters({ ...millimeters, value: v });
    setKilometers({ ...kilometers, value: v === "" ? "" : v / 1000000 });
    setMeters({ ...meters, value: v === "" ? "" : v / 1000 });
    setCentimeters({ ...centimeters, value: v === "" ? "" : v / 10 });
  };

  const handleFocus = (setter) => () => {
    setter((prev) => ({ ...prev, original: prev.value }));
    setter((prev) => ({ ...prev, value: "" }));
  };

  const handleBlur = () => {
    setIsTransitioning(true);
    setKilometers((prev) => ({ ...prev, value: prev.original }));
    setMeters((prev) => ({ ...prev, value: prev.original }));
    setCentimeters((prev) => ({ ...prev, value: prev.original }));
    setMillimeters((prev) => ({ ...prev, value: prev.original }));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(`#kilometers`) &&
        !e.target.closest(`#meters`) &&
        !e.target.closest(`#centimeters`) &&
        !e.target.closest(`#millimeters`)
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
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section id="medidas" className={styles.medidas}>
      <div className={styles.medidasTitle}>
        <h2>Conversor de Medidas</h2>
      </div>
      <div className={styles.units}>
        <div className={styles.panel}>
          <h2 className={styles.bg__unit}>km</h2>
          <h3>Quilômetros</h3>
          <input
            type="number"
            id="kilometers"
            className={isTransitioning ? styles.transition : ""}
            value={kilometers.value}
            onFocus={handleFocus(setKilometers)}
            onChange={handleKilometersChange}
          />
        </div>

        <div className={styles.panel}>
          <h2 className={styles.bg__unit}>m</h2>
          <h3>Metros</h3>
          <input
            type="number"
            id="meters"
            className={isTransitioning ? styles.transition : ""}
            value={meters.value}
            onFocus={handleFocus(setMeters)}
            onChange={handleMetersChange}
          />
        </div>

        <div className={styles.panel}>
          <h2 className={styles.bg__unit}>cm</h2>
          <h3>Centímetros</h3>
          <input
            type="number"
            id="centimeters"
            className={isTransitioning ? styles.transition : ""}
            value={centimeters.value}
            onFocus={handleFocus(setCentimeters)}
            onChange={handleCentimetersChange}
          />
        </div>

        <div className={styles.panel}>
          <h2 className={styles.bg__unit}>mm</h2>
          <h3>Milímetros</h3>
          <input
            type="number"
            id="millimeters"
            className={isTransitioning ? styles.transition : ""}
            value={millimeters.value}
            onFocus={handleFocus(setMillimeters)}
            onChange={handleMillimetersChange}
          />
        </div>
      </div>
    </section>
  );
}

export default Medidas;
