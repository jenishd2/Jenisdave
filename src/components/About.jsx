import React from "react";
import download from "../assets/download.svg"
import { Link } from "react-router-dom";
export default function About({id}) {
  return (
    <div className="flex w-[90%] mx-auto p-10 max-ml:px-6  h-[70vh] relative justify-center flex-col items-left gap-10 max-ml:w-full max-ml:h-full max-ml:items-center" id={id}>
        <h1 className="text-purple-400 rounded-full text-center w-60 font-preahvihear absolute top-10 max-ml:top-0 text-4xl left-[0%]">
        About Me
      </h1>
      <h1 className=" text-5xl font-preahvihear max-ml:text-3xl max-ml:mt-5">
        I'm a full stack developer (React.js & Node.js) .|
      </h1>
      <h1 className="text-2xl mt-5 font-preahvihear w-[90%] max-ml:text-center max-ml:text-xl">
        A self-taught Developer, a passionate web developer dedicated to
        transforming innovative ideas into stunning, functional websites. With a
        keen eye for design and a love for clean code, I build digital
        experiences that not only look great but perform flawlessly.
      </h1>
      <Link to="https://drive.google.com/file/d/18ctAlBk5ac3jFViQAHfYTTcyj5BAuO9l/view?usp=sharing" target="_blank">
      <button className="cursor-pointer group relative flex gap-1.5  border-2 w-[14rem] px-5 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md ">
        <img src={download} alt="download icon" />
        Download Resume
        <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
          Download
        </div>
      </button>
      </Link>
    </div>
  );
}
