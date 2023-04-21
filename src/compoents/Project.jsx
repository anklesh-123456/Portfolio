import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import project_person from '../assets/images/image1.png'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination, Autoplay} from 'swiper'

const Project = ({projects}) => {

  return (
    <section id='projects' className='py-10 text-white '>
      <div className='text-center '>
        <h3 className='text-4xl font-semibold'>
          My <span className=' text-cyan-600'>Projects</span>
        </h3>
        <p className=' text-gray-400 mt-3 text-lg'>
          My awsome works
        </p>
        </div>
        <br />
        <div className='flex max-w-6xl px-5 mx-auto items-center relative gap-14 flex-row-reverse'>
          <div className='lg:w-2/3 w-full'>
          <Swiper
           slidesPerView={1.2}
      spaceBetween={20}
      breakpoints={{
        768:{
          slidesPerView: 2,
        },

      }}
      loop={true} 
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {
        projects.map((projects_info, i)=>(
          <SwiperSlide key={i}>
        <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
        <img src={projects_info.img} alt="" className='rounded-lg '/>
        <h3 className=' text-xl my-4'>{projects_info.name}</h3>
        <div className='flex gap-3'>
<a href={projects_info.github_link}  target='_blank' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
<a href={projects_info.live_link} target='_blank' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Live Domo</a>
        </div>
        </div>
      </SwiperSlide>
        ))
      }
    </Swiper>
      
          
          </div>
          <div className='lg:block hidden bg-cyan-600  h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg rounded-lg'>
            <img src={project_person} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Project
