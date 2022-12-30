import React from 'react'
import '.././index.css'
import DoctorPhoto from './../../img/doctorPhoto.png'

const Clinic = () => {
   return (

      <div>
         <div className="container px-5 lg:px-20 mx-auto">
            <div className=' text-center mb-[50px]'>
               <h2 className='font-extrabold text-[32px] lg:text-[54px] leading-[60px] text-[#0014FF] fontStyle'>Dention</h2>
               <h2 className='font-extrabold text-[32px] lg:text-[54px] leading-[60px] text-slate-700 fontStyle'>Profession Clinic</h2>
            </div>
            <div className='flex flex-col-reverse lg:flex-row'>
               <div className='w-[100%] lg:w-[40%] flex flex-col items-start justify-center'>
                  <h2 className='text-[28px] font-semibold lg:pr-10'>Caring Health is Important Than All</h2>
                  <p className='my-5 lg:pr-10 text-slate-700 text-[22px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit non quisquam provident sapiente omnis nostrum, animi assumenda, fugiat numquam aperiam veniam doloribus, similique minima saepe.</p>
                  <a href="#">
                     <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11_13)">
                           <path d="M23.5 43.0833C12.6841 43.0833 3.91667 34.3159 3.91667 23.5C3.91667 12.6841 12.6841 3.91666 23.5 3.91666C34.3159 3.91666 43.0833 12.6841 43.0833 23.5C43.0833 34.3159 34.3159 43.0833 23.5 43.0833ZM20.8014 16.4794C20.6836 16.4007 20.5466 16.3555 20.4051 16.3486C20.2635 16.3416 20.1228 16.3732 19.9978 16.4399C19.8728 16.5066 19.7683 16.606 19.6953 16.7274C19.6223 16.8489 19.5836 16.9878 19.5833 17.1295V29.8704C19.5836 30.0121 19.6223 30.1511 19.6953 30.2725C19.7683 30.394 19.8728 30.4933 19.9978 30.5601C20.1228 30.6268 20.2635 30.6583 20.4051 30.6514C20.5466 30.6444 20.6836 30.5993 20.8014 30.5206L30.3561 24.1521C30.4636 24.0806 30.5517 23.9837 30.6126 23.8699C30.6736 23.7561 30.7055 23.6291 30.7055 23.5C30.7055 23.3709 30.6736 23.2439 30.6126 23.1301C30.5517 23.0163 30.4636 22.9194 30.3561 22.8479L20.7995 16.4794H20.8014Z" fill="#0014FF" />
                        </g>
                        <defs>
                           <clipPath id="clip0_11_13">
                              <rect width="47" height="47" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                  </a>
               </div>

               <div className='flex-1 mb-10'>
                  <img src={DoctorPhoto} alt="DoctorPhoto" />
               </div>

            </div>

         </div>
      </div>
   )
}

export default Clinic