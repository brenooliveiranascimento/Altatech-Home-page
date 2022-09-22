import React from 'react';
import './ServicesInf.css';
import Lottie from 'react-lottie';
import animationServer from '../../lottie/cloud.json';
import beckup1 from '../../lottie/beckup.json';
import beckup2 from '../../lottie/beckup2.json';
import beckup3 from '../../lottie/beckup3.json';
import CloudBeckup from '../SideCards/CloudBeckup/CloudBeckup';
import CloudInf from '../SideCards/CloudBeckup/CloudInf';

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
      <CloudInf />
      <CloudBeckup />
    </main>
  );
}

export default ServicesInf;
