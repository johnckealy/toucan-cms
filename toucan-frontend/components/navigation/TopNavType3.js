import { navItems } from '@/content/nav';
import Link from 'next/link';

const TopNavType3 = () => {
  return (
    <div className=''>

      <div className='p-6 text-md text-textlightdefault uppercase flex mx-auto gap-9 justify-center items-center'>
        <Link href="/">
          <a className='group mx-6'>
            <div className='text-2xl py-1'>logo</div>
            <div className='border-b-4 scale-50 mx-auto transition duration-500 group-hover:scale-75'></div>
          </a>
        </Link>
        {navItems.map((item) => {
          return (
            <Link key={item.heading} href={item.href}>
              <a className='hover:text-secondary'>
                <span>{item.heading}</span>
              </a>
            </Link>
          )
        })}
      </div>

    </div>
  );
}

export default TopNavType3;
