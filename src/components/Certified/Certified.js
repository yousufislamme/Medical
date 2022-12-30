import React from 'react'
import DrItem from './DrItem'
import DrImage from '../../img/doctor.jpg'

const Certified = () => {
   return (
      <div className='container mx-auto px-5 lg:px-20'>
         <div className="text-center">
            <h2 className='text-[54px] leading-[60px] text-slate-700 fontStyle'>Certified</h2>
            <h2 className='text-[54px] leading-[60px] text-[#0014FF] fontStyle'>Dentists</h2>
         </div>

         <div className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
            <div>
               <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
            </div>
            <div>
               <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
            </div>
            <div>
               <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
            </div>
            <div>
               <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
            </div>
         </div>
      </div>
   )
}

export default Certified