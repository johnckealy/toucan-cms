
const Btn = ({ children, href }) => {

  return (
    <div className="relative">
      <a href={href} className="hover:bg-primary hover:text-white focus:ring-4 focus:ring-blue-300
       rounded  border border-primary px-2 md:px-5 py-2.5 text-xl text-center text-primary
      transition-all duration-300 ease-in-out ">
        {children.toUpperCase()}
      </a>
    </div>
  )
}

export default Btn
