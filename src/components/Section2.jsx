import React from 'react'

const Section2 = () => {
    return (
        <div>
            <div className='h-screen w-full bg-white flex justify-between items-center p-10'>
                <div className='flex justify-start items-start'>

                    <div>
                        <img src="https://frexuswp.websitelayout.net/wp-content/uploads/2025/09/about-03.jpg" alt="" className='rounded-lg' />
                    </div>
                    <div className='flex flex-col justify-between items-start p-10 gap-6'>
                        <div>
                            <button className='bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition'>
                                ABOUT
                            </button>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-gray-900 leading-tight'>
                                Reliable transport <br />smart logistics <br />solutions.
                            </p>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-6'>
                            <div className='flex gap-4 items-start'>
                                <div className='bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                                    01
                                </div>
                                <div>
                                    <h3 className='font-bold text-2xl text-gray-900 mb-2'>
                                        Real-Time Tracking
                                    </h3>
                                    <p className='text-gray-600 text-base leading-relaxed'>
                                        Real-time tracking is a technology used in transport and logistics to monitor the location and status of goods vehicles.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <div className='bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                                    02
                                </div>
                                <div>
                                    <h3 className='font-bold text-2xl text-gray-900 mb-2'>
                                        Efficient Delivery
                                    </h3>
                                    <p className='text-gray-600 text-base leading-relaxed'>
                                        Real-time tracking is a technology used in transport and logistics to monitor the location and status of goods vehicles.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <div className='bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                                    03
                                </div>
                                <div>
                                    <h3 className='font-bold text-2xl text-gray-900 mb-2'>
                                        Secure Storage
                                    </h3>
                                    <p className='text-gray-600 text-base leading-relaxed'>
                                        Real-time tracking is a technology used in transport and logistics to monitor the location and status of goods vehicles.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section2