import React from 'react'
import Navbar from '../Navbar/Navbar'
import TitleDesc from '../TitleDesc'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'
const Contacts = () => {
   return (
      <>
         <Navbar />
         <div className="container mx-auto px-20 pt-20">
            <TitleDesc title="Contact" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil perferendis aliquid modi facilis consequuntur nam dolore! Aliquid laboriosam est, omnis atque ab facilis fugit!" />

            <div className='my-20'>
               <iframe title='Maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.989511024818!2d90.39112229584319!3d23.800859607046323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abd941ed15%3A0xf151df4e4e9c047c!2sUnited%20Hospital%20Limited!5e0!3m2!1sen!2sbd!4v1672403003336!5m2!1sen!2sbd" width="100%" height="500"></iframe>
            </div>

            <div className='grid grid-cols-2'>
               <div>
                  <h2 className='text-[34px] font-semibold'>Send us a letter</h2>
                  <div className='py-10'>

                     <form action="">
                        <input type="text" placeholder="Full Name" className="input border-blue-700 input-info outline-none w-[40%] mr-6 focus:outline-none focus:ring focus:ring-blue-700" />

                        <input type="text" placeholder="E-mail" required className="input border-blue-700 input-info w-[40%] focus:outline-none focus:ring focus:ring-blue-700" />

                        <br />

                        <textarea className="mb-5 textarea w-[85%] h-[150px] mt-5 focus:outline-none border-blue-700 focus:ring focus:ring-blue-700" placeholder="Message"></textarea>
                        <br />

                        <Button title='Submit' />
                     </form>
                  </div>
               </div>

               <div>
                  <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nesciunt, excepturi maiores dolor laborum nulla corporis qui quis facilis pariatur soluta, asperiores quo autem.</p>
                  <br />
                  <p className='text-gray-400'>Work Time</p>
                  <h4 className='font-semibold'>Mon-Fri: 8 AM-8PM</h4>
                  <br />
                  <p className='text-gray-400 mt-5'>Phone</p>
                  <a href="tel: +123 4567 8999" className='font-semibold'>+123 4567 8999</a>
                  <p className='text-gray-400 mt-5'>Address</p>
                  <h4 className='font-semibold'>Bangladesh, Dhaka</h4>
               </div>
               <div>

               </div>

            </div>

         </div>

         <Footer />

      </>
   )
}

export default Contacts