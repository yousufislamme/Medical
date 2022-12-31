import { motion } from 'framer-motion';
import React from 'react'


const ChildService = (props) => {

   const { img, title, desc } = props;

   return (
      <>
         <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "anticipate", duration: 1, delay: 0.1 }}
            viewport={{ once: true }}

            className='relative rounded-tr-[50px] rounded-bl-[50px] w-full'>
            <img className='w-full h-[450px] rounded-tr-[50px] rounded-bl-[50px] object-cover ' src={img} alt="photos" />
            <div className='absolute bottom-0 py-20 px-5 text-white left-0 bg-gradient-to-t from-indigo-700 rounded-bl-[50px] w-full'>
               <h3 className='text-xl capitalize'>{title}</h3>
               <p className=''>{desc}</p>
            </div>
         </motion.div>
      </>
   )
}

export default ChildService