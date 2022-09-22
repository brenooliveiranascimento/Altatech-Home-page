import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import ServicesInf from '../../Components/ServicesInf/ServicesInf';
import './Home.css';

export default function Home() {
  return (
    <section className="home_container">
      <Header />
      <Hero />
      <ServicesInf />
    </section>
  );
}
