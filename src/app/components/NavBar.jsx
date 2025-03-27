// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import Image from 'next/image';

export default function NavBar() {
    const navItems = <>
     <li><Link href={"/"}>Home</Link></li>
     <li><Link href="/pages/about">About</Link></li>
     <li><Link href={"/pages/services"}>Services</Link></li>
    </>
  return (
    <div className='sticky top-0'>
      <div className="navbar bg-base-100 px-12 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <Image src={'/assets/logo.svg'} width={87} height={55}/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
  <CiShoppingBasket/>
  <IoMdSearch />
    <a className="btn">Appointment</a>
  </div>
</div>
    </div>
  )
}
