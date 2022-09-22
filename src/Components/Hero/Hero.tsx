import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import HeroFooter from '../HeroFooter/HeroFooter';
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
          <HeroFooter />
        </section>
      </section>
    </section>
  );
}

export default Hero;
