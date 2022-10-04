import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import Sidenav from '@/components/Sidenav'

export default function Dashboard({ children }) {
  const { data: session, status } = useSession({ required: true })
  const authenticated = status === "authenticated"


  // If no session exists, display access denied message
  if (!authenticated) {
    return (
      <span>You are not logged in. Redirecting to Login Page...</span>
    )
  }

  // If session exists, display content
  return (
    <>
      <Sidenav>
        {children}
      </Sidenav>

    </>
  )
}
