import Dashboard from "@/components/Dashboard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import axios from "axios";
import Card from "@/components/Card";
import AddEditModal from "@/components/AddEditModal";
import LoadingSpinner from "@/components/LoadingSpinner";



const Upload = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [unPublishedMenuItems, setUnPublishedMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const MenuItemGrid = ({ menuItems, sectionTitle }) => {
    return (
      <div className="m-10">
        <hr />
        <h2>{sectionTitle}</h2>

        <div className="m-2 md:p-10">
          {loading && <LoadingSpinner options="w-8 h-8" /> }
          {(menuItems.length == 0  && !loading) && 'No items 🤷‍♀️'}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {menuItems.map((item) => {
              return <Card key={item.id} title={item.title} imageSrc={item.src} />
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
        setMenuItems(response.data)
        setUnPublishedMenuItems(uniquestagedResponse)
      }
      catch (error) {
        console.log(error)
      }
      setLoading(false);
    }
    getScrapbook()
  }, [])

  const reRender = async() => {
    setLoading(true);
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/get-published-content/`)
    const stagedResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/get-staged-content/`)

    const uniquestagedResponse = stagedResponse.data.filter(function (obj) {
      return !response.data.some(function (obj2) {
        return obj.id == obj2.id;
      });
    });
    setMenuItems(response.data)
    setUnPublishedMenuItems(uniquestagedResponse)
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
    setPublishing(false)
  }


  return (
    <Dashboard>
      <h1>Menú Items</h1>


      <div className="flex flex-col">
        <div className="">
          <button onClick={sendPublish} className="hover:bg-white border-2 border-gray-400 rounded-md p-1 px-7 my-4">
            {publishing ? <LoadingSpinner options="w-5 h-5" /> : 'Publish Changes'}
          </button>
        </div>
        <AddEditModal type="menu" reRender={reRender}/>
        <MenuItemGrid sectionTitle="Unpublished Items" menuItems={unPublishedMenuItems} />
        <MenuItemGrid sectionTitle="Published Items" menuItems={menuItems} />
      </div>

    </Dashboard>
  );
}

export default Upload;
