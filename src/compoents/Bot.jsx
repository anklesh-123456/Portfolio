import React from 'react'
import { BsFillChatDotsFill } from 'react-icons/bs';
const Bot = () => {
  const handleEmail =() =>{
    window.open("mailto:ankleshdoras513@gmail.com")
      }
  return (
    <div className='fixed bottom-5 right-5 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce' onClick={handleEmail}>
 <BsFillChatDotsFill/>
    </div>
  )
}

export default Bot
