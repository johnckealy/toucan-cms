import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { useEffect } from 'react'
import { navItems } from '@/content/nav'


// This moves on click between 0 and 1/4 of the screen, 3/4 on mobile. But beware,
// it doesn't use headless UI so it's not as smooth as it could be.


export default function SideNav({ navHeader, children }) {

  // const [isMobile, setIsMobile] = useState(true)
  // const [open, setOpen] = useState(true)

  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     setIsMobile(false)
  //     setOpen(true)
  //   }
  // }, [])

  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  }


  return (
    <>
      <div className={`flex h-screen `}>

        <div className={`${open ? 'w-[75vw] md:w-[25vw] ' : ' w-0 '} duration-500 bg-secondary-bg transition-width`}>
            <FaHome className='w-7 h-7 m-5 ml-auto' />
            <div className='space-y-5 pt-4'>
              {navItems.map((item) => {
                return (
                  <div key={item.name}>
                      <a href={item.href} className={`block text-default p-2 md:pr-32 px-3 hover:bg-gray-50 min-w-max `}>
                        <div className='flex items-center gap-4'>
                          {item.icon}
                          <div className='flex flex-col'>
                            <span className='text-md'>{item.heading}</span>
                            <span className='text-sm opacity-60'>{item.subheading}</span>
                          </div>
                        </div>
                      </a>
                  </div>
                )
              })}
            </div>
        </div>

        <div className={`${open ? ' w-[25vw] md:w-[75vw]' : ' w-full '} overflow-y-scroll z-10 grow bg-default-bg transition-width `}>

          <button onClick={toggleOpen} className="self-start">
            <FiMenu className='bg-white w-10 h-10 rounded-full p-2 m-3 shadow-md' />
          </button>

          <div>
            <div className='p-'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
