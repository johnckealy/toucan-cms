import { useSession } from "next-auth/react"
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'

const HomePage = () => {
  const { data: session, status } = useSession({ required: true })
  const authenticated = status === "authenticated"

  if (authenticated) {
    return (
      <Dashboard>
        <div className="grid place-items-center md:p-32">
          <h1>Hi {session.user.name}!</h1>
          <div className="flex gap-4 p-5">
          </div>
        </div>
      </Dashboard>
    )
  }
  else {
    return <Login />
  }
}


export default HomePage
