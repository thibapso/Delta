import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Descubra from "./components/Descubra";
import Pace from "./components/Pace";
import Imc from "./components/Imc";
import Medidas from "./components/Medidas";
import Temperatura from "./components/Temperatura";
import Formas from "./components/Formas";
import Footer from "./components/Footer";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    // Adiciona o código de ancoragem suave
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 60; // Ajuste este valor conforme necessário
        const topPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) =>
      anchor.addEventListener("click", handleAnchorClick)
    );

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleAnchorClick)
      );
    };
  }, [showScroll]);

  return (
    <>
      <Header />
      <Slogan />
      <Descubra />
      <div className="fundo__verde">
        <Pace />
        <hr className="divider" />
        <Imc />
      </div>
      <div className="fundo__lilas">
        <Medidas />
        <hr className="divider" />
        <Temperatura />
      </div>
      <div className="fundo__vermelho">
        <Formas />
      </div>
      <Footer />

      <a
        href="#"
        className={`back-to-top ${showScroll ? "visible" : ""}`}
        onClick={scrollTop}
      >
        <span className="material-icons-outlined">keyboard_arrow_up</span>
      </a>
    </>
  );
}

export default App;
