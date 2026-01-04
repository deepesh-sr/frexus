import React from 'react'
import { FaUser, FaComment } from 'react-icons/fa'

const Section6 = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
      date: '08',
      month: 'OCT',
      category: 'SHIPPING',
      title: 'If your business needs shipping, we can help!',
      author: 'Admin',
      comments: 0
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
      date: '08',
      month: 'OCT',
      category: 'TRANSPORT',
      title: 'We carefully handle the valueable goods.',
      author: 'Admin',
      comments: 0
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1566594799893-f0ae1717019d?w=1200&q=80',
      date: '08',
      month: 'OCT',
      category: 'LOGISTIC',
      title: 'Why can we love our logistic task so much?',
      author: 'Admin',
      comments: 0
    }
  ]

  return (
    <div className='w-full bg-white py-24'>
      <div className='max-w-7xl mx-auto px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <button className='bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg mb-8'>
            OUR BLOG
          </button>
          <h2 className='text-6xl font-bold text-[#003751] leading-tight'>
            Global transport and logistics insights<span className='text-orange-500'>.</span>
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group'
            >
              {/* Image Container */}
              <div className='relative overflow-hidden'>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className='w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500'
                />
                {/* Date Badge */}
                <div className='absolute bottom-0 left-0 bg-orange-500 text-white px-6 py-4 rounded-tr-2xl'>
                  <div className='text-4xl font-bold leading-none'>{post.date}</div>
                  <div className='text-sm font-semibold mt-1'>{post.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className='p-8'>
                {/* Category */}
                <div className='text-gray-500 text-sm font-semibold tracking-wider mb-4'>
                  {post.category}
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-[#003751] leading-tight mb-6 group-hover:text-orange-500 transition-colors duration-300'>
                  {post.title}
                </h3>

                {/* Footer - Author and Comments */}
                <div className='flex items-center justify-between pt-6 border-t border-gray-200'>
                  <div className='flex items-center gap-2 text-gray-500'>
                    <FaUser className='text-sm' />
                    <span className='text-sm font-medium'>{post.author}</span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-500'>
                    <FaComment className='text-sm' />
                    <span className='text-sm font-medium'>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section6
