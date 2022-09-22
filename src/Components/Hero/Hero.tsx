import React from 'react';
import NeedButton from '../NeedButton/NeedButton';
import './Hero.css';

function Hero() {
  return (
    <section className="hero_container">
      <section className="hero_brightness">
        <section className="hero_inf">
          <article className="left_hero_centent">
            <h1>
              Altatech Soluções em tecnologia
            </h1>
            <span>Sobre nos</span>
          </article>
          <footer className="hero_footer">
            <section className="news_tetter_area">
              <p className="news_latter">Receba nossa newsletter</p>
              <input
                placeholder="E-Mail"
                className="email_news_latter"
              />
            </section>
            <NeedButton />
          </footer>
        </section>
      </section>
    </section>
  );
}

export default Hero;
