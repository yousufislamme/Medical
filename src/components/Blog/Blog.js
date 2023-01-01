import React from 'react'
import BlogItem from '../BlogItem'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import TitleDesc from '../TitleDesc'
import DrMan from '../../img/DrMan.png'
import PostItem from './PostItem'
import Tag from './Tag'
import { motion } from 'framer-motion'

const Blog = () => {

   return (

      <div className='overflow-hidden'>
         <Navbar />
         <div className="container mx-auto px-5 py-5 lg:p-20">
            <motion.div
               initial={{ y: -200 }}
               whileInView={{ y: 1 }}
               transition={{ easy: "anticipate", duration: 1 }}
               viewport={{ once: true }}
            >
               <TitleDesc title="Blog" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci assumenda, minus repellendus, itaque hic, deserunt alias quibusdam corporis deleniti atque a vel earum provident quam." />
            </motion.div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-20'>
               <div>
                  <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" date="August 15, 2022 | No Comments" />
                  <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" date="August 15, 2022 | No Comments" />
               </div>
               <div>
                  <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" date="August 15, 2022 | No Comments" />
                  <BlogItem img={DrMan} title="Lorem ipsum dolor sit amet" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut iure assumenda rerum libero culpa, id ea ducimus nulla hic?" date="August 15, 2022 | No Comments" />
               </div>
               <div className='lg:pl-10'>
                  <div className='hidden lg:block'>
                     <h2 className='text-2xl text-blue-800 font-bold dark:text-slate-100'>Categories</h2>
                     <ul className='mt-5'>
                        <li className='text-slate-700 text-lg leading-8 dark:text-slate-300'>Dental Clinic</li>
                        <li className='text-slate-700 text-lg leading-8 dark:text-slate-300'>Our Specialist</li>
                        <li className='text-slate-700 text-lg leading-8 dark:text-slate-300'>Medical Consultation</li>
                        <li className='text-slate-700 text-lg leading-8 dark:text-slate-300'>World Dental News</li>
                     </ul>
                  </div>
                  <div className="my-5 hidden lg:block">

                     <h2 className='text-2xl text-blue-800 font-bold dark:text-slate-100'>Latest Posts</h2>
                     <PostItem fontSize="24px" post="Teeth: Names, types, and functions" date="August-12-2023 | No Comments" />
                     <PostItem fontSize="24px" post="Teeth: Names, types, and functions" date="August-12-2023 | No Comments" />
                     <PostItem fontSize="24px" post="Teeth: Names, types, and functions" date="August-12-2023 | No Comments" />
                  </div>
                  <div>
                     <h2 className='text-2xl text-blue-800 font-bold dark:text-slate-100'>Tag</h2>
                     <Tag tag="Blog" />
                     <Tag tag="New post" />
                     <Tag tag="New post" />
                     <Tag tag="New post" />
                     <Tag tag="Doctor news" />
                     <Tag tag="hospital" />
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Blog