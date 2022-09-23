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
        <section className="message_area">
          <input placeholder="Nome" />
          <input placeholder="Telefone" />
          <input placeholder="Email" />
          <input placeholder="CNPJ" />
          <textarea placeholder="Menssagem" />
          <button type="button">
            Enviar
          </button>
        </section>
        <section className="user_form_area">
          <h1>
            Faça o orçamento
          </h1>
          <Lottie
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'flex-start',
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
