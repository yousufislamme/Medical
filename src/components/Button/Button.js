import React from 'react'

const Button = (props) => {
   return (
      <>
         <button style={{ padding: props.paddingStyle, backgroundColor: props.bgColor, color: props.color }} className='bg-[#0014FF] text-white px-5 py-2 rounded-full font-semibold'>{props.title}</button>
      </>
   )
}

export default Button