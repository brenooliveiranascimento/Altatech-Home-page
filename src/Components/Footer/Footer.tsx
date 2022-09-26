import React from 'react';
import Phone from '../Phone/Phone';
import './Footer.css';
import Services from './Services/Services';

function Footer() {
  return (
    <footer className="footer_container">
      <Phone />
      <Services />
    </footer>
  );
}

export default Footer;
