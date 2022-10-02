import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"

export default function ProtectedPage() {
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
        <h1>Access Denied</h1>
        <p>
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            You must be signed in to view this page
          </a>
        </p>
      </>
    )
  }

  // If session exists, display content
  return (
    <>
      <div className="p-32">
        <h1>Protected Page</h1>
        <p>
          Youi're in! {session.user.email} <br />
          <button onClick={sendJWT} className="ring rounded p-3 m-5">Send JWT</button>
        </p>
      </div>
    </>
  )
}
