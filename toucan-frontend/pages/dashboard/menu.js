import Dashboard from "@/components/Dashboard";
import UploaderPage from "@/components/UploaderPage";


const HomePage = () => {
  return (
    <Dashboard>
      <h1>Menú Items</h1>
      <UploaderPage type="menu" />
    </Dashboard>
  )
}


export default HomePage
