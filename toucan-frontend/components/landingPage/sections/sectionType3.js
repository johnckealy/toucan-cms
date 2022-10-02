import { CheckIcon } from '@heroicons/react/outline'
import Image from 'next/image'


export default function MySection() {
  return (
    <>
      <div className="m-32"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="justify-self-center lg:p-10 lg:m-10 self-center">
          <Image
            alt="Workflow"
            className=""
            src="https://justcamp-gatsby.netlify.app/static/content-1-img1-7634adf894536f1cd1cde9dea48c7337.jpg"
            height={400}
            width={400}
          />
        </div>
        <div className="justify-self-center lg:px-20 lg:py-10 m-3 lg:m-10 self-center">
          <h2>Help you to get the best job that fits you</h2>
          <div className="my-10 text-gray"><p className="lg:mb-4">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approach</p></div>
          <div className="my-2 flex items-center"><CheckIcon className=" mr-2 h-8 w-8 font-bold text-green" /> <strong>Bring to the table win-win survival</strong></div>
          <div className="my-2 flex items-center"><CheckIcon className=" mr-2 h-8 w-8 font-bold text-green" /> <strong>Capitalize on low hanging fruit to identify</strong></div>
          <div className="my-2 flex items-center"><CheckIcon className=" mr-2 h-8 w-8 font-bold text-green" /> <strong>But I must explain to you how all this</strong></div>
        </div>
      </div>
    </>
  )
}
