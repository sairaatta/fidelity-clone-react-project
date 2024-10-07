import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ContactPic from '/src/assets/images/contactPic.png';
import { FaCheck } from 'react-icons/fa';

const TermsAndConditions = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-full overflow-hidden">
                <div className='flex flex-col items-center justify-center max-w-screen-lg mx-auto mt-20'>
                    <h1 className="mb-4 text-3xl text-gray-600 font-semibold text-center">Please make your selection:</h1>
                    <ul className='text-red-700 text-lg font-semibold mx-auto leading-7 text-center'>
                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">
                                Fidelity Group Main Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>

                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">Broadband Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>

                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">Broadband Router Protect Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>

                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">IoT Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>

                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">Mobile Equipment Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>

                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">Mobile Leasing Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>

                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">Rental Leasing Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>

                        <li className='hover:underline hover:scale-95 transition-transform transform duration-300 ease-in-out'>
                            <a href="#" className="inline-flex items-center space-x-2">VoIP Terms
                                <span className='ml-1'>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-2 w-full max-w-screen-lg mx-auto">
                    <section className='flex flex-col lg:flex-row justify-between items-start p-6 lg:p-10'>
                        <div className='lg:ml-2 mt-2 lg:mt-20 w-full lg:w-11/12'>
                            <h1 className='text-gray-600 mb-5 text-3xl lg:text-5xl font-bold text-center lg:text-left'>Connect with us </h1>
                            <p className='lg:w-3/5 mb-8 lg:mb-10 text-gray-600 leading-7 text-center lg:text-left'>
                                If you’d like to find out more, why not call us now on 0800 840 6800 or simply fill in our contact form below and we’ll be in touch.                            </p>
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
                                    <label htmlFor="privacy-policy" className="text-gray-700">
                                        I agree to and have read Fidelity's privacy policy.
                                    </label>
                                </div>

                                <div className='w-full lg:w-24 '>
                                    <button className='bg-red-700 rounded-lg text-white text-base w-full py-3 hover:bg-blue-900'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>


                        <div className='w-full lg:w-11/12 flex flex-col justify-center items-center mt-10 lg:mt-40'>
                            <img
                                src={ContactPic}
                                alt="Contact Us"
                                className='w-full lg:w-4/5 h-auto object-cover'
                            />
                            <div className='mt-6 text-center'>
                                <h1 className='text-gray-500 text-2xl font-bold mb-3'>Prefer to pick up the phone and talk to us?</h1>
                                <p className='text-gray-500'>
                                    <span className='text-gray-500 text-base font-medium'>Call 0800 840 6800</span> to talk to us about any of our services or partnerships.
                                </p>
                            </div>
                        </div>

                    </section>
                </div>
            </section>
        </>
    )
}

export default TermsAndConditions;
