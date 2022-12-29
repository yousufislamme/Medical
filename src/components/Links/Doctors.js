import React from 'react'
import Navbar from '../Navbar/Navbar'
import DrItem from '../Certified/DrItem'
import DrImg from '../../img/doctor.jpg'
import Footer from '../Footer/Footer'

const Doctors = () => {
   return (
      <>
         <Navbar />
         <div className="container mx-auto px-20 pb-20">

            <div className='py-10 relative'>
               <div className="w-[150px] h-[150px] bg-pink-400 absolute left-12 rounded-full animate-blob blur-[60px]"></div>
               <div className="w-[150px] h-[150px] bg-blue-600 absolute left-[300px] rounded-full animate-yani blur-[70px] "></div>
               <h2 className='fontStyle text-[54px] text-[#0014FF]'>Doctors</h2>
               <p className='text-lg w-[60%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda, minus repellendus, itaque hic, deserunt alias quibusdam corporis deleniti atque a vel earum provident quam.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
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