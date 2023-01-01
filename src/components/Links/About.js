import React from 'react'
import Navbar from '../Navbar/Navbar'
import DrMan from '../../img/DrMan.png'
import AboutTime from '../About/AboutTime'
import OurClinic from '../About/OurClinic'
import Counter from '../About/Counter'
import BlogItem from '../BlogItem'
import Footer from '../Footer/Footer'
import TitleDesc from '../TitleDesc'
import { motion } from 'framer-motion'


const About = () => {
   return (
      <>
         <Navbar />
         <div className='container mx-auto px-5 lg:px-20 py-20 overflow-hidden'>
            {/* title */}
            <motion.div
               initial={{ y: -200 }}
               whileInView={{ y: 1 }}
               transition={{ easy: "anticipate", duration: 1 }}
               viewport={{ once: true }}
            >

               <TitleDesc title="About" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda, minus repellendus, itaque hic, deserunt alias quibusdam corporis deleniti atque a vel earum provident quam." />
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10'>
               <div className='flex justify-center lg:justify-end pr-4'>
                  <img src={DrMan} alt="Dr" />
               </div>

               <div className='text-left mt-5 lg:mt-0'>
                  <h2 className='fontStyle text-[32px] leading-[50px] lg:text-[54px] lg:leading-[60px] pb-10 dark:text-slate-50'>Caring Health is Important Than All</h2>
                  <p className='text-lg dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore nam, ullam ratione vel minima quos repellat iusto perspiciatis quas qui eaque, alias delectus nihil.</p>
                  <p className='text-lg py-5 font-semibold dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur.</p>
                  <p className='text-lg dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veniam!</p>

                  <div className='hidden lg:inline-block bg-white/30 backdrop-blur-sm shadow-xl px-5 py-3 rounded-tl-[20px] rounded-br-[20px] ml-[-70px] mt-10 animate-easyAni'>
                     <span className='block text-xl font-bold z-10 dark:text-slate-50 '>Phone</span>
                     <a className='text-lg dark:text-slate-100'>+123 4566 7899</a>
                  </div>
               </div>

            </div>
            <AboutTime />
            <OurClinic />


         </div>
         <Counter />

         <div className="container mx-auto px-5 lg:px-20 py-20">
            <div>
               <h2 className='fontStyle text-[32px] lg:text-[54px] lg:leading-[60px] dark:text-slate-50'>Latest Dental <br />
                  News</h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
               <div>
                  <div>
                     <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet consectetur" date="August 15, 2022 | No Comments" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" />
                  </div>
                  <div>
                     <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet consectetur" date="August 15, 2022 | No Comments" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" />
                  </div>
               </div>
               <div>
                  <div>
                     <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet consectetur" date="August 15, 2022 | No Comments" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" />
                  </div>
                  <div>
                     <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet consectetur" date="August 15, 2022 | No Comments" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" />
                  </div>
               </div>
               <div>
                  <div className='border-2 mb-5 p-5 border-blue-300'>
                     <h3 className='font-bold text-2xl dark:text-slate-100'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700 dark:text-blue-700"> August 15, 2022 | No Comments</p>
                     <p className="dark:text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
                  <div className='border-2 mb-5 p-5 border-blue-300'>
                     <h3 className='font-bold text-2xl dark:text-slate-100'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700 dark:text-blue-700"> August 15, 2022 | No Comments</p>
                     <p className="dark:text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
                  <div className='border-2 mb-5 p-5 border-blue-300'>
                     <h3 className='font-bold text-2xl dark:text-slate-100'>Lorem ipsum dolor sit amet.</h3>
                     <p className="font-semibold text-blue-700 dark:text-blue-700"> August 15, 2022 | No Comments</p>
                     <p className="dark:text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?</p>
                  </div>
               </div>
            </div>
         </div >
         <Footer />
      </>
   )
}

export default About