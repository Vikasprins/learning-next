import Image from 'next/image'
import React from 'react'
import gymboy from "public/gymboy.webp"

const Hero = () => {
  return (
    <div className='relative h-screen'>
        <div className='absolute inset-0 -z-10'>
        <Image 
        src={gymboy}
        fill
        alt='image'
        style={{objectFit:"cover"}}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900'/>
        </div>
        <div className='flex items-center justify-center pt-64'>
            <h1 className='font-bold text-6xl text-white'>Professional gym trainer</h1>
        </div>
    </div>
  )
}

export default Hero