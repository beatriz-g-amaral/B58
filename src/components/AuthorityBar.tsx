import React from "react";
import { Award, Users, Star } from "lucide-react";
import "./AuthorityBar.css";

export default function AuthorityBar() {
  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-item">
          <Award size={40} color="#374151" strokeWidth={1.5} />
          <div>
            <div className="auth-number">15+</div>
            <p className="auth-label">Anos de Mercado</p>
          </div>
        </div>
        <div className="auth-item border-lr">
          <Users size={40} color="#374151" strokeWidth={1.5} />
          <div>
            <div className="auth-number">+400</div>
            <p className="auth-label">Clientes Atendidos</p>
          </div>
        </div>
        <div className="auth-google">
          <p className="auth-google-score">G 5.0</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "4px 0",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#cca848" color="#cca848" />
            ))}
          </div>
          <p className="auth-label" style={{ fontSize: "10px" }}>
            Avaliações no Google
          </p>
        </div>
      </div>
    </section>
  );
}
