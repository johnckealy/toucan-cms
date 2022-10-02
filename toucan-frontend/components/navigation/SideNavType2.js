import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { navItems } from '@/content/nav'

export default function SideNav({ navHeader }) {

  const [isMobile, setIsMobile] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false)
      setOpen(true)
    }
  }, [])


  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>

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
                    <div className="absolute top-0 right-0 -ml- flex pt-4 pr-2 ">
                      <button
                        type="button"
                        className="rounded-md text-default hover:text-default-hover focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-10 w-10" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex h-full flex-col overflow-hidden bg-secondary-bg">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-default">{navHeader}</Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 space-y-4 px-4 sm:px-6">
                        {navItems.map((item) => {
                          return (
                            <div key={item.heading}>
                              <a href={item.href} className="text-default md:pr-20 block rounded-lg px-3 hover:bg-primary hover:text-default-light">
                                <div className='flex items-center gap-7'>
                                  <span className='text-xl'>{item.icon}</span>
                                  <div className='flex flex-col'>
                                    <h4>{item.heading}</h4>
                                    <span className='text-sm italic text-greyed'>{item.subheading}</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div>
        <button
          type="button"
          className="rounded-md text-default hover:text-default-hover focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open panel</span>
          <MenuIcon className="h-10 w-10" aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
