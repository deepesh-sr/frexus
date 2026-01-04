import React from 'react'
import { FaUserShield, FaMoneyBillWave, FaTruck } from 'react-icons/fa'

const Section4 = () => {
  const features = [
    {
      icon: <FaUserShield className='text-5xl' />,
      title: 'Customer-First Approach',
      description: 'First we prioritize customer needs.'
    },
    {
      icon: <FaMoneyBillWave className='text-5xl' />,
      title: 'Cost-Effective Solutions',
      description: 'Our cost-effective logistics solutions help.'
    },
    {
      icon: <FaTruck className='text-5xl' />,
      title: 'Flexible Transport Options',
      description: 'We offer flexible transport options tailored.'
    }
  ]

  return (
    <div className='w-full bg-white py-32'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='grid grid-cols-2 gap-20 items-center'>
          {/* Left Side - Text Content */}
          <div>
            {/* Orange Button */}
            <button className='bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg mb-8'>
              WHY CHOOSE US
            </button>

            {/* Main Heading */}
            <h2 className='text-7xl font-bold text-[#003751] leading-tight mb-8'>
              The smart choice in trusted transport<span className='text-orange-500'>.</span>
            </h2>

            {/* Description */}
            <p className='text-gray-500 text-xl leading-relaxed mb-12'>
              We are dedicated to delivering seamless, reliable, and efficient transport and logistics solutions tailored to meet the evolving needs of businesses and individuals.
            </p>

            {/* Profile Images and Text */}
            <div className='flex items-center gap-4'>
              <div className='flex -space-x-4'>
                <img 
                  src='https://randomuser.me/api/portraits/men/32.jpg' 
                  alt='Expert 1' 
                  className='w-16 h-16 rounded-full border-4 border-white'
                />
                <img 
                  src='https://randomuser.me/api/portraits/women/44.jpg' 
                  alt='Expert 2' 
                  className='w-16 h-16 rounded-full border-4 border-white'
                />
              </div>
              <p className='text-[#003751] text-lg font-medium underline decoration-2 underline-offset-4'>
                Web code from experts.
              </p>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className='space-y-8'>
            {features.map((feature, index) => (
              <div 
                key={index}
                className='flex items-start gap-6 p-8 bg-white rounded-2xl border-l-4 border-transparent hover:border-orange-500 hover:shadow-xl transition-all duration-300'
              >
                {/* Icon */}
                <div className='text-orange-500 flex-shrink-0'>
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className='text-2xl font-bold text-[#003751] mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-500 text-lg leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
