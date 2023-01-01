import React from 'react'

export default function PostItem(props) {
   const { date, post } = props;
   return (
      <>
         <div className='mt-5'>
            <h4 style={{ fontFamily: props.ff, fontSize: props.fontSize }} className='font-semibold text-[32px] lg:text-[54px] cursor-pointer dark:text-slate-300'>{post}</h4>
            <p style={{ padding: props.p }} className='text-blue-700 dark:text-slate-400'>{date}</p>
         </div>
      </>
   )
}
