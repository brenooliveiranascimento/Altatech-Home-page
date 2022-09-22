/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './card.css';

function ServicesCard({ service }: any) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section
      className="card_container"
    >
      <button
        type="button"
        className="name"
      >
        <p
          onClick={() => setShowDetails(!showDetails)}
        >
          {service.name}
        </p>
      </button>
      {
        showDetails && (
          <section className="details_area">
            <p className="description">{service.description}</p>
            <button
              onClick={() => alert('dnwp')}
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
