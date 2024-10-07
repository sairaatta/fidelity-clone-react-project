import React from 'react'
import ContactPic from '/src/assets/images/contactPic.png';

const Careers = () => {
    return (
        <>
            <section>
                <div className='mx-auto p-8 sm:p-10 md:p-16 max-w-full sm:w-10/12 md:w-8/12'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-gray-500 text-center leading-normal'>
                        Do you have the <span className='text-red-700'> X factor? </span> Check back soon for any new open positions to become part of our family of professional experts that are leading change and making our customers smile.
                    </h1>
                </div>


                <section className='flex flex-col lg:flex-row justify-between items-start p-4 lg:p-10'>
                    <div className='lg:ml-28 mt-0 lg:mt-20 w-full lg:w-11/12'>
                        <h1 className='text-gray-600 mb-5 text-3xl lg:text-5xl font-bold text-center lg:text-left'>Connect with us </h1>
                        <p className='lg:w-3/5 mb-8 lg:mb-10 text-gray-600 leading-7 text-center lg:text-left'>
                            If you’d like to find out more, why not call us now on 0800 840 6800 or simply fill in our contact form below and we’ll be in touch.
                        </p>
                        <form action='submit' className='w-full flex flex-col items-center lg:items-start'>
                            <div className='flex flex-col lg:flex-row w-full lg:w-11/12'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 outline-none placeholder-gray-500'
                                />
                                <input
                                    type='text'
                                    placeholder='Company'
                                    className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 lg:ml-4 outline-none placeholder-gray-500'
                                />
                            </div>

                            <div className='flex flex-col lg:flex-row w-full lg:w-11/12'>
                                <input
                                    type='email'
                                    placeholder='E-mail '
                                    className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 outline-none placeholder-gray-500'
                                />
                                <input
                                    type='tel'
                                    placeholder='Contact Number'
                                    className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 lg:ml-4 outline-none placeholder-gray-500'
                                />
                            </div>

                            <textarea
                                placeholder='Message'
                                className='border-2 border-gray-400 p-3 w-full lg:w-11/12 rounded-lg text-start outline-none mb-8 placeholder-gray-500'
                            />
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="privacy-policy"
                                    className="mr-2"
                                />

                                <div className=''>
                                    <label htmlFor="privacy-policy" className="text-gray-500  ">
                                        I agree to and have read Fidelity's privacy policy.
                                    </label>
                                </div>


                            </div>

                            <div className='w-full lg:w-24 '>
                                <button className='bg-red-700 rounded-lg text-white text-base w-full py-3 hover:bg-blue-900'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className='w-full lg:w-11/12 flex flex-col justify-center items-center mt-0 lg:mt-24'>
                        <img
                            src={ContactPic}
                            alt="Contact Us"
                            className='w-full lg:w-4/5 h-auto object-cover'
                        />

                    </div>

                </section>
            </section>
        </>
    )
}

export default Careers