import React from 'react';
import './CloudFInd.css';
import Lottie from 'react-lottie';
import minicard from '../../../../lottie/minicard.json';

function CloudFind() {
  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: minicard,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <nav className="request_quote">
      <Lottie
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: 60,
          height: 75,
        }}
        options={defaultOptionsLoading}
      />
    </nav>
  );
}

export default CloudFind;
