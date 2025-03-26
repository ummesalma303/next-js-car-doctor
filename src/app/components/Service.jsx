import Image from 'next/image'
import React from 'react'

export default function Service({service}) {
  return (
    <div>
     
        <div key={service?._id}>
             <Image src={service?.img} width={107} height={87} alt="image"/>
           {console.log(service.img)}
        </div>
   
    </div>
  )
}
