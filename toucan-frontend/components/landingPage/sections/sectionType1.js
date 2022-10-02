import Image from 'next/image'



const SectionCard = ({ children, reversed, image }) => {
  return (
    <div className={`flex items-center max-w-screen-lg  flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} md:px-16  justify-center`}>
      <div className='rounded-full overflow-hidden shadow-md bg-[#fdf5e6] md:p-8'>
        <Image width={200} height={200} src={image} alt="Graphic about tax" />
      </div>
      <div className='py-3 md:px-16'>
        {children}
      </div>
    </div>
  );
}


function Section() {
  return (
    <>
      <div className='flex justify-center p-5 bg-[#ffeaca]'>
        <div>
          <h2 className='text-4xl text-center'>How it works</h2>
          <div className="mb-16">
            <SectionCard reversed image="/images/writers-block.svg">
              <h3>
                Review what you need
              </h3>
              <p>
                Setting up in Spain can be a hassle. This platform is here to help
                you to get through the process of setting up tax, registering as autónomo,
                obtaining Empadronamiento, getting the NIE, and more.
              </p>
            </SectionCard>
            <SectionCard image={"/images/logic-bro.svg"}>
              <h3>
                Navigate
              </h3>
              <p>
                Use the platform to find out what others have to done to navigate the bureaucracy
                of the Spanish system.
              </p>
            </SectionCard>
            <SectionCard reversed image="/images/friends.svg">
              <h3>
                Contribute
              </h3>
              <p>
                This platform works based on good will. If you found information that helped you,
                or noticed that something has changed in the process, we ask that you share it.
              </p>
            </SectionCard>
            <SectionCard image="/images/update.svg">
              <h3>
                Update this site
              </h3>
              <p>
                This platform is based on the version control system known as git. Since the burocracy
                changes so much, we keep a &quot;living document&quot; for each process.
              </p>
            </SectionCard>
          </div>
        </div>
      </div>
    </>
  )
}
export default Section
