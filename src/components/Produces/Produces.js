import React from 'react'

const Produces = () => {
   return (
      <div className='container mx-auto px-20 pt-20'>
         <div className="bg-blue-700 p-14 rounded-tr-[50px] rounded-bl-[50px]">
            <div className="text-left">
               <h2 className='fontStyle text-white text-[54px]'>The Produces</h2>
            </div>
            <div className='grid grid-rows-1 grid-cols-3 gap-4'>
               <div>
                  <div className="">
                     <h1 className='my-5 text-2xl text-white w-16 h-16 rounded-full border-2 flex justify-center items-center'>1</h1>
                  </div>
                  <div className='pr-10'>
                     <h3 className='text-white font-semibold text-lg'>Book an Appointment</h3>
                     <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi magni non.</p>
                  </div>
               </div>
               <div>
                  <div className="">
                     <h1 className='my-5 text-2xl text-white w-16 h-16 rounded-full border-2 flex justify-center items-center'>2</h1>
                  </div>
                  <div className='pr-10'>
                     <h3 className='text-white font-semibold text-lg'>Book an Appointment</h3>
                     <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi magni non.</p>
                  </div>
               </div>
               <div>
                  <div className="">
                     <h1 className='my-5 text-2xl text-white w-16 h-16 rounded-full border-2 flex justify-center items-center'>3</h1>
                  </div>
                  <div className='pr-10'>
                     <h3 className='text-white font-semibold text-lg'>Book an Appointment</h3>
                     <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi magni non.</p>
                  </div>
               </div>

            </div>

         </div>
      </div>
   )
}

export default Produces