import React from "react";
import { Instagram, Star } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <span className="footer-logo">studiob58</span>
            <span className="footer-sub">Arquitetura & Construção</span>
            <p style={{ fontSize: "0.75rem", marginTop: "1rem" }}>
              © StudioB58 2026.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Redes Sociais</h4>
            <ul className="footer-links">
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Sitemap</h4>
            <ul className="footer-links">
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#sobre">Sobre Nós</a>
              </li>
              <li>
                <a href="#diferencial">Diferencial</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-badge">
              <p className="footer-badge-text">
                Google <span className="footer-badge-score">5.0</span>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "4px",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#cca848" color="#cca848" />
                ))}
              </div>
              <p
                style={{
                  fontSize: "9px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Avaliação Máxima
              </p>
            </div>
          </div>
        </div>
        <p className="footer-bottom">
          Desenvolvido com foco em alta performance e experiência do usuário.
        </p>
      </div>
    </footer>
  );
}
