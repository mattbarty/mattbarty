"use client";
import Link from "next/link";
import { faDownload, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {

  const handlePdfOpen = () => {
    window.open('assets/pdf/matthew_barty_resume_2023.pdf', '_blank');
  };

  return (
    <>
      <div className="flex bg-yellow-200 w-full justify-center">
        <span></span>🚧 WIP - beware bugs, see
        <a href="https://www.linkedin.com/in/matthew-barty/" className="mx-1 underline underline-offset-2 text-blue-500 font-bold">LinkedIn</a> in meantime.
      </div>
      <div className="bg-gray-200 h-auto w-full flex justify-center p-2">
        <div className="max-w-4xl flex justify-around md:justify-between w-full md:px-12">
          <div className="flex w-full h-full items-center">
            <div className="w-full">
              <a className="my-2 flex flex-col hover:pointer" href="https://www.linkedin.com/in/matthew-barty/" target='_blank'>
                <span className="font-bold text-lg mx-2">Matthew Barty</span>
                <span className="text-sm mx-2 hidden md:block">UX Engineer || Creative Technologist</span>
              </a>
            </div>
            <div className="flex">
              <button className="mx-2 py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-lg" onClick={handlePdfOpen}>
                <div className="flex items-center text-white">
                  <FontAwesomeIcon icon={faFileArrowDown} />
                  <div className="ml-2">Resume</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Banner;
