import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import SEO from '@/components/seo.js';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { SessionProvider } from "next-auth/react"


// Check the analytics is working, it isnt properly tested

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <GoogleAnalytics /> */}
      <DefaultSeo {...SEO} />

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
