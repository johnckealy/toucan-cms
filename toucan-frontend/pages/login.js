import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div className="grid grid-cols-1 place-items-center h-screen w-screen">
          <div className="w-1/3 text-center">
            <h2>Welcome {session.user.email}!</h2>
            <button className="m-8 ring hover:ring-gray-900 rounded-full py-2 px-5 hover"
              onClick={() => signOut()}>Sign Out</button>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className="grid grid-cols-1 place-items-center h-screen w-screen">
          <div className="w-1/3 text-center">
            <h1>Please Sign in </h1>
            <button className="m-8 ring hover:ring-blue-900 rounded-full py-2 px-5 hover"
              onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      </>
    )
  }
}
