import React from 'react';
import { LibraryIcon, PencilIcon, PaperClipIcon, ShieldCheckIcon, OfficeBuildingIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';


/* This uses only css to slide out as a side nav. It's nice, but limited without
javascript. I used it for the spanish residencia site */


const Sidenav = () => {

  const router = useRouter();
  const route = router.pathname;

  const links = [
    { href: '/dashboard/empadronamiento', label: 'Empadronamiento', Icon: LibraryIcon, active: route === '/dashboard/empadronamiento' | route === '/dashboard' },
    { href: '/dashboard/nie', label: 'NIE', Icon: PencilIcon, active: route === '/dashboard/nie' },
    { href: '/dashboard/social-security', label: 'Social Security', Icon: ShieldCheckIcon, active: route === '/dashboard/social-security' },
    { href: '/dashboard/green-nie', label: 'Green NIE', Icon: PaperClipIcon, active: route === '/dashboard/green-nie' },
    { href: '/dashboard/bank-account', label: 'Bank Account', Icon: OfficeBuildingIcon, active: route === '/dashboard/bank-account' },
  ]

  return (

    <div className="min-h-screen h-full">
      <div className="relative z-10 bg-background transition-all duration-500 ease-in-out min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <Link href="/" className="w-max p-2.5"><a>
              <Image className="h-8 p-5 w-auto sm:h-10" alt="Logo image" src="/logo.png" width={50} height={40} />
              </a></Link>
            <ul className="mt-6 space-y-2 tracking-wide">
              {links.map(({ href, label, Icon, active }) => (
                <li key={label} className="min-w-max whitespace-nowrap">
                  <div aria-label={label} className={`relative flex items-center space-x-4 ${active ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white' : 'text-textdefault'} px-4 py-3 text-textdefault `}>
                    <Icon className='h-5 w-5' />
                    <Link href={href}>
                      <a className='hover:text-[#7a7a7a]'>
                        <span className="-mr-1 font-medium">{label}</span>
                      </a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Sidenav;
