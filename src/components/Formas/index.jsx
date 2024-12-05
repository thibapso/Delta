import { useState } from "react";
import styles from "./Formas.module.css";

const ShapeCalculator = () => {
  const [selectedShape, setSelectedShape] = useState("square");
  const [selectedUnit, setSelectedUnit] = useState("cm");
  const [formData, setFormData] = useState({
    square: { side: 0 },
    rectangle: { width: 0, height: 0 },
    rhombus: { side: 0, diag1: 0, diag2: 0 },
    triangle: { base: 0, height: 0, side1: 0, side2: 0, side3: 0 },
    circle: { radius: 0, pi: 3.14 },
    trapezoid: { base1: 0, base2: 0, height: 0, side1: 0, side2: 0 },
  });

  const calculateShape = () => {
    const calculations = {
      square: ({ side }) => ({ area: side ** 2, perimeter: 4 * side }),
      rectangle: ({ width, height }) => ({
        area: width * height,
        perimeter: 2 * (width + height),
      }),
      rhombus: ({ side }) => ({
        area: (formData.rhombus.diag1 * formData.rhombus.diag2) / 2,
        perimeter: 4 * side,
      }),
      triangle: ({ base, height, side1, side2, side3 }) => ({
        area: (base * height) / 2,
        perimeter: side1 + side2 + side3,
      }),
      circle: ({ radius, pi }) => ({
        area: pi * radius ** 2,
        perimeter: 2 * pi * radius,
      }),
      trapezoid: ({ base1, base2, height, side1, side2 }) => ({
        area: ((base1 + base2) * height) / 2,
        perimeter: base1 + base2 + side1 + side2,
      }),
    };

    return calculations[selectedShape](formData[selectedShape]);
  };

  const { area, perimeter } = calculateShape();

  const handleInputChange = (shape, field, value) => {
    setFormData({
      ...formData,
      [shape]: { ...formData[shape], [field]: value },
    });
  };

  const renderInputs = {
    square: (
      <InputField
        label="Lado do Quadrado"
        value={formData.square.side}
        onChange={(value) => handleInputChange("square", "side", value)}
        placeholder="Informe o lado"
      />
    ),
    rectangle: (
      <>
        <InputField
          label="Largura"
          value={formData.rectangle.width}
          onChange={(value) => handleInputChange("rectangle", "width", value)}
          placeholder="Informe a largura"
        />
        <InputField
          label="Altura"
          value={formData.rectangle.height}
          onChange={(value) => handleInputChange("rectangle", "height", value)}
          placeholder="Informe a altura"
        />
      </>
    ),
    rhombus: (
      <>
        <InputField
          label="Comprimento do lado"
          value={formData.rhombus.side}
          onChange={(value) => handleInputChange("rhombus", "side", value)}
          placeholder="Informe o comprimento do lado"
        />
        <InputField
          label="Diagonal maior"
          value={formData.rhombus.diag1}
          onChange={(value) => handleInputChange("rhombus", "diag1", value)}
          placeholder="Informe a diagonal maior"
        />
        <InputField
          label="Diagonal menor"
          value={formData.rhombus.diag2}
          onChange={(value) => handleInputChange("rhombus", "diag2", value)}
          placeholder="Informe a diagonal menor"
        />
      </>
    ),
    triangle: (
      <>
        <InputField
          label="Base"
          value={formData.triangle.base}
          onChange={(value) => handleInputChange("triangle", "base", value)}
          placeholder="Informe a base"
        />
        <InputField
          label="Altura"
          value={formData.triangle.height}
          onChange={(value) => handleInputChange("triangle", "height", value)}
          placeholder="Informe a altura"
        />
        <InputField
          label="Lado 1"
          value={formData.triangle.side1}
          onChange={(value) => handleInputChange("triangle", "side1", value)}
          placeholder="Informe o lado 1"
        />
        <InputField
          label="Lado 2"
          value={formData.triangle.side2}
          onChange={(value) => handleInputChange("triangle", "side2", value)}
          placeholder="Informe o lado 2"
        />
        <InputField
          label="Lado 3"
          value={formData.triangle.side3}
          onChange={(value) => handleInputChange("triangle", "side3", value)}
          placeholder="Informe o lado 3"
        />
      </>
    ),
    circle: (
      <>
        <InputField
          label="Raio do Círculo"
          value={formData.circle.radius}
          onChange={(value) => handleInputChange("circle", "radius", value)}
          placeholder="Informe o raio"
        />
        <InputField
          label="Valor de PI"
          value={formData.circle.pi}
          onChange={(value) => handleInputChange("circle", "pi", value)}
          placeholder="Informe o valor de PI"
        />
      </>
    ),
    trapezoid: (
      <>
        <InputField
          label="Base maior"
          value={formData.trapezoid.base1}
          onChange={(value) => handleInputChange("trapezoid", "base1", value)}
          placeholder="Informe a base maior"
        />
        <InputField
          label="Base menor"
          value={formData.trapezoid.base2}
          onChange={(value) => handleInputChange("trapezoid", "base2", value)}
          placeholder="Informe a base menor"
        />
        <InputField
          label="Altura"
          value={formData.trapezoid.height}
          onChange={(value) => handleInputChange("trapezoid", "height", value)}
          placeholder="Informe a altura"
        />
        <InputField
          label="Lado 1"
          value={formData.trapezoid.side1}
          onChange={(value) => handleInputChange("trapezoid", "side1", value)}
          placeholder="Informe o lado 1"
        />
        <InputField
          label="Lado 2"
          value={formData.trapezoid.side2}
          onChange={(value) => handleInputChange("trapezoid", "side2", value)}
          placeholder="Informe o lado 2"
        />
      </>
    ),
  };

  return (
    <div className={styles.containerPrincipal}>
      <h1 className={styles.title}>Calculadora Geométrica</h1>
      <div className={styles.card}>
        <FormSelector
          label="Escolha a forma:"
          value={selectedShape}
          onChange={setSelectedShape}
          options={[
            { value: "square", label: "Quadrado" },
            { value: "rectangle", label: "Retângulo" },
            { value: "rhombus", label: "Losango" },
            { value: "triangle", label: "Triângulo" },
            { value: "trapezoid", label: "Trapézio" },
            { value: "circle", label: "Círculo" },
          ]}
        />
        <FormSelector
          label="Escolha a unidade de medida:"
          value={selectedUnit}
          onChange={setSelectedUnit}
          options={[
            { value: "mm", label: "mm" },
            { value: "cm", label: "cm" },
            { value: "m", label: "m" },
            { value: "km", label: "km" },
          ]}
        />
        <div className={styles.inputGroup}>{renderInputs[selectedShape]}</div>
        <div className={styles.results}>
          <h2 className={styles.resultTitle}>Resultados:</h2>
          <p className={styles.resultText}>
            Área: <span className={styles.resultValue}>{area.toFixed(2)}</span>{" "}
            {selectedUnit}²
          </p>
          <p className={styles.resultText}>
            Perímetro:{" "}
            <span className={styles.resultValue}>{perimeter.toFixed(2)}</span>{" "}
            {selectedUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

const FormSelector = ({ label, value, onChange, options }) => (
  <div className={styles.formGroup}>
    <label className={styles.label}>{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.select}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

const InputField = ({ label, value, onChange, placeholder }) => (
  <div className={styles.inputGroup}>
    <label className={styles.label}>{label}</label>
    <input
      type="number"
      value={value || ""}
      onChange={(e) => onChange(Number(e.target.value))}
      className={styles.input}
      placeholder={placeholder}
    />
  </div>
);

export default ShapeCalculator;
