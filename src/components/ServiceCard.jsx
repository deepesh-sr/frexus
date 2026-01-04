import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ number, title, description, image, isCenter = true }) => {
  return (
    <>
    <div className='h-screen'>

    <div className='relative w-full h-3/4 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500'>
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className='absolute inset-0 w-full h-full object-cover'
        />
      
      {/* Content Card - Only show when centered */}
      {isCenter && (
          <div className='absolute top-20 right-10 bg-white rounded-2xl shadow-xl w-[500px] p-12 transition-all duration-500'>
          {/* Orange Badge */}
          <div className='absolute -top-6 right-12 bg-orange-500 text-white text-5xl font-bold w-28 h-28 rounded-2xl flex items-center justify-center shadow-lg'>
            {number}
          </div>
          
          {/* Content */}
          <div className='mt-8'>
            <h2 className='text-5xl font-bold text-[#003751] mb-6'>
              {title}
            </h2>
            
            <p className='text-gray-600 text-lg leading-relaxed mb-8'>
              {description}
            </p>
            
            {/* Learn More Link */}
            <a 
              href="#" 
              className='inline-flex items-center gap-3 text-[#003751] font-semibold text-lg hover:text-orange-500 transition-colors duration-300 group'
              >
              Learn More 
              <FaArrowRight className='group-hover:translate-x-2 transition-transform duration-300' />
            </a>
          </div>
        </div>
      )}
      </div>
    </div>
      </>
  )
}

export default ServiceCard
