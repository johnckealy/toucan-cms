import Dashboard from "@/components/Dashboard";
import UploaderPage from "@/components/UploaderPage";


const LocalPage = () => {
  return (
    <Dashboard>
      <h1>Local</h1>
      <UploaderPage type="local" />
    </Dashboard>
  )
}


export default LocalPage
