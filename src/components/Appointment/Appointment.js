import React from 'react'
import Button from '../Button/Button'
import manDoctor from '../../img/manDoctor.png'

const Appointment = () => {
   return (
      <div className='bdImg'>
         <div className="container mx-auto px-20 py-20 h-screen relative">

            <div className="flex">
               <div className='flex-1 '>
                  <h2 className='fontStyle text-[54px] text-slate-800 leading-[55px]'>
                     Make an <br />
                     Appointment
                  </h2>
                  <p className='text-slate-700 py-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, placeat Lorem ipsum dolor sit amet.</p>
                  <Button title="Choose Service" />
               </div>
               <div className="flex-1"></div>

            </div>
            <div className='absolute bottom-[-100px] w-[300px]'>
               <img className='relative' src={manDoctor} alt="manDoctor" />
               <div className="absolute top-[35%] left-5">
                  <h3 className='font-bold text-xl text-[#0014FF]'>Free</h3>
                  <h3 className='font-bold text-xl'>Consultation</h3>
                  <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0014FF] mt-2'>
                     <svg width="249" height="249" viewBox="0 0 249 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_6)">
                           <path d="M136.66 124.5L85.3033 73.1438L99.9735 58.4735L166 124.5L99.9735 190.527L85.3033 175.856L136.66 124.5Z" fill="white" />
                        </g>
                        <defs>
                           <clipPath id="clip0_8_6">
                              <rect width="249" height="249" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                  </div>
               </div>

            </div>

            <div className='w-[170px] absolute bottom-0 left-[380px] bg-[#0014FF] px-5 py-10'>
               <h4 className='text-white font-bold text-xl'>Get more</h4>
               <p className='text-white'>information about clinic schedule</p>
            </div>
         </div>
      </div>
   )
}

export default Appointment