import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

const Card = ({ id, title, imageSrc, reRender }) => {

  const [markedForDelete, setMarkedForDelete] = useState(false);

  const deleteItem = async () => {
    setMarkedForDelete(true)
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URI}/scrapbooks/${id}`)
    reRender();
  }


  return (
    <>
      <div className="shadow-lg bg-white rounded">
        <button onClick={deleteItem} className="-translate-x-4 -translate-y-4 transition scale-100 hover:scale-125  bg-white shadow rounded-full p-1 w-fit border-2 border-black">
          <BsFillTrashFill className="text-2xl" />
        </button>
        <div className="p-3">
          <img src={imageSrc} />
          <h4 className='border-2 p-2 my-2 rounded'>{title}</h4>
        </div>
        <div className={`text-red-500 text-center ${markedForDelete ? '' : 'hidden'}`}>
          Will delete on Publish
        </div>
      </div>

    </>
  );
}

export default Card;
