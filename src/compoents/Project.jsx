import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Project1 from '../assets/images/movix.png'
import Project2 from '../assets/images/exercise.png'
import Project3 from '../assets/images/travigo.png'
import Project4 from '../assets/images/nike.png'
import Project5 from '../assets/images/personal.png'
import project_person from '../assets/images/image1.png'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination, Autoplay} from 'swiper'

const Project = () => {
  const projects =[
    {img:Project1,
      name:'Movix App',
     github_link : 'https://github.com/anklesh-123456/movix',
      live_link: 'https://movix-gules.vercel.app/'
    },
    {img:Project2,
      name:'Exercise App',
     github_link : 'https://github.com/anklesh-123456/Exercise-React-App',
      live_link: 'https://exercise-add.netlify.app/'
    },
    {img:Project3,
      name:'Travigo App',
     github_link : 'https://github.com/anklesh-123456/Travigo-Traval-Agency',
      live_link: 'https://travigo-agency.netlify.app/'
    },
    {img:Project4,
      name:'Nike App',
     github_link : 'https://github.com/anklesh-123456/Nike-Store',
      live_link: 'https://nike-bazar.netlify.app/'
    },
    {img:Project5,
      name:'Personal App',
     github_link : 'https://github.com/anklesh-123456/website',
      live_link: 'https://personal-webapp.netlify.app/'
    }
  ]
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
