import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styles from './Formas.module.css';

export default function Formas() {
  const [value, setValue] = useState('1');
  const [formData, setFormData] = useState({
    square: { side: 0 },
    rectangle: { width: 0, height: 0 },
    rhombus: { diag1: 0, diag2: 0 },
    trapezium: { base1: 0, base2: 0, height: 0, side1: 0, side2: 0 },
    triangle: { base: 0, height: 0, side1: 0, side2: 0, side3: 0 },
    circle: { radius: 0 },
  });

  const handleInputChange = (e, shape) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [shape]: { ...prevData[shape], [name]: parseFloat(value) || 0 }
    }));
  };

  const calculateSquare = () => {
    const { side } = formData.square;
    const area = side ** 2;
    const perimeter = 4 * side;
    return { area, perimeter };
  };

  const calculateRectangle = () => {
    const { width, height } = formData.rectangle;
    const area = width * height;
    const perimeter = 2 * (width + height);
    return { area, perimeter };
  };

  const calculateRhombus = () => {
    const { diag1, diag2 } = formData.rhombus;
    const area = (diag1 * diag2) / 2;
    const perimeter = 4 * Math.sqrt(((diag1 ** 2) + (diag2 ** 2)) / 2);
    return { area, perimeter };
  };

  const calculateTrapezium = () => {
    const { base1, base2, height, side1, side2 } = formData.trapezium;
    const area = ((base1 + base2) / 2) * height;
    const perimeter = base1 + base2 + side1 + side2;
    return { area, perimeter };
  };

  const calculateTriangle = () => {
    const { base, height, side1, side2, side3 } = formData.triangle;
    const area = (base * height) / 2;
    const perimeter = side1 + side2 + side3;
    return { area, perimeter };
  };

  const calculateCircle = () => {
    const { radius } = formData.circle;
    const area = Math.PI * radius ** 2;
    const perimeter = 2 * Math.PI * radius;
    return { area, perimeter };
  };

  const getCalculationResults = () => {
    switch (value) {
      case '1':
        return calculateSquare();
      case '2':
        return calculateRectangle();
      case '3':
        return calculateRhombus();
      case '4':
        return calculateTrapezium();
      case '5':
        return calculateTriangle();
      case '6':
        return calculateCircle();
      default:
        return { area: 0, perimeter: 0 };
    }
  };

  const { area, perimeter } = getCalculationResults();

  return (
    <section id="formas" className={styles.formas}>
      <div className={styles.formasTitle}>
        <h2>Calculadora de Formas</h2>
      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={(e, newValue) => setValue(newValue)} aria-label="lab API tabs example">
              <Tab label="Quadrado" value="1" />
              <Tab label="Retângulo" value="2" />
              <Tab label="Losango" value="3" />
              <Tab label="Trapézio" value="4" />
              <Tab label="Triângulo" value="5" />
              <Tab label="Círculo" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1" className={styles.panel}>
            <div className={styles.form}>
              <h3>Quadrado</h3>
              <input
                type="number"
                name="side"
                placeholder="Lado"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'square')}
              />
              <p className={styles.result}>Área: {area.toFixed(2)}</p>
              <p className={styles.result}>Perímetro: {perimeter.toFixed(2)}</p>
            </div>
          </TabPanel>
          <TabPanel value="2" className={styles.panel}>
            <div className={styles.form}>
              <h3>Retângulo</h3>
              <input
                type="number"
                name="width"
                placeholder="Largura"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'rectangle')}
              />
              <input
                type="number"
                name="height"
                placeholder="Altura"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'rectangle')}
              />
              <p className={styles.result}>Área: {area.toFixed(2)}</p>
              <p className={styles.result}>Perímetro: {perimeter.toFixed(2)}</p>
            </div>
          </TabPanel>
          <TabPanel value="3" className={styles.panel}>
            <div className={styles.form}>
              <h3>Losango</h3>
              <input
                type="number"
                name="diag1"
                placeholder="Diagonal Maior"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'rhombus')}
              />
              <input
                type="number"
                name="diag2"
                placeholder="Diagonal Menor"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'rhombus')}
              />
              <p className={styles.result}>Área: {area.toFixed(2)}</p>
              <p className={styles.result}>Perímetro: {perimeter.toFixed(2)}</p>
            </div>
          </TabPanel>
          <TabPanel value="4" className={styles.panel}>
            <div className={styles.form}>
              <h3>Trapézio</h3>
              <input
                type="number"
                name="base1"
                placeholder="Base Maior"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'trapezium')}
              />
              <input
                type="number"
                name="base2"
                placeholder="Base Menor"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'trapezium')}
              />
              <input
                type="number"
                name="height"
                placeholder="Altura"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'trapezium')}
              />
              <input
                type="number"
                name="side1"
                placeholder="Lado 1"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'trapezium')}
              />
              <input
                type="number"
                name="side2"
                placeholder="Lado 2"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'trapezium')}
              />
              <p className={styles.result}>Área: {area.toFixed(2)}</p>
              <p className={styles.result}>Perímetro: {perimeter.toFixed(2)}</p>
            </div>
          </TabPanel>
          <TabPanel value="5" className={styles.panel}>
            <div className={styles.form}>
              <h3>Triângulo</h3>
              <input
                type="number"
                name="base"
                placeholder="Base"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'triangle')}
              />
              <input
                type="number"
                name="height"
                placeholder="Altura"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'triangle')}
              />
              <input
                type="number"
                name="side1"
                placeholder="Lado 1"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'triangle')}
              />
              <input
                type="number"
                name="side2"
                placeholder="Lado 2"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'triangle')}
              />
              <input
                type="number"
                name="side3"
                placeholder="Lado 3"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'triangle')}
              />
              <p className={styles.result}>Área: {area.toFixed(2)}</p>
              <p className={styles.result}>Perímetro: {perimeter.toFixed(2)}</p>
            </div>
          </TabPanel>
          <TabPanel value="6" className={styles.panel}>
            <div className={styles.form}>
              <h3>Círculo</h3>
              <input
                type="number"
                name="radius"
                placeholder="Raio"
                className={styles.input}
                onChange={(e) => handleInputChange(e, 'circle')}
              />
              <p className={styles.result}>Área: {area.toFixed(2)}</p>
              <p className={styles.result}>Perímetro: {perimeter.toFixed(2)}</p>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </section>
  );
}
