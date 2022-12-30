import React from 'react'

const DrItem = (props) => {
   return (
      <div className='mt-20'>
         <div className='w-full h-[350px] bg-gray-400 rounded-tl-[50px] rounded-br-[50px] mb-5 overflow-hidden ' >
            <img className='w-full object-top object-cover h-full rounded-tl-[50px] rounded-br-[50px] hover:scale-105 ease-out duration-300' src={props.img} alt="images" />
         </div>
         <div className='text-center'>
            <h3 className='font-bold text-xl'>{props.name}</h3>
            <h4 className='text-blue-600 text-lg font-semibold'>{props.type}</h4>
            <p className='text-slate-500'>{props.experience}</p>
         </div>
      </div>
   )
}

export default DrItem