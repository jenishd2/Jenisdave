import React from "react";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link"

export default function Contact({id}) {
  return (
    <div className="flex w-[90%] mx-auto h-[60vh] relative justify-evenly items-left flex-col max-ml:w-full max-ml:h-[70vh] max-ml:p-3" id={id}> 
      <h1 className="text-purple-400 rounded-full text-center w-52 font-preahvihear absolute top-10 text-4xl left-[0%]">
        Contacts
      </h1>
      <div className="p-3 max-ml:mt-4">
        <h1 className="text-left w-[80%] text-xl font-preahvihear max-ml:text-lg max-ml:w-[90%]">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </h1>
        <h1 className="text-left w-[80%] text-xl font-preahvihear mt-10 max-ml:mt-5">workwithjenish21@gmail.com</h1>
      </div>
      <div className=" flex gap-5 w-[90%] justify-between">
        <div className="flex gap-5 w-fit">
        <Link to="https://github.com/jenishd2" target="_blank"><i class="ri-github-line text-4xl"></i></Link>
        <Link to="https://www.linkedin.com/in/jenishdave321654" target="_blank"><i class="ri-linkedin-box-line text-4xl"></i></Link>
        <Link to="https://instagram.com/jenis_jd" target="_blank"><i class="ri-instagram-line text-4xl"></i></Link>
        <Link to="https://discord.com/channels/jenish_official" target="_blank"><i class="ri-discord-line text-4xl"></i></Link>
        </div>
        <div><NavLink className="" smooth to="#home"><i className="ri-arrow-up-s-line text-4xl border-2 rounded"></i></NavLink></div>
      </div>
    </div>
  );
}
