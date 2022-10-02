import { getProviders, signIn } from "next-auth/react"
import { useState, useEffect } from "react"
import Image from "next/image"


export default function SignIn() {

  const [providers, setProviders] = useState([])

  useEffect(() => {
    const fetchProviders = async() => {
      const provs = await getProviders()
      setProviders(provs)
    }
    fetchProviders();

  }, []);

  const GoogleBtn = () => {
    return (
      <button onClick={() => signIn('google', { callbackUrl: '/' })}>
        <Image src="/images/btn_google.png" width={250} height={60} />
      </button>

    )
  }


  return (
    <>

      <div className="grid place-items-center h-screen">
        <div className="flex  flex-col items-center ">

          <div className="">
            {/* <Image src="/logo.svg" width={200} height={200} /> */}
            <h2>Sonia's Scrapbook</h2>
          </div>

          <div className="">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                {(provider.name == "Google") && <GoogleBtn />}
              </div>
            ))}
          </div>

        </div>
      </div>

    </>
  )
}
