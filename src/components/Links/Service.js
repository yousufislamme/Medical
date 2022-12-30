import React from 'react'
import Navbar from '.././Navbar/Navbar'
import DoctorServiceImage from '../../img/doctorService.jpg'
import DoctorServiceImage2 from '../../img/doctorService2.jpg'
import ChildService from './ChildService'
import Footer from '../Footer/Footer'
import TitleDesc from '../TitleDesc'

const Service = () => {
   return (
      <>
         <Navbar />
         <div className='container mx-auto px-20 py-20 bg-white'>
            <TitleDesc title="Service" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda, minus repellendus, itaque hic, deserunt alias quibusdam corporis deleniti atque a vel earum provident quam." />
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