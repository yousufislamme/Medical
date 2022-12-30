import React from 'react'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Clinic from '../Clinic/Clinic';
import Appointment from '../Appointment/Appointment';
import Service from '../Service/Service';
import AboutUs from '../AboutUs/AboutUs';
import Certified from '../Certified/Certified';
import Produces from '../Produces/Produces';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';
import Copyright from '../Footer/Copyright';

const Home = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <Clinic />
         <Appointment />
         <Service />
         <AboutUs />
         <Certified />
         <Produces />
         <Pricing />
         <Footer />


      </>
   )
}

export default Home