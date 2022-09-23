import React from 'react';
import CloudFind from './CloudFind/CloudFind';
import './ServicesInf.css';

function CloudInf() {
  return (
    <section className="cloud_inf_container">
      <CloudFind />
      <section className="cloud_inf">
        <h1>Backup em nuvem Corporativo</h1>
        <p>
          Uma solução de segurança avançada e econômica para seus dados.
        </p>
        <iframe
          style={{
            zIndex: 99,
          }}
          width="600"
          height="300"
          src="https://www.youtube.com/embed/qPsXIhbtxyI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </section>
    </section>
  );
}

export default CloudInf;
