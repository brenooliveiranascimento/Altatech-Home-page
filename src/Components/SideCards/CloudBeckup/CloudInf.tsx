import React from 'react';
import CloudFind from './CloudFind/CloudFind';
import './ServicesInf.css';

function CloudInf() {
  return (
    <section>
      <CloudFind />
      <section className="cloud_inf">
        <h1>Backup em nuvem Corporativo</h1>
        <p>
          Uma solução de segurança avançada e econômica para seus dados.
          <br />
          <br />
          Com backups automáticos e criptografados,
          os dados de sua empresa estarão sempre em segurança no cloud (nuvem) contra desastres,
          brechas na rede, roubos de equipamentos, ransomware (vírus) ou sequestro virtuais.
        </p>
      </section>
    </section>
  );
}

export default CloudInf;
