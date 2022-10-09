import Image from 'next/image'

const Card = ({ title, imageSrc }) => {
  return (
    <div className="shadow-lg p-5 bg-white rounded">
      <Image src={imageSrc} width={300} height={300} />
      <h4 className='border-2 p-2 rounded'>{title}</h4>
    </div>
  );
}

export default Card;
