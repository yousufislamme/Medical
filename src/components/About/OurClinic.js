import React from 'react'
import Clinic from '../../img/clinic.jpg'
import Clinic2 from '../../img/bg-tools.jpg'

function OurClinic() {
   return (
      <div className='container mx-auto px-20 py-20'>
         <div className="grid grid-cols-2 gap-3">
            <div>
               <h2 className='fontStyle text-[45px]'>Our Clinic</h2>
               <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni minus possimus harum est commodi a nesciunt facere tempore excepturi?</p>
               <div className=''>
                  <img className='my-3' src={Clinic} alt="Clinic" />
                  <img className='my-3' src={Clinic2} alt="Clinic" />
               </div>
            </div>
            <div>
               <div className='mt-[300px]'>
                  <img className='my-3' src={Clinic2} alt="Clinic" />
                  <img className='my-3' src={Clinic} alt="Clinic" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurClinic