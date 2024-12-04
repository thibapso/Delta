import { useState } from "react";
import styles from "./Formas.module.css";

const ShapeCalculator = () => {
  const [selectedShape, setSelectedShape] = useState("square");
  const [selectedUnit, setSelectedUnit] = useState("cm");
  const [formData, setFormData] = useState({
    square: { side: 0 },
    rectangle: { width: 0, height: 0 },
    rhombus: { diag1: 0, diag2: 0 },
    trapezium: { base1: 0, base2: 0, height: 0, side1: 0, side2: 0 },
    triangle: { base: 0, height: 0, side1: 0, side2: 0, side3: 0 },
    circle: { radius: 0 },
  });

  const calculateShape = () => {
    switch (selectedShape) {
      case "square":
        const { side } = formData.square;
        return { area: side ** 2, perimeter: 4 * side };
      case "rectangle":
        const { width, height } = formData.rectangle;
        return { area: width * height, perimeter: 2 * (width + height) };
      case "rhombus":
        const { diag1, diag2 } = formData.rhombus;
        return {
          area: (diag1 * diag2) / 2,
          perimeter: 4 * Math.sqrt((diag1 ** 2 + diag2 ** 2) / 2),
        };
      case "trapezium":
        const {
          base1,
          base2,
          height: trapeziumHeight,
          side1,
          side2,
        } = formData.trapezium;
        return {
          area: ((base1 + base2) / 2) * trapeziumHeight,
          perimeter: base1 + base2 + side1 + side2,
        };
      case "triangle":
        const {
          base: triBase,
          height: triHeight,
          side1: triSide1,
          side2: triSide2,
          side3: triSide3,
        } = formData.triangle;
        return {
          area: (triBase * triHeight) / 2,
          perimeter: triSide1 + triSide2 + triSide3,
        };
      case "circle":
        const { radius } = formData.circle;
        return { area: Math.PI * radius ** 2, perimeter: 2 * Math.PI * radius };
      default:
        return { area: 0, perimeter: 0 };
    }
  };

  const { area, perimeter } = calculateShape();

  return (
    <div className={styles.shapesContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Calculadora Geométrica</h1>
        <div className={styles.formGroup}>
          <label className={styles.label}>Escolha a forma:</label>
          <select
            value={selectedShape}
            onChange={(e) => setSelectedShape(e.target.value)}
            className={styles.select}
          >
            <option value="square">Quadrado</option>
            <option value="rectangle">Retângulo</option>
            <option value="rhombus">Losango</option>
            <option value="trapezium">Trapézio</option>
            <option value="triangle">Triângulo</option>
            <option value="circle">Círculo</option>
          </select>
        </div>

        {/* Dropdown para unidades */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Escolha a unidade de medida:</label>
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className={styles.select}
          >
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="inches">Polegadas</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          {selectedShape === "square" && (
            <div className={styles.inputGroup}>
              <label className={styles.label}>Lado do Quadrado:</label>
              <input
                type="number"
                value={formData.square.side}
                onChange={(e) =>
                  setFormData({ ...formData, square: { side: e.target.value } })
                }
                className={styles.input}
              />
            </div>
          )}

          {selectedShape === "rectangle" && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Largura:</label>
                <input
                  type="number"
                  value={formData.rectangle.width}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rectangle: {
                        ...formData.rectangle,
                        width: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Altura:</label>
                <input
                  type="number"
                  value={formData.rectangle.height}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rectangle: {
                        ...formData.rectangle,
                        height: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
            </>
          )}

          {selectedShape === "rhombus" && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Diagonal 1:</label>
                <input
                  type="number"
                  value={formData.rhombus.diag1}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rhombus: { ...formData.rhombus, diag1: e.target.value },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Diagonal 2:</label>
                <input
                  type="number"
                  value={formData.rhombus.diag2}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rhombus: { ...formData.rhombus, diag2: e.target.value },
                    })
                  }
                  className={styles.input}
                />
              </div>
            </>
          )}

          {selectedShape === "trapezium" && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Base 1:</label>
                <input
                  type="number"
                  value={formData.trapezium.base1}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      trapezium: {
                        ...formData.trapezium,
                        base1: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Base 2:</label>
                <input
                  type="number"
                  value={formData.trapezium.base2}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      trapezium: {
                        ...formData.trapezium,
                        base2: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Altura:</label>
                <input
                  type="number"
                  value={formData.trapezium.height}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      trapezium: {
                        ...formData.trapezium,
                        height: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Lado 1:</label>
                <input
                  type="number"
                  value={formData.trapezium.side1}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      trapezium: {
                        ...formData.trapezium,
                        side1: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Lado 2:</label>
                <input
                  type="number"
                  value={formData.trapezium.side2}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      trapezium: {
                        ...formData.trapezium,
                        side2: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
            </>
          )}

          {selectedShape === "triangle" && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Base:</label>
                <input
                  type="number"
                  value={formData.triangle.base}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      triangle: { ...formData.triangle, base: e.target.value },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Altura:</label>
                <input
                  type="number"
                  value={formData.triangle.height}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      triangle: {
                        ...formData.triangle,
                        height: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Lado 1:</label>
                <input
                  type="number"
                  value={formData.triangle.side1}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      triangle: { ...formData.triangle, side1: e.target.value },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Lado 2:</label>
                <input
                  type="number"
                  value={formData.triangle.side2}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      triangle: { ...formData.triangle, side2: e.target.value },
                    })
                  }
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Lado 3:</label>
                <input
                  type="number"
                  value={formData.triangle.side3}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      triangle: { ...formData.triangle, side3: e.target.value },
                    })
                  }
                  className={styles.input}
                />
              </div>
            </>
          )}

          {selectedShape === "circle" && (
            <div className={styles.inputGroup}>
              <label className={styles.label}>Raio do Círculo:</label>
              <input
                type="number"
                value={formData.circle.radius}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    circle: { radius: e.target.value },
                  })
                }
                className={styles.input}
              />
            </div>
          )}
        </div>

        <div className={styles.results}>
          <h2 className={styles.resultTitle}>Resultados:</h2>
          <p className={styles.resultText}>
            Área: <span className={styles.resultValue}>{area}</span>{" "}
            {selectedUnit}²
          </p>
          <p className={styles.resultText}>
            Perímetro: <span className={styles.resultValue}>{perimeter}</span>{" "}
            {selectedUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShapeCalculator;
