import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Orcamento from '../../Components/Orcamento/Orcamento';
import Services from '../../Components/Services/Services';
import CloudService from '../../Components/ServicesInf/CloudService';
import ServerVps from '../../Components/SideCards/ServerVps/ServerVps';
import { requestInterfaceData } from '../../services/requestData/reuqestData';
import './Home.css';
import { requestIterfaceInDatabase } from '../../redux/actions/interfaceActions';
import Eficienty from '../../Components/Eficiency/Eficiency';
import Patterns from '../../Components/patterns/Patterns';
import Footer from '../../Components/Footer/Footer';
import EditButton from '../../Components/EditButton/EditButton';

export default function Home() {
  const dispatch = useDispatch();
  const requestData = async () => {
    dispatch(requestIterfaceInDatabase());
  };

  useEffect(() => {
    requestData();
  }, []);
  return (
    <section className="home_container">
      <Header />
      <Hero />
      <CloudService />
      <ServerVps />
      <Orcamento />
      <Eficienty />
      <Patterns />
      <Footer />
      <EditButton />
    </section>
  );
}
