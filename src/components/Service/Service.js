import React from 'react'
import DoctorServiceImage from '../../img/doctorService.jpg'
import DoctorServiceImage2 from '../../img/doctorService2.jpg'

const Service = () => {
   return (
      <div className='container mx-auto px-5 lg:px-20 py-32'>
         <div className="flex flex-row">
            {/* col-1 */}
            <div className="flex-1 xl:mt-[200px]">
               <h2 className='text-[54px] fontStyle text-slate-700'>Services</h2>
               <p className='text-slate-700 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione.</p>

               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage} alt="Photos" />
               </div>
            </div>
            {/* col-2 */}
            <div className="flex-1 hidden lg:block">
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage2} alt="Photos" />
               </div>
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage} alt="Photos" />
               </div>
            </div>
            {/* col-3 */}
            <div className="flex-1 mt-20 hidden lg:block">
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage} alt="Photos" />
               </div>
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px] ' src={DoctorServiceImage2} alt="Photos" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service