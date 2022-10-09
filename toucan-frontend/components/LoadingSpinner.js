
const LoadingSpinner = ({ options }) => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className={`${options} border-b-2 border-gray-900 rounded-full animate-spin`}></div>
      </div>
    </>
  );
}

export default LoadingSpinner;
