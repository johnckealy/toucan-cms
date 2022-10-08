import Dashboard from "@/components/Dashboard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import axios from "axios";
import Card from "@/components/Card";
import AddEditModal from "@/components/AddEditModal";


const Upload = () => {
  const { data: session } = useSession({ required: true })
  const [scrapbookItems, setScrapbookItems] = useState([]);



  useEffect(() => {
    const getScrapbook = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URI}/scrapbooks`,
          {
            headers: {
              access_token: session.accessToken,
            }
          })
        setScrapbookItems(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getScrapbook()
  }, [])




  return (
    <Dashboard>

      <AddEditModal type='menu'/>


      <div className="m-2 md:p-10">
        <h2>Menú</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {scrapbookItems.map((item) => {
            return <Card key={item._id} title={item.heading} />
          })}
        </div>
      </div>
    </Dashboard>
  );
}

export default Upload;
