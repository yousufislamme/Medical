import React from 'react'

const TitleDesc = (props) => {

   const { title, desc } = props;

   return (
      <>
         <div className='relative'>
            <div className="w-[150px] h-[150px] bg-pink-400 absolute left-12 rounded-full animate-blob blur-[60px]"></div>
            <div className="w-[150px] h-[150px] bg-blue-600 absolute left-[300px] rounded-full animate-yani blur-[70px] "></div>
            <h2 className='fontStyle text-[54px] text-[#0014FF] dark:text-slate-50'>{title}</h2>
            <p className='text-lg w-full lg:w-[60%] dark:text-slate-200'>{desc}</p>
         </div>
      </>
   )
}

export default TitleDesc