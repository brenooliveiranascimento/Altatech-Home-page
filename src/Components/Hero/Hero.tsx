import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { heroInfType } from '../../types';
import HeroFooter from '../HeroFooter/HeroFooter';
import NeedButton from '../NeedButton/NeedButton';
import './Hero.css';

function Hero() {
  const [editInf, setEditInf] = useState('');
  const heroInf = useSelector(({ interfaceData }: any) => interfaceData.data.hero);
  const isLoged = useSelector(({ userData }: any) => userData);
  const editVerify = useSelector(({ interfaceData }: any) => interfaceData.isEdit);

  useEffect(() => {
    setEditInf(heroInf);
  }, []);

  return (
    <section className="hero_container">
      <section className="hero_brightness">
        <section className="hero_inf">
          <article className="left_hero_centent">
            {editVerify && (
              <input className="edit_input" value={editInf} />
            ) }
            <TypeAnimation
              sequence={[`${heroInf}`, 1300]}
              wrapper="h1"
              className="hero_message"
              speed={5}
            />
            <span>Sobre nos</span>
          </article>
          <HeroFooter />
        </section>
      </section>
    </section>
  );
}

export default Hero;
