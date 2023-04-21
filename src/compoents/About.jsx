import React from 'react'
import aboutImage from '../assets/images/image2.png'
const About = () => {
  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className=' text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className=' flex md:flex-row  flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='py-2'></div>
          <div className='text-gray-400 my-3'>
            <p className=' text-justify leading-7 w-11/12 mx-auto'>I am Anklesh Dipak Doras I have completed my BE in Mechanical Engineering. This is my official portfolio website to shows all Details and my work on front-end developement.</p>
            <br />
            <br />
            <a href="./src/assets/Anklesh_Doras_CV.pdf" download>
            <button className='btn-primary '>Download CV</button></a>
          </div>
         
          <div className='flex-1 flex justify-center items-center'>
            <div className=' w-11/12 lg:w-96 h-full relative sm:w-10/12  max-w-sm aboutImg mt-3'>
              <img src={aboutImage} alt=""  className='w-full object-cover bg-cyan-600 rounded-xl'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
