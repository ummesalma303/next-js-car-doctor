import Image from 'next/image'
import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowLeft } from "react-icons/fa";

export default function Banner() {
  return (
    // <div className='bg-[url(/assets/images/banner/banner.jpg)] h-screen'>

<div className=" h-[85vh] w-11/12 mx-auto rounded-xl bg-cover bg-center bg-[url('/assets/images/banner/banner.jpg')] px-14">

<div className="flex items-center h-full ">
{/* left site content */}
<div className="text-white w-1/3 space-y-4">

<h2 className='text-4xl font-bold'>Affordable Price For Car Servicing</h2>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<button className='bg-[#FF3811] px-3 py-1 mr-3'>Discover More</button>
<button className='border-[1px] border-white px-3 py-1'>Latest Project</button>
   </div>
</div>
  

{/* right site content */}
 <div className="flex space-x-3 justify-end items-end -mt-16">
 <FaArrowAltCircleLeft  className='bg-white  rounded-full ' size={33}/>
 <FaArrowAltCircleRight  className='bg-white text-[#FF3811] rounded-full ' size={33}/>
 </div>
</div>
  )
}
