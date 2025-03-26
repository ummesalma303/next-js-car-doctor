import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    // <div className='bg-[url(/assets/images/banner/banner.jpg)] h-screen'>
<div className="">
<div className=" h-[90vh] w-11/12 mx-auto rounded-xl bg-cover bg-center bg-[url('/assets/images/banner/banner.jpg')]">
      
      </div>
      {/* <div className="border-2 border-red-400">
        <Image src={'/assets/logo.svg'} width={107} height={87}/>
  <Image className='bg-gray-700 h-40' src={"/assets/images/banner/banner.jpg"} width={400} height={200} alt="" />

      </div> */}
</div>
  )
}
