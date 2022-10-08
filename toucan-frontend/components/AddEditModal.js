import ImageUploading from "react-images-uploading";
import { useState } from "react";
import { useSession } from "next-auth/react"
import Image from "next/image";
import { BsUpload } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import axios from "axios";


const AddEditModal = ({ type }) => {
  const { data: session } = useSession({ required: true })
  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [id, setId] = useState(null);
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const sendForm = async () => {

    if (title === "") {
      alert("Please enter a title");
      return;
    }

    if (images.length === 0) {
      alert("Please upload an image");
      return;
    }

    setSaving(true)

    const formData = new FormData();
    formData.append("upload", images[0].file);
    formData.append("_id", id);
    formData.append("title", title);
    formData.append("type", type);
    console.log('### Sending from url: ', process.env.NEXT_PUBLIC_API_URI)
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URI}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          access_token: session.accessToken,
        },
      }
      )
      const data = response.data
      if (data._id) {
        setId(data._id)
      }
    }
    catch (error) {
      console.log(error)
      setSaving(false)
    }
    setSaving(false)
  }



  return (
    <div className="grid place-content-center w-full border-4 p-10">


      <div className="">
        <h3>Upload a design</h3>

        <div className="flex flex-col my-5 ">
        <span className="text-sm text-gray-500">Title</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"
          className="border-greyed p-3 rounded-lg shadow-md " placeholder="Enter a title/tags.." />
          </div>
      </div>


      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="grid place-content-center">

            <div>
              <button
                className={`${images.length > 0 ? 'hidden' : ''} p-10 rounded-lg shadow-lg bg-white`}
                style={isDragging ? { color: "green" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                <div>
                  <FaUpload className="w-full text-xl my-3 " />
                  <span>Upload Image</span>
                </div>
              </button>
            </div>

            <div>
              {imageList.map((image, index) => (
                <div key={index} className="">
                  <div className="grid place-content-center">
                    <Image width={200} height={200} src={image.data_url} alt="" />
                  </div>
                  <div className="flex justify-around text-2xl -translate-y-5">
                    <button className=" bg-white shadow-md rounded-full p-3 scale-100 hover:scale-125 transition" onClick={() => onImageUpdate(index)}><BsUpload /></button>
                    <button className=" bg-white shadow-md rounded-full p-3 scale-100 hover:scale-125 transition" onClick={() => onImageRemove(index)}><AiFillDelete /></button>
                  </div>
                </div>
              ))}
            </div>


          </div>
        )}
      </ImageUploading>



      <button onClick={sendForm} className="hover:bg-white border-2 border-gray-400 rounded-md p-1 px-7 my-4">
        {saving ? "Saving..." : "Save"}
      </button>



    </div>
  );
}

export default AddEditModal;
