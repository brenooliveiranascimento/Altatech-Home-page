import React, { useEffect, useState } from 'react';
import './Header.css';

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
          <span>Produtos</span>
          <span>Serviços</span>
          <span>Locação</span>
          <span>Cloud</span>
          <span>Entrar</span>
        </nav>
      </section>
    </header>
  );
}

export default Header;
