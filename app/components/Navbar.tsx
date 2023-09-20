const Banner = () => {
  return (
    <div className="bg-green-300 h-12 max-w-4xl w-full flex justify-center">
      <div className="flex justify-between bg-gray-200 w-full px-12">
        <div className="flex w-full h-full items-center">
          <div className="w-full">
            <div className="h-8 w-8 bg-green-300 rounded-full">

            </div>
          </div>
          <div className="flex">
            <div className="max-4">Projects</div>
            <div className="mx-4">About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
