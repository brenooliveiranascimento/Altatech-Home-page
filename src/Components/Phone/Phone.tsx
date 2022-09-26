import React from 'react';
import './Phone.css';

export default function Phone() {
  return (
    <section className="numbers_content">
      <article className="number_container">
        <span>
          Londrina (43) 2105-1002
        </span>
        <span>
          São Paulo (11) 4063-1002
        </span>
      </article>
      <article className="number_container">
        <span>Rio de Janeiro (21) 4063-7063</span>
        <span>Belo Horizonte (31) 4063-8686</span>
      </article>
      <article className="number_container">
        <span>Brasília (61) 4063-9002</span>
        <span>Recife (81) 4062-9002</span>
      </article>
      <article className="number_container">
        <span>Curitiba (41) 4063-7606</span>
        <span>Porto Alegre (51) 4063-9626</span>
      </article>
    </section>
  );
}
