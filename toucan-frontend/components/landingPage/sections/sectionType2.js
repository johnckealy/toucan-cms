import React from 'react';
import Btn from '../components/buttons';
import Card from '../components/cards';
import { BriefcaseIcon, SupportIcon, DatabaseIcon } from '@heroicons/react/solid'

function MySection() {
  return (
    <>
      <div className="p-5 md:px-28 ">
        <div className='md:flex md:justify-between justify-center items-center'>
          <h2 className=''>Explore by Category </h2>
          <Btn className="w-40" href="/">
            <div className=''>
              Explore All
            </div>
          </Btn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <Card Icon={BriefcaseIcon} cardHeader="Business Development" iconColor="bg-[#1f9744]/[0.2] text-[#1f9744]" cardBody="415 Vacancies" />
          <Card Icon={SupportIcon} cardHeader="Business Development" iconColor="bg-[#856233]/[0.2] text-[#856233]" cardBody="415 Vacancies" />
          <Card Icon={DatabaseIcon} cardHeader="Development" iconColor="bg-[#2c6c25]/[0.2] text-[#2c6c25]" cardBody="632 Vacancies" />
        </div>
      </div>
    </>
  )
}
export default MySection
