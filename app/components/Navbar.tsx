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
              <div className="max-4">Projects</div>
            </Link>
            <div className="mx-4">About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
