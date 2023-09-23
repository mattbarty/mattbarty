const Banner = () => {
  return (
    <div className="w-full max-w-4xl flex justify-center my-4">
      <div className="flex w-full h-full items-center mx-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center bg-yellow-100 py-4 border border-yellow-600">
            <div className="font-bold text-2xl text-red-800 my-2">
              <div>
                🚧 In Development 🚧</div>
            </div>
            <div>I'm still building this site - In the meantime, most my projects are on my ➡️ <a href='https://www.linkedin.com/in/matthew-barty/' className="font-bold underline-offset-4 underline text-blue-500">LinkedIn</a> ⬅️</div>
          </div>
          <div className="text-4xl my-2">
            Matthew Barty
          </div>
          <div className="text-xl font-semithin">
            UX Engineer || Creative Technologist
          </div>
        </div>
      </div>
    </div >
  );
};

export default Banner;
