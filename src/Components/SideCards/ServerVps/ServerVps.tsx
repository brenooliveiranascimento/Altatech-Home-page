import React from 'react';
import Lottie from 'react-lottie';
import './ServerVps.css';
import { useSelector } from 'react-redux';
import beckup2 from '../../../lottie/cloud.json';

function ServerVps() {
  const serverHeader = useSelector(({ interfaceData }: any) => interfaceData.data.beckup1Header2);
  const serverBody = useSelector(({ interfaceData }: any) => interfaceData.data.beckupBody2);

  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: beckup2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section className="server_container">
      <section className="server_image_container">
        <section className="server_image_darkness">
          <section className="server_inf_area">
            <h1>{serverHeader}</h1>
            <section className="animated_logo">
              <Lottie
                style={{
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                }}
                options={defaultOptionsLoading}
              />
            </section>
          </section>
          <section className="server_vps_dark_side">
            <span>
              Nosso server Cloud dispõe de segurança
              para sua aplicação e performance.
              Com preços previsíveis e escalabilidade para
              suportar seu crescimento em qualquer estágio.
            </span>
            <button
              type="button"
              className="action_btn"
            >
              Confira Aqui
            </button>
          </section>
        </section>
      </section>
      <section className="server_container_white" />
      <section className="server_container_brighness" />
    </section>
  );
}

export default ServerVps;
