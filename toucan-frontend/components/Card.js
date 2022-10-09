import axios from "axios";

const Card = ({ id, title, imageSrc, reRender }) => {

  const deleteItem = async () => {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URI}/scrapbooks/${id}`)
    reRender();
  }


  return (
    <div className="shadow-lg p-5 bg-white rounded">
      <img src={imageSrc} />
      <h4 className='border-2 p-2 rounded'>{title}</h4>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default Card;
