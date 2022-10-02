
import React from 'react'
import Btn from '../buttons/buttonTransparent';
import Navbar from '../navigation/navbar';


const Hero = () => {
  return (
    <div>
      <div className="bg-black bg-opacity-40 h-full w-full relative">
        <div className="flex-col items-center mix-blend-hard-light bg-cover justify-center text-center bg-[url('https://stackbit-theme-planty.netlify.app/images/header.webp')]">
          <Navbar />
          <div className='text-white  mx-auto max-w-screen-sm py-40 md:py-60'>
            <h1 className='text-4xl md:text-6xl'>Real, beautiful plants right to your door</h1>
            <div className='md:m-20'>
              <Btn href='/'>See all Plants</Btn>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero
