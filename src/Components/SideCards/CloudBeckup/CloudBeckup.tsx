import React from 'react';
import './ServicesInf.css';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import beckup2 from '../../../lottie/beckup2.json';

export default function CloudBeckup() {
  const beckupHeader = useSelector(({ interfaceData }: any) => interfaceData.data.beckup1Header2);
  const beckupBody = useSelector(({ interfaceData }: any) => interfaceData.data.beckupBody2);

  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: beckup2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section className="beckups_area">
      <section className="beckups_brightness">
        <span>{beckupHeader}</span>
        <section className="inf_area">
          <section className="ing_content">
            <p>
              {beckupBody}
            </p>
            <button
              className="button_confere"
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
  );
}
