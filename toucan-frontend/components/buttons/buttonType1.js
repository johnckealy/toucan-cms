import Link from 'next/link'

const Btn = ({ children, href, className }) => {
  return (
    <Link href={href} className={className}>
      <a className="text-sm font-medium bg-primary text-white focus:ring-4 focus:ring-blue-300 rounded h-100 border px-5 py-2.5 ransition-all duration-300 ease-in-out hover:bg-background hover:ring-4  hover:text-textdefault ">
        {children.toUpperCase()}
      </a>
    </Link>
  )
}
export { Btn }
