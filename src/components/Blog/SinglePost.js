import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import BigImg from '../../img/bigImg.jpg'
import PostItem from './PostItem'
import Button from '../Button/Button'

const SinglePost = () => {
   return (
      <>
         <Navbar />
         <div>
            <div>
               <img src={BigImg} alt="Big Images" />
            </div>
            <div className='container mx-auto px-5 lg:px-44'>

               <PostItem ff="monospace" height="60px" post="Lorem ipsum dolor sit amet consectetur adipisicing elit." date="Feb, 15, 2023" p="10px 0" />

               <p className='text-lg leading-8 text-slate-600 dark:text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsam quos autem itaque voluptas voluptatibus placeat delectus repellat commodi repudiandae? Iure eos enim et autem quas, earum sed doloremque a ipsum libero distinctio, nisi repudiandae? Non nobis eos accusamus in illum expedita a quisquam quaerat nesciunt! A quam molestias cum!</p>

               <br />
               <h2 className='italic text-xl font-semibold text-slate-700 dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h2>
               <br />

               <p className='text-lg leading-8 text-slate-600 dark:text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis cumque quae minima delectus alias animi dolor, temporibus consectetur omnis esse vel accusamus error et facere neque minus? At iure, error accusantium, vel obcaecati rem nam recusandae quasi dolore vero fugiat illo, ea quidem voluptates ut officia harum mollitia? Odio maiores officia voluptate repudiandae? Impedit animi necessitatibus reiciendis illum assumenda sit libero, nesciunt aspernatur? Qui, vero. A aut animi porro voluptate dolor, reiciendis aliquid cupiditate.</p>

               <br />
               <h2 className='fontStyle text-[34px] dark:text-slate-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem mollitia tempora voluptatum!</h2>

               <p className='text-lg leading-8 text-slate-600 dark:text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa ipsum molestiae vitae itaque, quibusdam accusantium beatae unde, accusamus quidem dolorem quae quam! Incidunt, officiis veniam voluptas aliquam ab expedita illo aspernatur doloremque necessitatibus dolorum voluptate distinctio quae, aperiam repudiandae animi dicta ducimus omnis delectus sapiente consequatur explicabo sequi impedit amet laboriosam. Repellat ab laborum a rerum ea nulla suscipit iste ullam et repudiandae voluptatum atque id reiciendis, natus, fugiat exercitationem harum. Ut tenetur, vel odit maiores iusto rerum, tempore, harum ab neque eligendi dicta reiciendis impedit rem libero ipsam!</p>
               <br />
               <li className='text-slate-600 text-lg dark:text-slate-100'>Lorem ipsum dolor sit.</li>
               <li className='text-slate-600 text-lg dark:text-slate-100'>Lorem ipsum dolor sit.</li>
               <li className='text-slate-600 text-lg dark:text-slate-100'>Lorem ipsum dolor sit.</li>
               <li className='text-slate-600 text-lg dark:text-slate-100'>Lorem ipsum dolor sit.</li>
               <br />
               <p className='text-lg text-slate-600 dark:text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sapiente fugiat excepturi ea ratione cupiditate exercitationem ab impedit, sit ducimus, voluptatem ullam ipsa facilis, doloremque quos. Id, deserunt aliquam? Amet illo delectus nulla dolores, aspernatur ut atque officiis mollitia rerum adipisci iusto quas deleniti, voluptatibus quibusdam enim deserunt voluptatum numquam blanditiis sint veritatis temporibus provident. Aspernatur libero ratione labore cupiditate maiores eligendi. Aliquam repudiandae praesentium optio, unde est earum? Necessitatibus asperiores ex neque pariatur eum architecto qui dolorem officia. Natus assumenda, possimus, sequi iure quisquam dolorem veritatis quia beatae quo numquam id aperiam ipsam? Molestiae quis nisi tempora veritatis cumque? Esse nihil amet atque rerum dolore nisi, aliquam facere velit eveniet? A tempore iste autem quis non, impedit molestias rerum.</p>
               <br />
               <p className='text-lg text-slate-600 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sunt! Ratione consectetur eius officiis reprehenderit possimus minima dicta obcaecati eum voluptatibus. Tempore facilis eum mollitia veniam at voluptatum consequuntur, vel accusamus alias?</p>

               <div className='my-20'>
                  <h2 className='text-[34px] text-bold dark:text-slate-100'>Leave a Reaply</h2>

                  <div className='flex flex-col justify-center '>
                     <label className="label">
                        <span className="label-text">Comment</span>
                     </label>
                     <textarea className="px-5 py-2 text-lg w-full lg:w-[600px] h-[200px] rounded-xl border-2 focus:outline-none  focus:ring focus:ring-blue-600" placeholder="Bio"></textarea>
                     <div className='mt-4'>
                        <Button title="Post Comment" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default SinglePost