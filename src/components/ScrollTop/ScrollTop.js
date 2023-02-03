import React from 'react';

const ScrollTop = () => {
   const top = () => {
      window.scrollTo(0, 0);
   }
   return (
      <div>
         <button
            onClick={top}
            className='absolute right-5 bottom-5 text-bold bg-orange-400 rounded-full p-3'>
            Top
         </button>
      </div>
   )
};

export default ScrollTop;