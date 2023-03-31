import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
const Contact = () => {
  
  const contact_info =[
    {logo:<HiOutlineMail/>, text:'ankleshdoras513@gamil.com'},
    {logo:<BsWhatsapp/>, text:'+91 8446159439'},
    {logo:<GoLocation/>, text:'wanadongri Hingna nagpur 441110 .'}
  ]

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ss1udk', 'template_fouk18c', form.current, 'kFsKXu9lY6yBQKY-u')
      .then((result) => {
          console.log(result.text);
          console.log("Massage sent");
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id='contact' className='py-10 px-3 text-white'>
      <div className="text-center mt-8">
<h3 className=' text-4xl font-semibold'>Contact  
  <span className=' text-cyan-600'> Me</span>
  </h3>
  <p className=' text-gray-400 mt-3 text-lg'>get in touch</p>

  <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
<form className='flex flex-col flex-1 gap-5' ref={form} onSubmit={sendEmail}>
  <input type="text" placeholder='Your Name' name="user_name"/>
  <input type="Email" placeholder='Your Email Address' name="user_name"/>
 <textarea placeholder='Your Message' rows={10} name="message" ></textarea>
 <button className='btn-primary w-fit' type="submit" value="Send">Send Massage</button>
</form>
<div className='flex flex-col gap-7'>
{
  contact_info.map((contact, i)=>(
    <div key={i} className='flex gap-4 w-fit items-center'>
  <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
{contact.logo}
  </div>
  <p className='text-base'>{contact.text}</p>
</div>
  ))
}


</div>
  </div>
      </div>
    </section>
  )
}

export default Contact
