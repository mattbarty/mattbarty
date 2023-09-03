const Banner = () => {
  return (
    <div className="bg-green-300 h-12 max-w-4xl w-full flex justify-center">
      <div className="flex justify-between bg-purple-400 w-full px-12">
        <div className="flex w-full h-full items-center">
          <div className="w-full">Matthew Barty</div>
          <div className="flex bg-red-100">
            <div className="max-4">Projects</div>
            <div className="mx-4">About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
