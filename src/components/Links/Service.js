import React from 'react'
import Navbar from '.././Navbar/Navbar'
import DoctorServiceImage from '../../img/doctorService.jpg'
import DoctorServiceImage2 from '../../img/doctorService2.jpg'
import ChildService from './ChildService'
import Footer from '../Footer/Footer'

const Service = () => {
   return (
      <>
         <Navbar />
         <div className='container mx-auto px-20 py-20 bg-white'>
            <div className='relative'>
               <div className="w-[150px] h-[150px] bg-pink-400 absolute left-12 rounded-full animate-blob blur-[60px]"></div>
               <div className="w-[150px] h-[150px] bg-blue-600 absolute left-[300px] rounded-full animate-yani blur-[70px] "></div>
               <h2 className='fontStyle text-[54px] text-[#0014FF]'>Services</h2>
               <p className='text-lg w-[60%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda, minus repellendus, itaque hic, deserunt alias quibusdam corporis deleniti atque a vel earum provident quam.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-20'>
               <ChildService img={DoctorServiceImage} title='amet consectetur' desc='deserunt alias quibusdam corporis deleniti ' />
               <ChildService img={DoctorServiceImage2} title='amet consectetur' desc='deserunt alias quibusdam corporis deleniti ' />
               <ChildService img={DoctorServiceImage} title='amet consectetur' desc='deserunt alias quibusdam corporis deleniti ' />
               <ChildService img={DoctorServiceImage2} title='amet consectetur' desc='deserunt alias quibusdam corporis deleniti ' />
               <ChildService img={DoctorServiceImage} title='amet consectetur' desc='deserunt alias quibusdam corporis deleniti ' />
               <ChildService img={DoctorServiceImage2} title='amet consectetur' desc='deserunt alias quibusdam corporis deleniti ' />

            </div>
         </div>

         <Footer />

      </>
   )
}

export default Service