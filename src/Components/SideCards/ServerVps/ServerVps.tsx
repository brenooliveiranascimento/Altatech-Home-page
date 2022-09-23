import React from 'react';
import Lottie from 'react-lottie';
import './ServerVps.css';
import beckup2 from '../../../lottie/cloud.json';

function ServerVps() {
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
          <Lottie
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              width: 320,
              height: 250,
            }}
            options={defaultOptionsLoading}
          />
          <section className="server_vps_dark_side" />
        </section>
      </section>
    </section>
  );
}

export default ServerVps;
