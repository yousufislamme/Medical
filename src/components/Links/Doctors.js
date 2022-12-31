import React from 'react'
import Navbar from '../Navbar/Navbar'
import DrItem from '../Certified/DrItem'
import DrImg from '../../img/doctor.jpg'
import Footer from '../Footer/Footer'
import TitleDesc from '../TitleDesc'
const Doctors = () => {
   return (
      <>
         <Navbar />
         <div className="container mx-auto px-5 lg:px-20 py-20 overflow-hidden">


            <TitleDesc title="Doctors" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda, minus repellendus, itaque hic, deserunt alias quibusdam corporis deleniti atque a vel earum provident quam." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
               <DrItem img={DrImg} name="Dr. AK Harun" type="Dentist" experience="I have 5 years of experience" />
               <DrItem img={DrImg} name="Dr. AK Harun" type="Dentist" experience="I have 5 years of experience" />
               <DrItem img={DrImg} name="Dr. AK Harun" type="Dentist" experience="I have 5 years of experience" />
               <DrItem img={DrImg} name="Dr. AK Harun" type="Dentist" experience="I have 5 years of experience" />
               <DrItem img={DrImg} name="Dr. AK Harun" type="Dentist" experience="I have 5 years of experience" />
               <DrItem img={DrImg} name="Dr. AK Harun" type="Dentist" experience="I have 5 years of experience" />
            </div>

         </div>
         <Footer />
      </>
   )
}

export default Doctors