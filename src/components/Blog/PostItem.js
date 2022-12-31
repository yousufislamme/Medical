import React from 'react'

export default function PostItem(props) {
   const { date, post } = props;
   return (
      <>
         <div className='mt-5'>
            <h4 style={{ fontFamily: props.ff, }} className='font-semibold text-[32px] lg:text-[54px] cursor-pointer'>{post}</h4>
            <p style={{ padding: props.p }} className='text-blue-700'>{date}</p>
         </div>
      </>
   )
}
