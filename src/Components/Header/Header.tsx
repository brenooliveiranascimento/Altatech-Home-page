import React, { useEffect, useState } from 'react';
import './Header.css';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
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
        backgroundColor: scroll > 125 ? 'rgba(28, 32, 62,0.8)' : 'rgba(0,0,0,0.0)',
      }}
      className="header_container"
    >
      <section
        style={{
          height: scroll > 125 ? '7rem' : '10rem',
        }}
        className="limit_content"
      >
        <section
          style={{
            marginBottom: scroll > 125 ? -30 : 0,
            marginTop: 20,
          }}
          className="general_top"
        >
          <span>Wathsap</span>
          <FiSearch className="top_icon" />
          <FiShoppingCart className="top_icon" />
        </section>
        <nav className="services">
          <section className="logo_area">
            <img
              src={altaLogo}
              alt="altatech logo"
            />
            <article>
              <p>Altatech</p>
              <p>Soluções em Tecnologica</p>
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
