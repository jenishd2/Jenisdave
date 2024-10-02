import React from 'react'
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
import tailwind from "../assets/tailwind.svg"
import appwrite from "../assets/appwrite.svg"

import { Link } from 'react-router-dom'
export default function Skills({id}) {
  return (
    <div className='w-[90%] mx-auto relative h-screen flex justify-center gap-12 items-center flex-col max-ml:w-full max-ml:p-2 max-ml:h-full' id={id}>
      <h1 className='text-4xl w-[90%] text-center font-preahvihear max-ml:w-full max-ml:text-2xl'>
      The skills, tools, and technologies I excel in, along with my commitment to <span className='text-purple-400'>Learning</span> new ones, will ensure outstanding results for you.   </h1> 
      <div className='flex gap-10 max-ml:flex-wrap max-ml:justify-center'>
        <Link to="https://developer.mozilla.org/en-US/docs/Web/javascript" target='_blank' className='cursor-pointer'><img src={js} alt="" className='hover:scale-125 transition-all' /></Link>
        <Link to="https://tailwindcss.com" target='_blank' className='cursor-pointer'><img src={tailwind} alt="" className='hover:scale-125 transition-all' /></Link>
        <Link to="https://react.dev" target='_blank' className='cursor-pointer'><img src={react} alt="" className='hover:scale-125 transition-all' /></Link>
        <Link to="https://nodejs.org" target='_blank' className='cursor-pointer'><img src={nodejs} alt="" className='hover:scale-125 transition-all' /></Link>
        <Link to="https://appwrite.io/" target='_blank' className='cursor-pointer'><img src={appwrite} alt="" className='hover:scale-125 transition-all' /></Link>
      </div>
    </div>
  )
}
