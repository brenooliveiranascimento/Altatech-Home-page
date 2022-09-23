import React from 'react';
import { useSelector } from 'react-redux';
import CloudFind from './CloudFind/CloudFind';
import './ServicesInf.css';

function CloudInf() {
  const beckupHeader = useSelector(({ interfaceData }: any) => interfaceData.data.beckup1Header);
  const beckupBody = useSelector(({ interfaceData }: any) => interfaceData.data.beckupBody);

  return (
    <section className="cloud_inf_container">
      <CloudFind />
      <section className="cloud_inf">
        <h1>{beckupHeader}</h1>
        <p>
          {beckupBody}
        </p>
        <iframe
          style={{
            zIndex: 10,
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
