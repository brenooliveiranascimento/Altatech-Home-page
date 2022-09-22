/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import './NeedButton.css';
import ServicesCard from './ServicesCard/ServicesCard';

function NeedButton() {
  const [showServices, setShowServices] = useState(false);

  const services = [
    { name: 'Privacidade LGPD', description: 'Entenda como a Altatech trabalha em conformidade com a Lei Geral de Proteção de Dados' },
    { name: 'Beckup em nuvem', description: 'Nossos Server Cloud dispõe de escalabilidade, segurança para sua aplicação e performance. ' },
    { name: 'Server VPS', description: 'Nossos Server Cloud dispõe de escalabilidade, segurança para sua aplicação e performance. ' },
  ];

  const handleShowServices = () => {
    setShowServices(!showServices);
  };

  return (
    <section
      className="i_need"
      style={{
        height: showServices ? '22rem' : '4.1rem',
        marginTop: showServices ? '-6.2rem' : '0rem',
      }}
    >
      <header
        onClick={handleShowServices}
        className="need_header"
      >
        <h1>Preciso de...</h1>
        {
          showServices && (
          <button
            onClick={() => setShowServices(!showServices)}
            type="button"
            className="close"
          >
            <h1>
              X
            </h1>
          </button>
          )
        }

      </header>
      <main
        style={{
          display: showServices ? 'flex' : 'none',
        }}
        className="need_body"
      >
        <input className="search_service" />
        {
          services.map((service: {name: string}) => (
            <ServicesCard service={service} key={service.name} />
          ))
        }
      </main>
    </section>
  );
}

export default NeedButton;
