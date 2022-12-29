import React from 'react'
import Button from '../Button/Button'


const WhitePrice = (props) => {

   const { title, price, year, list1, list2, list3 } = props;

   return (
      <>
         <div className='bg-[#0014FF] text-white shadow-lg py-[90px] mt-[-25px] text-center rounded-3xl'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <div className='py-5'>
               <h2 className='text-3xl font-bold'>{price}</h2>
               <p className='text-slate-300'>{year}</p>
            </div>

            <div className='px-10'>
               <p className='text-[16px] py-2 text-slate-200'>{list1}</p>
               <hr />
               <p className='text-[16px] py-2 text-slate-200'>{list2}</p>
               <hr />
               <p className='text-[16px] py-2 text-slate-200'>{list3}</p>

               <div className='mt-5'>
                  <Button bgColor='#fff' color='#0014FF' paddingStyle='10px 50px' title='Get Now' />
               </div>
            </div>
         </div>
      </>
   )
}

export default WhitePrice;