import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b bg-[#003751] z-10 opacity-80"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2025/03/13/264433_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div> */}
      <div className='absolute h-screen w-full flex justify-center items-center text-7xl font-bold z-20'>
      <div className='flex flex-col text-8xl text-white'>

       <span>Reliable</span> 
       <span>transport</span> 
       <span>streamline</span> 
       <span>Logistics.</span> 
      </div>
        {/* <p className='text-white'> streamline logistics.</p>  */}
      </div>
    </div>
  )
}

export default Hero