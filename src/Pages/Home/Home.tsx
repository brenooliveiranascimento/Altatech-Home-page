import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Orcamento from '../../Components/Orcamento/Orcamento';
import Partners from '../../Components/Partners/Partners';
import Services from '../../Components/Services/Services';
import CloudService from '../../Components/ServicesInf/CloudService';
import ServerVps from '../../Components/SideCards/ServerVps/ServerVps';
import './Home.css';

export default function Home() {
  return (
    <section className="home_container">
      <Header />
      <Hero />
      <CloudService />
      <ServerVps />
      <Orcamento />
      <Partners />
    </section>
  );
}
