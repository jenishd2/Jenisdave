import React from "react";
import Card from "./Card";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import rightarrow from "../assets/rightarrow.svg"
import { Link } from "react-router-dom";
import CardImg from "./CardImg";
export default function Projects({id}) {
  return (
    <div className="flex w-[90%] mx-auto h-[200vh] relative justify-evenly gap-20  max-ml:p-5 items-center flex-col max-ml:w-full max-ml:h-fit" id={id}>
      <h1 className="text-purple-400 rounded-full text-center w-52 font-preahvihear absolute top-10 max-ml:top-0 text-4xl left-[0%]">
        Projects
      </h1>
      <div className="flex items-center justify-center w-full h-fit max-ml:flex-col gap-4 max-ml:mt-10 ">
        <Card
        classname=""
          title="Fableflare Blog Website"
          description="Developed a comprehensive blog website incorporating full-stack development with a focus on frontend and backend integration."
          repolink="https://github.com/jenishd2/FableFlare"
          previewlink="https://fable-flare.vercel.app/"
        />
        <CardImg src="https://fable-flare.vercel.app/" />
      </div>
      <div className="flex items-center justify-center w-full h-fit max-ml:flex-col-reverse gap-4 ">
        <CardImg src="https://todos-react-mocha.vercel.app/" />
        <Card
        classname=""
          title="Todo With React"
          description="I developed a comprehensive To-Do List application that allows users to efficiently manage their tasks. The application features functionalities such as adding, deleting, updating, and marking tasks as completed."
          repolink="https://github.com/jenishd2/Todos-react"
          previewlink="https://todos-react-mocha.vercel.app/"
        />
      </div>
      <div className="flex items-center justify-center w-full h-fit max-ml:flex-col gap-4">
        <Card
        classname=""
          title="Significo Clone Website"
          description="This project emphasizes smooth transitions, interactive elements, and a visually engaging user interface. By integrating Shery.js with HTML, CSS, and JavaScript."
          repolink="https://github.com/jenishd2/significo-clone-"
          previewlink="https://significo-clone-six.vercel.app/"
        />
        <CardImg src="https://significo-clone-six.vercel.app/"/>
      </div>
      <Link to="https://github.com/jenishd2/" target="_blank"><button className="cursor-pointer group relative flex gap-1.5  border-2 w-[12rem] px-5 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md ">
        More Projects
        <img src={rightarrow} alt="download icon" className="w-6" />
        <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
        More Projects
        </div>
      </button>
      </Link>
    </div>
  );
}
