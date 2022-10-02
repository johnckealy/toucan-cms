import Card from './cardWithPhotoRounded'
import { HeartIcon } from '@heroicons/react/solid'

const data = [
  {
    imageSrc: "bg-[url('https://stackbit-theme-planty.netlify.app/images/plant1-featured.webp')]",
    headline: "Nulla Susscipit",
    subheader: "Big Plants",
    price: "12",
  },
  {
    imageSrc: "bg-[url('https://stackbit-theme-planty.netlify.app/images/plant2-featured.webp')]",
    headline: "Integer porta",
    subheader: "Cactuses",
    price: "99",
  },
  {
    imageSrc: "bg-[url('https://stackbit-theme-planty.netlify.app/images/plant3-featured.webp')]",
    headline: "Vestibulum eget",
    subheader: "Big Plants",
    price: "900",
  },
  {
    imageSrc: "bg-[url('https://stackbit-theme-planty.netlify.app/images/plant4-featured.webp')]",
    headline: "Fuse Sagittis",
    subheader: "Cactuses",
    price: "900",
  }
]

const CardGrid = () => {
  return (


    <div className='p-10 md:-translate-y-64'>

      <div className='my-12  flex text-white items-center'>
        <HeartIcon className='px-1 h-10 w-10' /> <h3> Best Sellers</h3>
      </div>

      <div className="mt-3 gap-4 grid grid-cols-1 md:grid-cols-4">
        {data.map((cardData) => (
          <Card
            key={cardData.headline}
            imageSrc={cardData.imageSrc}
            headline={cardData.headline}
            subheader={cardData.subheader}
            price={cardData.price}
          />
        ))}
      </div>
    </div>
  )
}

export default CardGrid
