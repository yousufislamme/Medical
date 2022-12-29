import React from 'react'
import Face from '../../img/face.png'


const Testimonial = () => {
   return (
      <div>
         <div className='py-5 px-7 rounded-2xl border-2 border-blue-200 shadow-blue-100/10 bg-white shadow-lg m-1 cursor-move'>
            <div className='py-5'>
               <p className='text-slate-600 text-md italic pointer-events-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-row'>
               <div className='mr-4 w-[50px] h-[50px]'>
                  <img src={Face} alt="FacePhoto" />
               </div>
               <div className='text-left pointer-events-none'>
                  <h4 className='font-semibold'>Rivana Akter</h4>
                  <p className='text-sm'>Dhaka</p>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Testimonial