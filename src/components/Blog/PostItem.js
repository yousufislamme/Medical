import React from 'react'

export default function PostItem(props) {
   const { date, post } = props;
   return (
      <>
         <div className='mt-5'>
            <h4 style={{ fontFamily: props.ff, fontSize: props.size, lineHeight: props.height }} className='font-semibold text-lg cursor-pointer'>{post}</h4>
            <p style={{ padding: props.p }} className='text-blue-700'>{date}</p>
         </div>
      </>
   )
}
