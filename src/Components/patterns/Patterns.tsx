/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Patterns.css';
import { useSelector } from 'react-redux';
import Partners from './PartnersCard';
import { partnersType } from '../../Types/types';

function Patterns() {
  const partners = useSelector(({ interfaceData }: any) => interfaceData.parceiros);
  return (
    <section className="paterns_container">
      <h1>
        Empresas que comfiam na gente
      </h1>
      <section className="card_area">
        {
          partners && partners.map((partner: partnersType, index: any) => (
            <Partners key={index} partners={partner} />
          ))
        }
      </section>
    </section>
  );
}

export default Patterns;
