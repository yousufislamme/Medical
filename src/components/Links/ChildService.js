import React from 'react'

const ChildService = (props) => {

   const { img, title, desc } = props;

   return (
      <>
         <div className='relative rounded-tr-[50px] rounded-bl-[50px] w-full'>
            <img className='w-full h-[450px] rounded-tr-[50px] rounded-bl-[50px] object-cover ' src={img} alt="photos" />
            <div className='absolute bottom-0 py-20 px-5 text-white left-0 bg-gradient-to-t from-indigo-700 rounded-bl-[50px] w-full'>
               <h3 className='text-xl capitalize'>{title}</h3>
               <p className=''>{desc}</p>
            </div>
         </div>
      </>
   )
}

export default ChildService