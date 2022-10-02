import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import Sidenav from '@/components/Sidenav'


export default function Dashboard({ children }) {
  const { data: session, status } = useSession({ required: true })
  const loading = status === "loading"
  const authenticated = status === "authenticated"

  const sendJWT = async () => {
    const res = await axios.post('http://localhost:8001/scrapbook',
      {
        tokens: {
          access_token: session.accessToken,
        },
        scrapbook_item: {
          heading: "Whis is newer!",
        }
      })
  }


  // If no session exists, display access denied message
  if (!authenticated) {
    return (
      <>
        You are not logged in. Redirecting to Login Page...
      </>
    )
  }

  // If session exists, display content
  return (
    <>
      <Sidenav>

        <div className="p-32">
          <h1>Protected Page</h1>
          <p>
            Youi're in! {session.user.email} <br />
          </p>
          {children}
        </div>
      </Sidenav>

    </>
  )
}
