import Link from 'next/link'

const Button = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>
        <div className="hover:bg-greyed hover:text-white border-2 border-gray-400 rounded-full p-3">
          {children}
        </div>
      </a>
    </Link>
  );
}

export default Button;
