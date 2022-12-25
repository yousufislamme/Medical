import React from 'react'
import Logo from './logo.svg'
import Clock from './../../icons/clock-five.svg';
import Map from './../../icons/marker.svg';
import Phone from './../../icons/phone-call.svg';
import PhoneWhite from './../../icons/phoneWhite.svg';

export default function Navbar() {

   return (

      <div className="container mx-auto px-20">
         <div className='flex items-center justify-between py-2'>
            <div className='w-[50px] flex items-center'>
               <img src={Logo} alt="Logo" />
               <h2 className='font-extrabold text-blue-900 ml-[-5px] text-xl'>Dentino</h2>
            </div>
            <div className='flex '>
               <div className=''>
                  <p className='flex'><img className='w-5 mr-2' src={Clock} alt="Clock" /> Mon-Fri 8 AM - 8 PM</p>
               </div>
               <div className='ml-10'>
                  <p className='flex'><img className='w-5 mr-2' src={Phone} alt="Phone" />+123456789111</p>
               </div>
               <div className='ml-10'>
                  <p className='flex'><img className='w-5 mr-2' src={Map} alt="Map" /> Dhaka, Gulshan, R5</p>
               </div>
            </div>

         </div>
         <hr />

         {/* Navbar */}
         <div className='flex justify-between items-center py-2 border-b-2'>
            <ul className='flex'>
               <li className='mr-5 font-semibold '><a href="#">Home</a></li>
               <li className='mr-5 font-semibold '><a href="#">Service</a></li>
               <li className='mr-5 font-semibold '><a href="#">Doctors</a></li>
               <li className='mr-5 font-semibold '><a href="#">Pages</a></li>
               <li className='mr-5 font-semibold '><a href="#">Contacts</a></li>
            </ul>
            <div>
               <button className='flex bg-[#0014FF] text-white px-[20px] py-[10px] rounded-full'><img className='w-[20px] mr-3' src={PhoneWhite} alt="Phone" /> + 123 3344 5555</button>
            </div>
         </div>


      </div>

   )
}
