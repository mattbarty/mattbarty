import Image from "next/image";

const ProjectBanner = () => {
  return (
    <>
      <div className="container w-full">
        <div className="flex justify-between my-4">
          <div className="text-7xl max-w-[70%] break-words">ArcanaGPT sss sss s s ss  ArcanaGPT</div>
          <div className="flex">
            <div className="mx-2">link</div>
            <div className="mx-2">link</div>
            <div className="mx-2">link</div>
          </div>
        </div>
        <div className="my-8">Lorem ipsum</div>
        <div className="my-8 flex">
          <div className="p-2 mx-2 bg-gray-200 rounded-lg">tag 1</div>
          <div className="p-2 mx-2 bg-gray-200 rounded-lg">large tag</div>
          <div className="p-2 mx-2 bg-gray-200 rounded-lg">Large large tag</div>
          <div className="p-2 mx-2 bg-gray-200 rounded-lg">Largest tag ever!</div>
        </div>
      </div>
    </>
  );
};

export default ProjectBanner;
