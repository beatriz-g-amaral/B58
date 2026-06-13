import React from "react";
import "./ProjectGallery.css";

export default function ProjectGallery() {
  const categories = [
    { id: "LN", label: "casa LN" },
    { id: "EG", label: "Casa EG" },
    { id: "EC", label: "casa EC" },
    { id: "EA", label: "casa EA" },
  ];

  const projects = [
    {
      title: "CASA LN - CENTRAL PARK",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Arquitetura integrada com automação e alto padrão de acabamento.",
    },
    {
      title: "EDIFÍCIO EG",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      desc: "Estruturas modernas, design imponente e execução impecável.",
    },
  ];

  return (
    <section id="projetos" className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Projetos em Destaque</h2>
        <div className="gallery-filters">
          {categories.map((cat, i) => (
            <div key={i} className="filter-item">
              <div className="filter-circle">
                <div className="filter-inner">{cat.id}</div>
              </div>
              <p className="filter-label">{cat.label}</p>
            </div>
          ))}
        </div>
        <div className="gallery-grid">
          {projects.map((proj, i) => (
            <div key={i} className="gallery-card">
              <div style={{ overflow: "hidden", height: "18rem" }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="gallery-image"
                />
              </div>
              <div className="gallery-content">
                <h3 className="gallery-card-title">{proj.title}</h3>
                <p className="gallery-card-desc">{proj.desc}</p>
                <button className="gallery-card-link">
                  Ver Projeto Completo ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
