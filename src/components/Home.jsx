import React from "react";
import arrow from "../assets/arrow.svg";
import avatar from "../assets/ReadyPlayerMe-Avatar.png";

export default function Home({id}) {
  return (
    <>
      <div className="flex w-full h-[85vh] justify-center items-center max-ml:h-screen max-ml:flex-col" id={id}>
        <div className="w-1/2 h-full flex items-center justify-center max-ml:w-full ">
          <img
            src={avatar}
            style={{
              width: "50vh",
              height: "50vh",
              border: "none",
              borderRadius: "50%",
              boxShadow: "0px 0px 60px #ba79d1",
              objectFit:"cover",
              objectPosition:"center"
            }}
            alt="Avatar"
            className="max-ml:!w-[40vh] max-ml:!h-[40vh]"
          />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center gap-14 max-ml:p-5 relative flex-col p-2 max-ml:w-full">
          <img src={arrow} className="absolute top-[18%] -left-[30%] w-60 max-ml:hidden" />
          <h1 className=" text-4xl font-preahvihear absolute top-[25%] -left-5 max-ml:top-10 max-ml:left-5">
            Hello I AM <span className="text-purple-400 ">JENIS</span>
          </h1>
          <h1 className=" text-6xl font-preahvihear leading-tight mt-10 max-ml:mt-2 max-ml:text-2xl">Coding <span className="text-purple-400">Dreams</span> into Digital Masterpieces.. </h1>
          <h1 className=" text-xl  font-preahvihear pr-20 -mt-10 max-ml:text-sm">Bringing your unique ideas to life with precision and creativity.</h1>
        </div>
      </div>
    </>
  );
}
