import React from 'react';
import { partnersType } from '../../Types/types';
import './Patterns.css';

function Partners({ partners }:any) {
  return (
    <section className="partner_card_container">
      <img
        alt={partners.name}
        src={partners.image}
      />
    </section>
  );
}

export default Partners;
