import React from 'react'

const Button = (props) => {
   return (
      <>
         <button style={{ padding: props.paddingStyle, backgroundColor: props.bgColor, color: props.color }} className='bg-[#0014FF] text-white px-5 py-2 rounded-full font-semibold dark:bg-slate-700 dark:border-2 dark:border-yellow-400'>{props.title}</button>
      </>
   )
}

export default Button