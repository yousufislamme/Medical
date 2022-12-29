import React from 'react'
import Navbar from '../Navbar/Navbar'
import DrMan from '../../img/DrMan.png'
import AboutTime from '../About/AboutTime'
import OurClinic from '../About/OurClinic'
import Counter from '../About/Counter'
import Footer from '../Footer/Footer'

const About = () => {
   return (
      <>
         <Navbar />
         <div className='container mx-auto px-20 py-20'>
            <div className='relative'>
               <div className="w-[150px] h-[150px] bg-pink-400 absolute left-12 rounded-full animate-blob blur-[60px]"></div>
               <div className="w-[150px] h-[150px] bg-blue-600 absolute left-[300px] rounded-full animate-yani blur-[70px] "></div>
               <h2 className='fontStyle text-[54px] text-[#0014FF]'>About</h2>
               <p className='text-lg w-[60%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda, minus repellendus, itaque hic, deserunt alias quibusdam corporis deleniti atque a vel earum provident quam.</p>
            </div>

            <div className='grid grid-cols-2 py-10'>
               <div className='flex justify-end pr-4'>
                  <img src={DrMan} alt="Dr" />
               </div>

               <div className='text-left'>
                  <h2 className='fontStyle text-[54px] leading-[60px] pb-10'>Caring Health is Important Than All</h2>
                  <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore nam, ullam ratione vel minima quos repellat iusto perspiciatis quas qui eaque, alias delectus nihil.</p>
                  <p className='text-lg py-5 font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                  <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veniam!</p>
                  <div className='bg-gray-200 shadow-xl inline-block px-5 py-3 rounded-tl-[20px] rounded-br-[20px] ml-[-70px] mt-10'>
                     <span className='block text-xl font-bold z-10'>Phone</span>
                     <a className='text-lg'>+123 4566 7899</a>
                  </div>
               </div>

            </div>
            <AboutTime />
            <OurClinic />


         </div>
         <Counter />

         <div className="container mx-auto px-20 py-20">
            <div>
               <h2 className='fontStyle text-[54px] leading-[60px]'>Latest Dental <br />
                  News</h2>
            </div>
            <div className='grid grid-cols-3 gap-3 mt-10'>
               <div>
                  <div>
                     <div className='h-[200px] overflow-hidden'>

                        <img className="object-cover" src={DrMan} alt="images" />
                     </div>
                     <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700"> August 15, 2022 | No Comments</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
                  <div>
                     <div className='h-[200px] overflow-hidden'>

                        <img className="object-cover" src={DrMan} alt="images" />
                     </div>
                     <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700"> August 15, 2022 | No Comments</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>

               </div>
               <div>
                  <div>
                     <div className='h-[200px] overflow-hidden'>

                        <img className="object-cover" src={DrMan} alt="images" />
                     </div>
                     <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700"> August 15, 2022 | No Comments</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
               </div>
               <div>
                  <div className='border-2 mb-5 p-5 border-blue-300'>
                     <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700"> August 15, 2022 | No Comments</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
                  <div className='border-2 mb-5 p-5 border-blue-300'>
                     <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700"> August 15, 2022 | No Comments</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
                  <div className='border-2 mb-5 p-5 border-blue-300'>
                     <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700"> August 15, 2022 | No Comments</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default About