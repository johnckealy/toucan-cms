import Dashboard from "@/components/Dashboard";
import axios from "axios";
import { useSession } from "next-auth/react"
import { useState } from "react";


const Upload = () => {
  const { data: session } = useSession({ required: true })
  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [scrapbookId, setScrapbookId] = useState(null);

  const sendScrapItem = async () => {
    setSaving(true)
    try {
      const response = await axios.post(
        'http://localhost:8001/scrapbooks',
        {
          heading: title,
          _id: scrapbookId
        },
        {
          headers: {
            access_token: session.accessToken,
          }
        })

      const data = response.data
      if (data._id) {
        setScrapbookId(data._id)
      }
    }
    catch (error) {
      console.log(error)
      setSaving(false)
    }
    setSaving(false)
  }


  return (
    <Dashboard>
      <div className="p-1 md:p-10 flex flex-col">
        <h3>Upload a design</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="border-greyed p-3 rounded-lg shadow-md my-10" placeholder="Enter a title.." />
        <button onClick={sendScrapItem} className="hover:bg-greyed hover:text-white border-2 border-gray-400 w-fit rounded-full p-1 px-7 my-4">
          {saving ? "Saving..." : "Save"}
        </button>
        {scrapbookId}
      </div>
    </Dashboard>
  );
}

export default Upload;
