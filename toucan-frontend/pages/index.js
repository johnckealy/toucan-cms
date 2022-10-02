
import React from 'react'
import { NextSeo } from 'next-seo';
import Nextify from '@/components/nextifyHome'

const HomePage = ({ tagline }) => {
  return (
    <>

      <NextSeo title="Change me I'm the home page!" description="" />

      <Nextify />

    </>
  )
}

export async function getStaticProps() {
  return {
    props: { tagline: "The pickleback press" },
  };
}

export default HomePage
