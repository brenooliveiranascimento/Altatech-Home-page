import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { updateInterface } from '../../redux/actions/interfaceActions';
import { heroInfType } from '../../types';
import HeroFooter from '../HeroFooter/HeroFooter';
import NeedButton from '../NeedButton/NeedButton';
import './Hero.css';

function Hero() {
  const dispatch = useDispatch();
  const [editInf, setEditInf] = useState('');
  const heroInf = useSelector(({ interfaceData }: any) => interfaceData.data.hero);
  const editVerify = useSelector(({ interfaceData }: any) => interfaceData.isEdit);
  const [showLogo, setShowLogo] = useState(false);

  const saveEdit = () => {
    dispatch(updateInterface(editInf, 'hero'));
  };

  useEffect(() => {
    setEditInf(heroInf);
    setTimeout(() => setShowLogo(true), 500);
  }, []);

  return (
    <section className="hero_container">
      <section className="hero_brightness">
        <section className="hero_inf">
          <article className="left_hero_centent">
            {
              showLogo && (
                <section style={{
                  width: 'auto',
                  height: '25rem',
                }}
                >
                  {editVerify ? (
                    <section>
                      <input
                        onChange={({ target }: any) => {
                          setEditInf(target.value);
                        }}
                        className="edit_input"
                        value={editInf}
                      />
                      <button onClick={saveEdit} type="button">
                        salvar
                      </button>
                    </section>
                  ) : (
                    <section>
                      <TypeAnimation
                        sequence={[`${heroInf}`, 1300]}
                        wrapper="h1"
                        className="hero_message"
                        speed={5}
                      />
                      <span>Sobre nos</span>
                    </section>
                  ) }
                </section>
              )
            }

          </article>
          <HeroFooter />
        </section>
      </section>
    </section>
  );
}

export default Hero;
