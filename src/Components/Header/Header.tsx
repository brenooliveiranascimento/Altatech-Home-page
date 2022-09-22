import React, { useEffect, useState } from 'react';
import './Header.css';
import altaLogo from '../../images/Altatech_ALTA_icon.svg';

function Header() {
  const [scroll, setScroll] = useState(0);

  const verifyScroll = () => setInterval(() => setScroll(window.scrollY), 100);

  const updateScroll = () => {
    verifyScroll();
  };

  useEffect(() => {
    updateScroll();
    return () => clearInterval(verifyScroll());
  }, []);
  return (
    <header
      style={{
        backgroundColor: scroll > 125 ? '#1c203e' : 'rgba(0,0,0,0.0)',
      }}
      className="header_container"
    >
      <section className="limit_content">
        <section className="general_top">
          <span>Buscar</span>
          <span>Carrinho</span>
        </section>
        <nav className="services">
          <section className="logo_area">
            <img
              src={altaLogo}
              alt="altatech logo"
            />
            <article>
              <p>Altatech</p>
              <p>Altatech Soluções Tecnologicas</p>
            </article>
          </section>
          <span>Produtos</span>
          <span>Serviços</span>
          <span>Locação</span>
          <span>Cloud</span>
          <button
            type="button"
          >
            Entrar
          </button>
        </nav>
      </section>
    </header>
  );
}

export default Header;
