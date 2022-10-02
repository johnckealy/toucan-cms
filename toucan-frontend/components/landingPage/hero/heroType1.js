import Image from 'next/image'
import TaxAnimate from '../../public/images/tax-animate.svg'
import { Btn } from '../buttons'
import AppearFromBelow from './appearFromBelow'

export default function Hero() {
  return (
    <div className="flex-col-reverse flex md:flex-row md:px-16 items-center justify-center">

      <AppearFromBelow>
        <div className='lg:px-50 2xl:px-64  p-3'>
          <h1>Get set up to live in Las Palmas de Gran Canaria</h1>
          <h2>A community-driven platform for sharing information about tax, residency and life in Spain. For free. </h2>
          <div className='py-4 md:p-0 text-center md:text-left'>
            <Btn href="/dashboard/empadronamiento">Get started</Btn>
          </div>
        </div>
      </AppearFromBelow>

      <div className='p-16'>
        <Image width={800} height={800} src={TaxAnimate} alt="Graphic about tax" priority />
      </div>

    </div>
  )
}
