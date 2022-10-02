
const Hero1 = ({ h1, h2, children }) => {
  return (
    <div className={`bg-hero-pattern bg-cover`}>
      <div className="bg-black  bg-opacity-40">
        {children}
        <div className=" grid place-content-center">
          <div className="max-w-2xl  py-64 text-center  text-6xl ">
            <h1 className="text-textlightdefault">{h1}</h1>
            <div className="w-32 border-b-4 mx-auto py-5" />
            <h2 className="text-textlightdefault ">{h2}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
