import React from 'react';
import './ServicesInf.css';
import Lottie from 'react-lottie';
import animationServer from '../../lottie/cloud.json';
import beckup1 from '../../lottie/beckup.json';
import beckup2 from '../../lottie/beckup2.json';
import beckup3 from '../../lottie/beckup3.json';

function ServicesInf() {
  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: beckup2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <main className="services_inf_container">
      <section className="beckups_area">
        <section className="beckups_brightness">
          <span>Backup em nuvem: Segurança avançada para seus Dados</span>
          <section className="inf_area">
            <section>
              <p>
                com a
                Criptografia de ponta a ponta os dados de sua empresa estarão sempre em segurança
              </p>
              <button
                type="button"
              >
                <h1>Confira aqui!</h1>
              </button>
            </section>
            <Lottie
              style={{
                alignSelf: 'flex-end',
                justifyContent: 'center',
                width: 220,
                height: 350,
              }}
              options={defaultOptionsLoading}
            />
          </section>
        </section>
      </section>
    </main>
  );
}

export default ServicesInf;
