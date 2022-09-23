import React from 'react';
import './Orcamento.css';
import Lottie from 'react-lottie';
import formAnimation from '../../lottie/formAnimation.json';

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
        <section className="user_form_area">
          <Lottie
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              width: 550,
            }}
            options={defaultOptionsLoading}
          />
        </section>
        <section className="message_area">
          <h1>Message</h1>
        </section>
      </section>
    </section>
  );
}

export default Orcamento;
