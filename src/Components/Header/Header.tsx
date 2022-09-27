import React, { useEffect, useState } from 'react';
import './Header.css';
import { FiSearch, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import altaLogo from '../../images/Altatech_ALTA_icon.svg';

function Header() {
  const [scroll, setScroll] = useState(0);

  const verifyScroll = () => setInterval(() => setScroll(window.scrollY), 100);
  const isLoged = useSelector(({ userData }:any) => userData);

  const updateScroll = () => {
    verifyScroll();
  };

  useEffect(() => {
    updateScroll();
    return () => clearInterval(verifyScroll());
  }, []);
  return (
    <header
      style={{ backgroundColor: scroll > 125 ? 'rgba(28, 32, 62)' : 'rgba(0,0,0,0.0)' }}
      className="header_container"
    >
      <section style={{ height: scroll > 125 ? '7rem' : '10rem' }} className="limit_content">
        <section
          style={{ marginBottom: scroll > 125 ? -30 : 0, marginTop: 20 }}
          className="general_top"
        >
          <span className="wathsap">Wathsap</span>
          <FiSearch className="top_icon" />
          <FiShoppingCart className="top_icon" />
        </section>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <section className="logo_area">
            <img src={altaLogo} alt="altatech logo" />
            <article>
              <p>Altatech</p>
              <p>Soluções em Tecnologica</p>
            </article>
          </section>
          <nav className="services">
            <section className="service_items">
              <span>Produtos</span>
              <span>Serviços</span>
              <span>Locação</span>
              <span>Cloud</span>
              <button
                style={{ widows: 30 }}
                type="button"
                className="buttonMenu"
              >
                <FiMenu className="menu" />
              </button>
              {
                isLoged ? (
                  <button className="button_entrar" type="button">
                    Sair
                  </button>
                ) : (
                  <Link to="/auth">
                    <button className="button_entrar" type="button">
                      Entrar
                    </button>
                  </Link>
                )
              }
            </section>
          </nav>
        </section>

      </section>
    </header>
  );
}

export default Header;
