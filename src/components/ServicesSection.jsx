"use client"
import Image from "next/image"
// import React, { useEffect } from 'react'

import { useEffect, useState } from "react"
import Service from "./Service"

export default  function ServicesSection() {
    const [services,setServices] = useState([])
   useEffect(() => {
    
         fetch('/services.json')
       .then(res => res.json())
       .then(data=>{
           setServices(data)
        //    console.log(data)
       })
       .catch(err => console.log(err))
   
     return 
   }, [setServices])
   
        // 
    
  return (
    <div className="grid grid-cols-3">
     {
      services.map(service => <Service key={service._id} service={service} />)
     }
    </div>
  )
}
