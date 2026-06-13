import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-backgrounds">
        <div className="hero-bg-left"></div>
        <div className="hero-bg-right"></div>
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content-container">
        <div className="hero-text-content">
          <h1 className="hero-title">
            Studio B58: Arquitetura e Construção de <br />
            <span>Alto Padrão.</span>
          </h1>
          <p className="hero-description">
            Seu sonho, nossa execução. Cuidado em cada detalhe, de Cachoeirinha
            para todo o Rio Grande do Sul.
          </p>
          <button className="hero-button">Conheça Nossos Projetos</button>
        </div>
      </div>
    </section>
  );
}
