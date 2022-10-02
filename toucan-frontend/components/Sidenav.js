import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, MenuIcon, HomeIcon } from '@heroicons/react/outline'
import { CgLogOut } from 'react-icons/cg'
import Link from 'next/link'
import { navItems } from '@/content/nav'
import { signOut } from "next-auth/react"



export default function SideNav({ navHeader, children }) {
  const [open, setOpen] = useState(false)

  const SideNavInner = () => {
    return (
      <>
        <button className="md:hidden absolute top-0 right-0 flex pt-4 pr-2 text-default hover:text-default-hover" onClick={() => setOpen(false)}>
          <span className="sr-only">Close panel</span>
          <XIcon className="h-10 w-10" aria-hidden="true" />
        </button>
        <div className="flex h-full flex-col min-w-max overflow-hidden bg-secondary-bg">
          <button className=""
            onClick={() => signOut()}>
            <div className='flex gap-2 group justify-end p-4 text-greyed hover:text-black items-center'>
              <span className='text-sm'>Logout</span>
              <CgLogOut className='w-5 h-5 scale-100 group-hover:scale-125 transition' />
            </div>
          </button>
          <div className="relative mt-6 flex-1 space-y-4">
            {navItems.map((item) => {
              return (
                <div key={item.heading}>
                  <Link href={item.href}>
                    <a className="pl-6 md:pl-10 md:pr-28 flex px-3 py-2 hover:bg-default-bg hover:translate-x-1 transition">
                      <div className='flex items-center gap-4'>
                        <div className='text-xl'>{item.icon}</div>
                        <div className='ml-4 flex flex-col'>
                          <span>{item.heading}</span>
                          <span className='text-xs italic opacity-50'>{item.subheading}</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }


  return (
    <>
      {/* Mobile Only */}
      <button className="md:hidden rounded-md text-default hover:text-default-hover focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(true)}>
        <span className="sr-only">Open panel</span>
        <MenuIcon className="h-10 w-10" aria-hidden="true" />
      </button>

      {/* Desktop Only */}
      <div className='md:flex h-screen'>
        <div className='hidden md:flex h-full '>
          <SideNavInner navHeader={navHeader} navItems={navItems} />
        </div>
        <div className='overflow-y-auto'>
          {children}
        </div>
      </div>

      {/* Mobile Only */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="md:hidden relative z-10" onClose={setOpen}>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-500"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen md:w-auto">
                    <SideNavInner navHeader={navHeader} navItems={navItems} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
