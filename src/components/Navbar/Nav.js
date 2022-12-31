import React, { useState, useEffect } from 'react'
import Logo from './logo.svg'
import { NavLink } from 'react-router-dom';
import PhoneWhite from './../../icons/phoneWhite.svg';

const Nav = () => {

   const [toggleMenu, SetToggleMenu] = useState(false);
   const toggleNav = () => {
      SetToggleMenu(!toggleMenu);
   }


   return (
      <>
         <div className="container mx-auto px-5 lg:px-20">
            <div className='flex items-center justify-between py-2'>
               <div className='w-[50px] flex items-center'>
                  <img src={Logo} alt="Logo" />
                  <h2 className='font-extrabold text-blue-900 ml-[-5px] text-xl'>Dentino</h2>
               </div>
               <div className='hidden lg:flex '>
                  <div className=''>
                     <p className='flex'> <span className='w-5 mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" fill="rgba(0,20,255,1)" /></svg></span> Mon-Fri 8 AM - 8 PM</p>
                  </div>
                  <div className='ml-10'>
                     <a href="tel:123" className='flex'><span className='w-5 mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(0,20,255,1)" /></svg></span>+123456789111</a>
                  </div>
                  <div className='ml-10'>
                     <p className='flex'> <span className='w-5 mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="rgba(0,20,255,1)" /></svg></span> Dhaka, Gulshan, R5</p>
                  </div>
               </div>


               <div className='md:hidden relative'>
                  <button onClick={toggleNav}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg></button>


               </div>

               {toggleMenu && (
                  <div className='absolute top-[62px] right-0 w-full flex justify-center py-10 backdrop-blur-md rounded-br-[20px] rounded-bl-[20px] border-b-4 border-b-blue-700 bg-white/30 z-50 md:hidden'>
                     <ul className='flex flex-col justify-center'>

                        <li className='mr-5 font-semibold leading-[30px]'><NavLink to='/'>Home</NavLink></li>
                        <li className='mr-5 font-semibold leading-[30px]'><NavLink to='/service'>Service</NavLink></li>
                        <li className='mr-5 font-semibold leading-[30px]'><NavLink to='/doctors'>Doctors</NavLink></li>
                        <li className='mr-5 font-semibold leading-[30px]'>
                           <li><NavLink to='/blog' >Blog</NavLink></li>
                           <li><NavLink to='/singlePost' >Single Post</NavLink></li>
                           <NavLink to='/#'></NavLink></li>
                        <li className='mr-5 font-semibold leading-[30px]'>
                           <NavLink to='/contacts'>Contacts</NavLink></li>
                        <li className='mr-5 font-semibold leading-[30px]'>
                           <NavLink to='/about'>About</NavLink></li>
                        <li className='mr-5 font-semibold leading-[30px]'></li>
                     </ul>
                  </div>
               )}

            </div>
            <hr />

            {/* Navbar */}
            <div className='hidden md:flex justify-between items-center py-2 border-b-2'>
               <ul className='flex'>

                  <li className='mr-5 font-semibold leading-[30px]'><NavLink to='/'>Home</NavLink></li>
                  <li className='mr-5 font-semibold leading-[30px]'><NavLink to='/service'>Service</NavLink></li>
                  <li className='mr-5 font-semibold leading-[30px]'><NavLink to='/doctors'>Doctors</NavLink></li>
                  <li className='mr-5 font-semibold leading-[30px]'>

                     <div className="dropdown dropdown-end  ">
                        <label tabIndex={0} className="flex items-center">Pages
                           <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" /></svg>
                           </span>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                           <li><NavLink className="hover:bg-slate-100" to='/blog' >Blog</NavLink></li>
                           <li><NavLink className="hover:bg-slate-100" to='/singlePost' >Single Post</NavLink></li>
                        </ul>
                     </div>
                  </li>
                  <li className='mr-5 font-semibold leading-[30px]'>
                     <NavLink to='/contacts'>Contacts</NavLink></li>
                  <li className='mr-5 font-semibold leading-[30px]'>
                     <NavLink to='/about'>About</NavLink></li>
                  <li className='mr-5 font-semibold leading-[30px]'></li>
               </ul>
               <div>
                  <a href="tel:123" className='flex bg-[#0014FF] text-white px-[20px] py-[10px] rounded-full'><img className='w-[20px] mr-3' src={PhoneWhite} alt="Phone" /> + 123 3344 5555</a>
               </div>
            </div>



         </div>
      </>
   )
}

export default Nav