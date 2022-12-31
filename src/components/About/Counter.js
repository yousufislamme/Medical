import React from 'react'

const Counter = () => {
   return (
      <div className='bg-[#0014FF] text-center py-10'>
         <div className='container mx-auto px-20'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 lg:grid-cols-4">
               <div>
                  <h2 className='font-extrabold text-white text-3xl'>1500</h2>
                  <p className='text-slate-300'>Health Patient</p>
               </div>
               <div>
                  <h2 className='font-extrabold text-white text-3xl'>32</h2>
                  <p className='text-slate-300'>Health Patient</p>
               </div>
               <div>
                  <h2 className='font-extrabold text-white text-3xl'>30+</h2>
                  <p className='text-slate-300'>Health Patient</p>
               </div>
               <div>
                  <h2 className='font-extrabold text-white text-3xl'>10</h2>
                  <p className='text-slate-300'>Health Patient</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Counter