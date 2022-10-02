import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import navItems from '@/content/navigation.json';
import { FaMeteor, FaTwitter, FaBloggerB, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'




const Linka = ({ children, href, className }) => {
  return (
    <Link href={href} className={className}>
      <a className='hover:opacity-80'>
        <span>{children}</span></a>
    </Link>
  )
}


const Accordian = ({ item }) => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between p-1">
              <Link href={item.href}>
                <a key={item.name}>
                  {item.name}
                </a>
              </Link>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                  <span className="sr-only">Open main menu</span>
                  {<ChevronDownIcon className={`block text-gray-800 h-6 w-6 transition duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition as={Fragment} enter="duration-500 overflow-hidden linear" enterFrom="max-h-0 transition-all" enterTo="max-h-96 overflow-hidden" leave="duration-100 overflow-hidden ease-in-out" leaveFrom="max-h-96 overflow-hidden" leaveTo="max-h-0 transition-all">
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 bg-white">
                {item.childItems.map((item) => (
                  <Disclosure.Button key={item.name} as="a" href={item.href} className="block px-3 py-1 text-sm" aria-current="page">
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}




const DropdownItems = ({ childItems }) => {
  return (
    <div className="hidden border-t-2 border-[#1abc9c] bg-[#505050] z-10 min-w-max mt-2 uppercase absolute group-hover:flex  flex-col drop-shadow-lg">
      {childItems.map((item) => {
        return (
          <Link key={item.name} href='/'>
            <a className="px-5 py-3 text-xs text-[#efefef] mr-6 hover:text-[#1abc9c] transition-all hover:translate-x-0.5 duration-400 ease-in-out" >{item.name}</a>
          </Link>
        )
      })}
    </div>
  )
}


export default function Navbar() {

  return (
    <Popover>
      <nav>
        <div className="grid auto-cols-max grid-cols-2 md:grid-cols-4 place-items-center bg-[#0c0c0b] ">

          <div className='text-white flex items-center gap-1'>EN <ChevronDownIcon className='w-4 h-4'/></div>

          {/* Mobile */}
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-10 w-10" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className='text-white space-x-4 uppercase text-sm p-5 col-span-2 flex'>
            <Linka href='/'>Home</Linka>
            <Linka href='/'>FAQs</Linka>
            <Linka href='/'>Contact</Linka>
          </div>

          <div className='flex space-x-3 text-white'>
             <Linka href='/'><FaTwitter /></Linka>
             <Linka href='/'><FaBloggerB /></Linka>
             <Linka href='/'><FaInstagram /></Linka>
             <Linka href='/'><FaFacebook /></Linka>
             <Linka href='/'><FaYoutube /></Linka>
          </div>

          {/* Desktop */}
          <div className="flex text-white text-2xl items-center w-full md:w-auto">
            <Link href="/">
              <a>
                <span className="sr-only">Back to Home</span>
                <span className='flex gap-1'><FaMeteor/>AstroEduca</span>
              </a>
            </Link>
          </div>

          <div className="hidden md:flex p-10 border-t-2 border-gray-400 col-span-2 md:space-x-10">
            {navItems.map((item) => {
              return (
                <div key={item.name} className="group text-sm text-white  hover:text-[#1abc9c] ">
                  <div className='flex-col flex items-end'>
                    <div className=''>
                      <Link key={item.name} href={item.href} >
                        <a className="font-medium uppercase flex items-center ">
                          <span className=''> {item.name}</span>  {item.childItems && <ChevronDownIcon className="group-hover:rotate-180 transition duration-300 h-5 w-5 ml-2" />}
                        </a>
                      </Link>
                    </div>
                  </div>
                  {item.childItems && <DropdownItems childItems={item.childItems} />}
                </div>
              )
            }
            )}
          </div>


          <div className='text-white'></div>

        </div>
      </nav>


      {/* All this is Mobile */}
      <Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <Link href="/"><a>
                <Image className="h-8 w-auto sm:h-10" alt="Logo image" src="/logo.svg" width={40} height={20} />
              </a>
              </Link>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                return (
                  <div key={item.name} className="border-t-4">
                    {item.childItems ? <Accordian item={item} /> :
                      <div className="py-1 px-3">
                        <Link href={item.href}>
                          <a>{item.name}</a>
                        </Link>
                      </div>
                    }
                  </div>
                )
              })}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover >
  );
}
