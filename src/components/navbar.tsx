import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <div className='absolute z-10 text-white w-full'>
      <nav className=" container flex justify-between items-center mx-auto ">
      <Link href={"/"} >
      <h1 className='font-bold text-xl'>Home</h1>
      </Link>
      <div className="flex gap-2">
        <Link href={"/performance"}>Performance</Link>
        <Link href={"/reliability"} >Reliability</Link>
      </div>
    </nav>
  </div>
  )
}

export default Navbar