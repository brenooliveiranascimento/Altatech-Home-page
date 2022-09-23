import React from 'react';
import './Orcamento.css';
import Lottie from 'react-lottie';
import formAnimation from '../../lottie/formAnimation.json';
import OrçamentForm from './OrçamentForm/OrçamentForm';

function Orcamento() {
  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: formAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section className="orcament_container">
      <section className="orcamento_limit">
        <OrçamentForm />
        <section className="user_form_area">
          <h1>
            Faça o orçamento
          </h1>
          <Lottie
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              marginLeft: -20,
              marginTop: '-4rem',
              width: 650,
            }}
            options={defaultOptionsLoading}
          />
        </section>
      </section>
    </section>
  );
}

export default Orcamento;
