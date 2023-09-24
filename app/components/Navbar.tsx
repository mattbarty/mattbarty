import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-gray-200 h-12 w-full flex justify-center">
      <div className="max-w-4xl flex justify-between  w-full px-12">
        <div className="flex w-full h-full items-center">
          <div className="w-full">
          </div>
          <div className="flex">
            <Link href='/'>
              <div className="max-4">Home</div>
            </Link>
            <Link href='/about'>
              <div className="mx-4">About</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
