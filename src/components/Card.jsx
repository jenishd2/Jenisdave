import React from "react";
import github from "../assets/github.svg";
import rightarrow from "../assets/rightarrow.svg";
import { Link } from "react-router-dom";
export default function Card({
  title,
  description,
  previewlink,
  repolink,
  classname
}) {
  return (
    <div className={`mx-auto max-w-md h-fit overflow-hidden rounded-lg dark:bg-white/40 bg-gray-500/40 backdrop-blur-xl shadow ${classname} `}>
      <div className="p-4">
        <h3 className="text-xl font-medium text-purple-400 font-preahvihear">{title}</h3>
        <p className="mt-1 text-white-500 font-preahvihear">{description}</p>
        <div className="mt-4 flex gap-2">
          <Link to={repolink} target="_blank" className="">
            <img src={github} className="w-8 h-full object-cover hover:scale-125 transition-all" alt="" /> 
          </Link>
          <Link to={previewlink} target="_blank" className="flex items-center hover:scale-125 transition-all">
            <p className="text-xl font-preahvihear">Live</p>
            <img src={rightarrow} className="w-8 h-full object-cover " alt="" /> 
          </Link>
        </div>
      </div>
    </div>
  );
}
