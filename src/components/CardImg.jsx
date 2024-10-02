import React from 'react'

export default function CardImg({src}) {
  return (
    <div className='w-1/2 h-[300px] flex justify-center items-center max-ml:w-full border-2  '>
      {/* <img src={imgsrc} className='w-[90%] h-full rounded max-ml:w-full' alt="" /> */}
      <iframe src={src} title="W3Schools Free Online Web Tutorials" width="90%" height="90%"></iframe>
    </div>
  )
}
