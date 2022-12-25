import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Clinic from './components/Clinic/Clinic';
import Appointment from './components/Appointment/Appointment';
import Service from './components/Service/Service';
import AboutUs from './components/AboutUs/AboutUs';
import Certified from './components/Certified/Certified';
import Produces from './components/Produces/Produces';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clinic />
      <Appointment />
      <About />
      <Service />
      <AboutUs />
      <Certified />
      <Produces />
      <Pricing />
      <Footer />

    </>
  );
}

export default App;
