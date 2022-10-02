import Link from 'next/link'


export default function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-3">
          <div className="text-center">
            <h3 className="text-3xl mt-4"> Spanish residency</h3>
          </div>
          <div className="mt-20 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy;<a href="https://storyset.com/people">Graphics by Storyset</a> </p>
            <div className="order-1 md:order-2">
              <Link href="/about">
                <a className="px-2">About</a>
              </Link>
              <Link href="/contact">
                <a className="px-2 border-l">Contact me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
