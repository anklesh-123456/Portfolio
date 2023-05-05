import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3,TbBrandJavascript, TbBrandNextjs} from 'react-icons/tb'
import {SiReact} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiRedux, SiBootstrap} from 'react-icons/si'

const Skills = () => {
  const skills =[
    {
      logo:<AiOutlineHtml5/>, lang: 'HTML', count:86
    },
    {
      logo:<TbBrandCss3/>, lang: 'CSS', count:88
    },
    {
      logo:<TbBrandJavascript/>, lang: 'Javascript', count:65
    },
    {
      logo:<SiReact/>, lang: 'React JS', count:75
    },
    {
      logo:<TbBrandNextjs/>, lang: 'Next JS', count:70
    },
   
    {
      logo:<SiTailwindcss/>, lang: 'Tailwind CSS', count:88
    },
    {
      logo:<SiRedux/>, lang: 'Redux', count:65
    },
    {
      logo:<SiBootstrap/>, lang: 'BootStrap', count:60
    },
    
  ]
  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className=' mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>My
          <span className=' text-cyan-600'>Skills</span>
        </h3>
        <p className=' text-gray-400 mt-3 text-lg'>My Knowledge</p>
        <div className=' flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
            skills?.map((skill, i)=>(
              <div key={i} className=' border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div style={{
              background:`conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`
            }} className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
                {skill.logo}
              </div>
            </div>
            <p className='text-xl mt-3'>{skill.lang}</p>
          </div>
            ))
          }
        </div>
      </div>
      
    </section>
  )
}

export default Skills
