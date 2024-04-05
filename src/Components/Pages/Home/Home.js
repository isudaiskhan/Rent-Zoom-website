import React from 'react'
import About from "../../About/About";
import BestCars from "../../BestCars/BestCars";
import Blogs from "../../Blogs/Blogs";
import ChooseCar from "../../ChooseCar/ChooseCar";
import ClientsSay from "../../ClientsSay/ClientsSay";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Map from "../../Map/Map";
import Servicess from "../../Servicess/Servicess";
import Contact from "../../Contact/Contact";
import Layout from '../../Layout/Layout';
import ScrollButton from '../../ScrollButton/ScrollButton';


const Home = () => {
  return (
    <>

 <Layout>
  <Hero />
  <ChooseCar />
  <About />
  <BestCars />
  <Blogs />
  <Servicess />
  <ClientsSay />
  <Contact />
  <Map />
  <Footer />
  <ScrollButton />
  </Layout>
    </>
  )
}

export default Home