import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { heroInfType } from '../../types';
import HeroFooter from '../HeroFooter/HeroFooter';
import NeedButton from '../NeedButton/NeedButton';
import './Hero.css';

function Hero() {
  const heroInf = useSelector(({ interfaceData }: any) => interfaceData.data.hero);

  return (
    <section className="hero_container">
      <section className="hero_brightness">
        <section className="hero_inf">
          <article className="left_hero_centent">
            <h1>
              {heroInf}
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
