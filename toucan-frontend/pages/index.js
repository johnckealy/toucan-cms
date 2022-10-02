import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import axios from "axios"
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'

const HomePage = () => {
  const router = useRouter()
  const { data: session, status } = useSession({ required: true })
  const loading = status === "loading"
  const authenticated = status === "authenticated"



  if (authenticated) {
    return  <Dashboard />
  }
  else {
    return  <Login />
  }
}


export default HomePage
