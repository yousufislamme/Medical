import React from 'react'
import HealthItem from './HealthItem'

const AboutTime = () => {
   return (
      <div className='container mx-auto px-20'>
         <div>
            <h2 className='fontStyle text-[54px] leading-[60px]'>Facts About</h2>
            <h2 className='fontStyle text-[54px] leading-[60px] text-[#0014FF]'>Dentino</h2>
         </div>
         {/* item */}
         <div className="grid grid-cols-4 mt-10">
            <HealthItem name="Basic Service" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio!" />
            <HealthItem name="Basic Service" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio!" />
            <HealthItem name="Basic Service" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio!" />
            <HealthItem name="Basic Service" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio!" />
         </div>

         <div className="flex">
            <div className="flex-1">

            </div>
            <div className="flex-1">
               <div className='bg-blue-600 px-5 py-16 rounded-md mt-20'>
                  <div className='text-center mb-10'>
                     <h3 className='text-white font-semibold text-xl'>Our Timetable</h3>
                     <p className='text-lg text-slate-200'>Lorem ipsum dolor, sit amet consectetur</p>
                  </div>
                  <div className='flex justify-between'>
                     <ul>
                        <li className='text-white font-semibold'> Days</li>
                        <li className='text-white'>Sunday</li>
                        <li className='text-white'>Monday</li>
                        <li className='text-white'>Tuesday</li>
                        <li className='text-white'>Wednesday</li>
                        <li className='text-white'>Thursday</li>
                        <li className='text-white'>Friday</li>
                        <li className='text-white'>Saturday</li>
                     </ul>
                     <ul>
                        <li className='text-white font-semibold'>Open-----Close</li>
                        <li className='text-white'>8:00 am - 8:00 pm</li>
                        <li className='text-white'>7:00 am - 8:00 pm</li>
                        <li className='text-white'>9:00 am - 7:00 pm</li>
                        <li className='text-white'>7:00 am - 2:00 pm</li>
                        <li className='text-white'>8:30 am - 6:00 pm</li>
                        <li className='text-white'>8:00 am - 8:00 pm</li>
                        <li className='text-white'>9:30 am - 5:00 pm</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default AboutTime