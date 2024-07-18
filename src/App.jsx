import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Descubra from "./components/Descubra";
import Moedas from "./components/Moedas";
import Imc from "./components/Imc";
import Distancia from "./components/Distancia";
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
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <>
  
      <Header />
      <Slogan />
      <Descubra />
      <div className="fundo__verde">
        <Moedas />
        <Imc />
      </div>
      <div className="fundo__lilas">
        <Distancia />
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
