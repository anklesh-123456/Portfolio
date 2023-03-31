import React from 'react'
import hero from '../assets/images/image1.png';
import {AiFillGithub, AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin} from 'react-icons/ai'

const Hero = () => {
  const handleEmail =() =>{
    window.open("mailto:ankleshdoras513@gmail.com")
      }
  return (
    <section
    id="home"
     className=' min-h-screen flex py-10 md:flex-row flex-col items-center gap-4 mt-5'>
      <div className=' flex-1 flex items-center justify-center h-full  sm:w-10/12 w-11/12 '>
        <img src={hero} alt="hero-image" className=' h-full object-cover bg-cyan-600 rounded-3xl'/>
      </div>
      <div className=' flex-1'>
        <div className='md:text-left  text-center '>
        <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold '>
          <span className=' text-cyan-600 md:text-6xl text-5xl md:mt-3'>
            Hello!
            <br />
            </span>
            My Name is <span>Anklesh Doras</span>
          
        </h1>
        <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
          Frontend Devloper
          </h4>
        <button className='btn-primary mt-8' onClick={handleEmail}>Email Me</button>
        <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
          <a href="https://github.com/anklesh-123456" target='_blank'>
          <div className=' text-gray-600 hover:text-white cursor-pointer'><AiFillGithub/></div>
          </a>
        <a href="https://www.linkedin.com/in/anklesh-doras/" target='_blank'><div className=' text-gray-600 hover:text-white cursor-pointer'><AiOutlineLinkedin/></div></a>
         
         <div className=' text-gray-600 hover:text-white cursor-pointer'><AiOutlineInstagram/></div>
         <div className=' text-gray-600 hover:text-white cursor-pointer'><AiOutlineFacebook/></div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
