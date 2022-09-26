import React from 'react';
import { partnersType } from '../../Types/types';

function Partners({ partners }:any) {
  return (
    <section>
      <h1>{partners.name}</h1>
    </section>
  );
}

export default Partners;
