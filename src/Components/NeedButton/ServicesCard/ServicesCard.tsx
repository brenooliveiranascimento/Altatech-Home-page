/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './card.css';

function ServicesCard({ service }: any) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section
      onMouseEnter={() => setShowDetails(service.name)}
      className="card_container"
    >
      <p className="name">{service.name}</p>

      {
        showDetails === service.name && (
          <section className="details_area">
            <p className="description">{service.description}</p>
            <button
              className="solicitar"
              type="button"
            >
              <p>solicitar</p>
            </button>
          </section>
        )
      }

    </section>
  );
}

export default ServicesCard;
