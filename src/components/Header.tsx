import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-nav">
      <div className="header-container">
        <div className="header-logo-container">
          <span className="header-logo-text">studiob58</span>
          <span className="header-logo-sub">Arquitetura & Construção</span>
        </div>
        <nav className="header-links">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#diferencial">Diferencial</a>
          <a href="#contato">Contato</a>
        </nav>
        <div>
          <button className="header-cta">Solicite Orçamento</button>
        </div>
      </div>
    </header>
  );
}
