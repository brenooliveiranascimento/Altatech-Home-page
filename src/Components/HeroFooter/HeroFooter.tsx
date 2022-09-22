import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import NeedButton from '../NeedButton/NeedButton';
import './Hero.css';

function HeroFooter() {
  return (
    <footer className="hero_footer">
      <section
        className="news_tetter_area"
      >
        <p className="news_latter">Receba nossa newsletter</p>
        <section className="input_area">
          <input
            placeholder="E-Mail"
            className="email_news_latter"
          />
          <FiArrowRight />
        </section>
      </section>
      <NeedButton />
    </footer>
  );
}

export default HeroFooter;
