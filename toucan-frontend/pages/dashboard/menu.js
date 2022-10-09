import UploaderPage from "@/components/UploaderPage";


const HomePage = () => {
  const { data: session, status } = useSession({ required: true })
  const authenticated = status === "authenticated"

  if (authenticated) {
    return (
      <UploaderPage />
    )
  }
  else {
    return <Login />
  }
}


export default HomePage
