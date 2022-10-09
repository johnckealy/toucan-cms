import Dashboard from "@/components/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";
import AddEditModal from "@/components/AddEditModal";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BiWorld } from "react-icons/bi";


const Upload = () => {
  const [items, setItems] = useState([]);
  const [unPublisheditems, setUnPublisheditems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const ItemGrid = ({ items, sectionTitle }) => {
    return (
      <div className="m-10">
        <hr />
        <h2>{sectionTitle}</h2>

        <div className="m-2 md:p-10">
          {loading && <LoadingSpinner options="w-8 h-8" />}
          {(items.length == 0 && !loading) && 'No items 🤷‍♀️'}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {items.map((item) => {
              return <Card key={item.id} id={item.id} title={item.title} imageSrc={item.src} reRender={reRender} />
            })}
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const getScrapbook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/get-published-content/`)
        const stagedResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/get-staged-content/`)

        const uniquestagedResponse = stagedResponse.data.filter(function (obj) {
          return !response.data.some(function (obj2) {
            return obj.id == obj2.id;
          });
        });
        setItems(response.data)
        setUnPublisheditems(uniquestagedResponse)
      }
      catch (error) {
        console.log(error)
      }
      setLoading(false);
    }
    getScrapbook()
  }, [])

  const reRender = async () => {
    setLoading(true);
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/get-published-content/`)
    const stagedResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/get-staged-content/`)

    const uniquestagedResponse = stagedResponse.data.filter(function (obj) {
      return !response.data.some(function (obj2) {
        return obj.id == obj2.id;
      });
    });
    setItems(response.data)
    setUnPublisheditems(uniquestagedResponse)
    setLoading(false);
  }


  const sendPublish = async () => {
    setPublishing(true)
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/publish/`)
    }
    catch (error) {
      console.log(error)
    }
    reRender();
    setPublishing(false)
  }

  const PublishBtn = () => {
    return (
      <div className="flex items-center gap-2">
        <BiWorld />
        <span>Publish Changes</span>
      </div>
    )
  }

  return (
    <Dashboard>
      <div className="container mx-auto mt-20">

        <h1>Menú Items</h1>


        <div className="flex flex-col">
          <div className="">
            <button onClick={sendPublish} className="hover:bg-white border-2 border-gray-400 rounded-md p-1 px-7 my-4">
              {publishing ? <LoadingSpinner options="w-5 h-5" /> : <PublishBtn />}
            </button>
          </div>
          <AddEditModal type="menu" reRender={reRender} />
          <ItemGrid sectionTitle="Unpublished Items" items={unPublisheditems} />
          <ItemGrid sectionTitle="Published Items" items={items} />
        </div>
      </div>

    </Dashboard>
  );
}

export default Upload;
