import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="bg-gray-200 h-auto w-full flex justify-center">
        <div className="max-w-4xl flex justify-around md:justify-between w-full px-4 md:px-12">
          <div className="flex w-full h-full items-center">
            <div className="w-full">
              <div className="my-2 flex flex-col">
                <span className="font-bold text-lg mx-2">Matthew Barty</span>
                <span className="font-thin text-sm mx-2">UX Engineer || Creative Technologist</span>
              </div>
            </div>
            <div className="flex">
              <Link href='/'>
                <div className="mx-2">Projects</div>
              </Link>
              <Link href='/about'>
                <div className="mx-2">About</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* In development banner */}
      <div className="flex flex-col items-center bg-yellow-100 border border-yellow-600 w-full">
        <div className="text-red-800 my-1">
          <span className="font-bold">🚧 In Development 🚧 </span>
          <span className="">-- In the meantime check out my ➡️ <a href='https://www.linkedin.com/in/matthew-barty/' className="font-bold underline-offset-4 underline text-blue-500">LinkedIn</a></span>
        </div>
      </div>
    </>
  );
};

export default Banner;
