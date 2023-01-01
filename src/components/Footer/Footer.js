import React from 'react'
import Logo from '../../img/logo.svg'
import Button from '../Button/Button'
import Copyright from './Copyright'
const Footer = () => {
   return (
      <>
         <div>
            <div className='bg-blue-50 py-20 dark:bg-slate-800'>
               <div className='container mx-auto px-5 lg:px-20 '>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                     <div className="hidden lg:block bg-white mx-14 px-10 py-20 rounded-tr-[50px] rounded-bl-[50px] mt-[-150px] shadow-lg dark:bg-slate-600">
                        <div className='w-[50px] flex items-center'>
                           <img src={Logo} alt="Logo" />
                           <h2 className='font-extrabold text-blue-900 ml-[-5px] text-xl dark:text-slate-50'>Dentino</h2>
                        </div>

                        <div>
                           <p className='py-5 text-lg dark:text-slate-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloribus quod delectus. Beatae quos asperiores dicta voluptatum libero voluptates fuga. Eveniet libero culpa mollitia tempora cum voluptate dolor numquam! Sequi.</p>
                        </div>
                        <div className='flex flex-col'>
                           <div className='flex'>
                              <div className='flex justify-center items-center  w-12 h-12 my-3 bg-[#0014FF] rounded-full'>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="rgba(255,255,255,1)" /></svg>
                              </div>
                              <div className='mt-3 ml-5'>
                                 <h3 className='font-semibold text-lg dark:text-slate-100'>Address</h3>
                                 <p className='dark:text-slate-300'>Lorem, ipsum dolor.</p>
                              </div>
                           </div>
                           <div className='flex'>
                              <div className='flex justify-center items-center  w-12 h-12 my-3 bg-[#0014FF] rounded-full'>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(255,255,255,1)" /></svg>
                              </div>
                              <div className='mt-3 ml-5'>
                                 <h3 className='font-semibold text-lg dark:text-slate-100'>Phone</h3>
                                 <a className='dark:text-slate-300' href='tel: +123 45667 890 '>+ 123 45667 890</a>
                              </div>
                           </div>
                           <div className='flex'>
                              <div className='flex justify-center items-center  w-12 h-12 my-3 bg-[#0014FF] rounded-full'>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" fill="rgba(255,255,255,1)" /></svg>
                              </div>
                              <div className='mt-3 ml-5'>
                                 <h3 className='font-semibold text-lg dark:text-slate-100'>Office Time</h3>
                                 <p className='dark:text-slate-300'>Lorem, ipsum dolor.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="">
                        <div>
                           <p className='text-lg mb-10 dark:text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Odio commodi accusamus asperiores corporis, eligendi quisquam expedita aliquam et blanditiis non aliquid? Voluptates, aliquid!</p>
                           <Button title='Make an Appointment' />
                        </div>
                        <div className='flex pt-10'>
                           <div className='mr-10'>
                              <h2 className='font-semibold text-xl dark:text-slate-50'>Quick Links</h2>
                              <ul>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Mkae An Appointment</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Our Service</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Doctors</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">About Dentino</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Our Contacts</a></li>
                              </ul>
                           </div>
                           <div className='mr-10'>
                              <h2 className='font-semibold text-xl dark:text-slate-50'>Help Center</h2>
                              <ul>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Mkae An Appointment</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Our Service</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Doctors</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">About Dentino</a></li>
                                 <li className='leading-[30px]'><a className='dark:text-slate-300' href="#">Our Contacts</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Copyright />
      </>
   )
}

export default Footer