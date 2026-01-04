import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaUser } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
  }

  return (
    <footer className='w-full bg-[#1e3a4a]'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto px-8 py-16'>
        <div className='grid grid-cols-3 gap-16'>
          {/* About Frexus */}
          <div>
            <h3 className='text-white text-3xl font-bold mb-6'>About Frexus</h3>
            <p className='text-gray-300 text-lg leading-relaxed mb-8'>
              We have been the most trusted transport partner for 25+ years.
            </p>
            
            {/* Social Media Icons */}
            <div className='flex gap-4'>
              <a 
                href='#' 
                className='w-14 h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaFacebookF className='text-xl' />
              </a>
              <a 
                href='#' 
                className='w-14 h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaTwitter className='text-xl' />
              </a>
              <a 
                href='#' 
                className='w-14 h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaLinkedinIn className='text-xl' />
              </a>
              <a 
                href='#' 
                className='w-14 h-14 rounded-full bg-white hover:bg-orange-500 flex items-center justify-center text-[#1e3a4a] hover:text-white transition-all duration-300'
              >
                <FaInstagram className='text-xl' />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className='text-white text-3xl font-bold mb-6'>Contact Us</h3>
            <div className='space-y-4 text-gray-300 text-lg'>
              <div>
                <span className='font-semibold text-white'>ADDRESS:</span>
                <span className='ml-2'>66 Guild Street 512B, Great North Town.</span>
              </div>
              <div>
                <span className='font-semibold text-white'>MAIL:</span>
                <span className='ml-2'>addyour@email</span>
              </div>
              <div>
                <span className='font-semibold text-white'>PHONE:</span>
                <span className='ml-2'>(+44) 123 456 789</span>
              </div>
              <div>
                <span className='font-semibold text-white'>FAX ID:</span>
                <span className='ml-2'>(+1) 523-567-987</span>
              </div>
            </div>
          </div>

          {/* Our Newsletter */}
          <div>
            <h3 className='text-white text-3xl font-bold mb-6'>Our Newsletter</h3>
            <form onSubmit={handleSubscribe} className='space-y-4'>
              {/* Email Input */}
              <div className='relative'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Subscribe with us'
                  className='w-full px-6 py-4 rounded-full bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none pr-14'
                  required
                />
                <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                  <FaUser className='text-gray-400 text-xl' />
                </div>
              </div>

              {/* Subscribe Button */}
              <button
                type='submit'
                className='w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-full transition-colors duration-300 uppercase tracking-wide'
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-600'></div>

      {/* Bottom Section */}
      <div className='max-w-7xl mx-auto px-8 py-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-3'>
              {/* Logo Icon */}
              <div className='relative'>
                <div className='w-16 h-16 bg-orange-500 rounded-tl-2xl rounded-br-2xl transform rotate-45'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-tl-xl rounded-br-xl transform rotate-45'></div>
              </div>
              {/* Logo Text */}
              <div>
                <div className='text-white text-3xl font-bold uppercase tracking-tight'>FREXUS</div>
                <div className='text-white text-sm font-semibold tracking-wider'>FAST & RELIABLE</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='flex items-center gap-12'>
            <a href='#about' className='text-white text-lg font-medium hover:text-orange-500 transition-colors duration-300'>
              About Us
            </a>
            <a href='#services' className='text-white text-lg font-medium hover:text-orange-500 transition-colors duration-300'>
              Services
            </a>
            <a href='#contact' className='text-white text-lg font-medium hover:text-orange-500 transition-colors duration-300'>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
