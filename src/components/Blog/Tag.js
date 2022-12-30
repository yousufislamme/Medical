import React from 'react'

export default function Tag(props) {
   const { tag } = props;

   return (
      <div className='mt-5 inline-block'>
         <span className='mx-2 my-1 bg-blue-300 px-3 py-1 rounded-md font-semibold cursor-pointer'>{tag}</span>
      </div>
   )
}
