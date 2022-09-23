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
            Solicite agora seu orçamento
          </h1>
          <section>
            <Lottie
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: '-4rem',
              }}
              options={defaultOptionsLoading}
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Orcamento;
