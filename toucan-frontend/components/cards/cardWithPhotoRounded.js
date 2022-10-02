import { ShoppingCartIcon } from '@heroicons/react/outline'

const Card = ({ imageSrc, headline, subheader, price }) => {
  return (
    <div>
      <div className={"rounded-3xl h-64 shadow-lg " + imageSrc }>
        <div className="flex justify-end items-end h-full">
          <div className="text-white">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
      <div className="p-2">
        <h4>{headline}</h4>
        <p className="uppercase">{subheader}</p>
        <h3 className="font-serif">${price}</h3>
      </div>
    </div>
  )
}

export default Card
