import React from "react";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-section-title">
          Seção de Contato e Localização
        </h2>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nome*</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>E-mail*</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Mensagem</label>
              <textarea rows={4}></textarea>
            </div>
            <div className="contact-buttons">
              <button className="btn-whatsapp">
                <MessageSquare size={16} /> Fale no Whats
              </button>
              <button className="btn-call">
                <Phone size={16} /> Ligar Agora
              </button>
            </div>
          </form>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <MapPin
                  size={20}
                  color="#cca848"
                  style={{ marginTop: "2px" }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#4b5563",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Av. Obedy Cândido Vieira, 400 - Loja 18
                    <br />
                    Central Park, Cachoeirinha - RS, 94931-023
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <Phone size={20} color="#cca848" />
                <span
                  style={{
                    fontWeight: "700",
                    color: "#1f1f1f",
                    fontSize: "0.9rem",
                  }}
                >
                  (51) 99112-1637
                </span>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=Av.+Obedy+C%C3%A2ndido+Vieira,+400+-+Central+Park,+Cachoeirinha&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização Studio B58"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
