import React from 'react'

const BlogItem = (props) => {
   const { img, title, desc, date } = props;
   return (
      <>

         <div className='mt-3'>
            <div className='h-[200px] overflow-hidden'>

               <img className="object-cover" src={img} alt="images" />
            </div>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <p className="font-semibold text-blue-700">{date}</p>
            <p>{desc}</p>
         </div>
      </>
   )
}

export default BlogItem