import React from 'react'
import payment1 from '/src/assets/images/payment1.png';
import { Link } from 'react-router-dom';
import pay from '/src/assets/images/pay.png';
import pay2 from '/src/assets/images/pay2.png';
import pay3 from '/src/assets/images/pay3.png';
import { FaArrowRight } from 'react-icons/fa';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ContactPic from '/src/assets/images/contactPic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import image1 from '/src/assets/images/image1.png';
import image2 from '/src/assets/images/image2.png';

import pay4 from '/src/assets/images/pay4.jpg';
import pay5 from '/src/assets/images/pay5.png';

const Payments = () => {
    return (
        <>
            <section>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between p-8'>
                    <div className='lg:w-1/2 text-left mb-8 lg:mb-0 ml-32 '>
                        <h1 className='text-3xl font-bold text-gray-800 mb-4'>PAYMENT - SOLUTIONS - AS - A- SERVICE</h1>
                        <h1 className='text-xl font-semibold text-gray-700 mb-4'>Comprehensive Payments Solutions for Businesses of All Sizes:</h1>
                        <h1 className='text-xl font-semibold text-gray-700 mb-4'>Card Machines, ePOS Systems, and more</h1>
                        <button className='bg-red-700 text-white font-semibold py-4 px-8 rounded-md hover:-translate-y-1 transition-transform duration-300 hover:bg-blue-900 mt-14'>
                            Get a Quote
                        </button>
                    </div>

                    <div className='lg:w-1/2 mr-28'>
                        <img src={payment1} alt="Payment Solutions" className='w-full h-auto' />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center gap-8 p-8'>
                    <div className='bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-full md:w-9/12 lg:w-3/12 mx-auto hover:-translate-y-1 duration-300'>
                        <img src={pay} alt="Accept payments" className='w-24 h-24 mb-4 mx-auto' />
                        <h1 className='text-xl font-bold mb-2'>Accept payments</h1>
                        <p className='text-gray-700 mb-4'>Anywhere, anytime with our adaptable fixed, mobile, and portable card machines!</p>
                        <button className='bg-transparent text-red-700 font-semibold py-2 px-4 rounded-md hover:-translate-y-1 hover:text-blue-900 duration-300 transition inline-flex items-center justify-center'>
                            Get a Quote <FaArrowRight className='ml-2' />
                        </button>
                    </div>

                    <div className='bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-full md:w-9/12 lg:w-3/12 mx-auto hover:-translate-y-1 duration-300'>
                        <img src={pay2} alt="EPOS" className='w-24 h-24 mb-4 mx-auto' />
                        <h1 className='text-xl font-bold mb-2'>EPOS</h1>
                        <p className='text-gray-700 mb-4'>Elevate your customer experience with our feature-packed EPOS.</p>
                        <button className='bg-transparent text-red-700 font-semibold py-2 px-4 rounded-md hover:-translate-y-1 hover:text-blue-900 duration-300 transition inline-flex items-center justify-center'>
                            Get a Quote <FaArrowRight className='ml-2' />
                        </button>
                    </div>

                    <div className='bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-full md:w-9/12 lg:w-3/12 mx-auto hover:-translate-y-1 duration-300'>
                        <img src={pay3} alt="E-Commerce" className='w-24 h-24 mb-4 mx-auto' />
                        <h1 className='text-xl font-bold mb-2'>E-Commerce</h1>
                        <p className='text-gray-700 mb-4'>Boost your online business with a secure and efficient ecommerce online payment system.</p>
                        <button className='bg-transparent text-red-700 font-semibold py-2 px-4 rounded-md hover:-translate-y-1 hover:text-blue-900 duration-300 transition inline-flex items-center justify-center'>
                            Get a Quote <FaArrowRight className='ml-2' />
                        </button>
                    </div>
                </div>

                <div className='mt-8'>
                    <h1 className='text-center text-gray-500 font-medium text-lg mx-auto'>Payment Solutions: Card Machines | Online Payment Gateways | EPOS | E-Commerce</h1>
                    <h1 className='text-center text-gray-600 font-bold text-3xl mx-auto'>UK Merchant <span> Payment Solutions </span> Specialists</h1>

                    <div className="flex flex-col md:flex-row justify-between items-start p-4">
                        <div className="w-full md:w-1/2 px-4 md:px-32 mt-8">
                            <h1 className="text-xl font-bold mb-4 text-gray-600">Improve efficiency and make savings.</h1>
                            <ul className="list-none space-y-2">
                                <li><a href="#" className="text-red-700 hover:underline">Pay by Link Solutions</a></li>
                                <li><a href="#" className="text-red-700 hover:underline">Virtual Terminal Solutions</a></li>
                                <li><a href="#" className="text-red-700 hover:underline">Credit Card Terminals</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 px-4 md:px-32 mt-8">
                            <h1 className="text-xl font-bold mb-4 text-gray-600">Unmatched <span className="text-red-700">Merchant Services</span>: Choice and reliable payment solutions with Fidelity Group</h1>
                            <p className="mb-4 text-gray-600">Discover the Fidelity Group difference in payment solutions as we empower our merchant partners with a range of card, ePOS, and other payment solution choices.</p>
                            <p className="mb-6 text-gray-600">By offering a diverse selection of products and services, we ensure the provision of reliable payment solutions that add value to the entire value chain – banks, our partner network, and, most importantly, the end customers.</p>
                            <button className="bg-red-700 text-white px-8 py-4 rounded hover:bg-blue-900 transition-transform duration-300 hover:-translate-y-1">Get a Quote</button>
                        </div>
                    </div>
                </div>


                <div className='bg-gray-200 p-28'>
                    <h1 className='text-center text-gray-600 text-2xl font-bold mb-12'>
                        We can help your business <span className='text-red-700'>save money</span> on rates. Book a review today!
                    </h1>
                    <div className='flex justify-center space-x-4'>
                        <button className='bg-red-700 text-white  px-8 py-4 rounded hover:bg-blue-900 transition duration-300 hover:-translate-y-1'>Request Review</button>
                        <button className='bg-blue-900 text-white px-10 py-4 rounded hover:bg-blue-900 transition duration-300 hover:-translate-y-1'>Call us Now</button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center py-10 px-4 md:px-32 space-y-8 md:space-y-0 md:space-x-8'>
                    <div className='md:w-1/3'>
                        <h3 className='text-gray-400 font-bold text-lg mb-6'>IN THE MEDIA</h3>
                        <h1 className='text-gray-500 font-bold text-5xl mb-8'>Press releases,<span className='text-red-700'>  blogs</span> and videos</h1>
                        <ul className='text-red-700 font-bold space-y-5'>
                            {[
                                '4 Key Factors to Consider When Choosing A Payment Option for Your Business',
                                'The Evolution of Merchant Payments',
                                'What is EPOS? | Electronic Point of Sale | Fidelity Group UK',
                                'What are continuous payment authorities (CPAS)',
                                'Using EPOS to improve customer retention'
                            ].map((item, index) => (
                                <li key={index} className='flex items-center hover:cursor-pointer transition-all'>
                                    <span className='flex items-center group'>
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="mr-4 transition-transform duration-300 group-hover:-translate-y-1"
                                        />
                                        <span className='transition-opacity duration-300'>
                                            {item}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='md:w-1/3 flex flex-col items-center hover:-translate-y-1 transition-transform duration-300'>
                        <img src={pay4} alt="" className='rounded-lg mb-5 w-full' />
                        <div className='items-start ml-2 mb-2'>
                            <FontAwesomeIcon icon={faCalendar} className='text-gray-400' />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-gray-500 font-bold text-xl sm:text-2xl mt-4'>
                                <Link className='hover:text-red-700 transition-transform duration-200'>4 Key Factors to Consider When Choosing A Payment Option for Your Business</Link>
                            </h1>

                            <button className='mt-5 py-2 px-4 shadow-lg shadow-gray-400 text-red-700 flex items-center justify-center hover:bg-red-700 hover:text-white transition duration-300'>
                                Read more
                                <span className='ml-2'>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </button>
                        </div>
                    </div>


                    <div className='md:w-1/3 flex flex-col items-center hover:-translate-y-1 transition-transform duration-300'>
                        <img src={pay5} alt="" className='rounded-lg mb-5 w-full' />
                        <div className='flex items-center ml-2 mb-2'>
                            <FontAwesomeIcon icon={faCalendar} className='text-gray-400' />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-gray-500 font-bold text-xl sm:text-2xl mt-4'>
                                <Link className='hover:text-red-700 transition-transform duration-200'>The Evolution of Merchant Payments</Link>
                            </h1>

                            <button className='mt-5 py-2 px-4 shadow-lg shadow-gray-400 text-red-700 flex items-center justify-center hover:bg-red-700 hover:text-white transition duration-300'>
                                Read more
                                <span className='ml-2'>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 md:p-24 bg-gray-200">
                    <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-500 max-w-full w-5/12 font-bold mb-4">
                        Unlock the power of payment solutions with Fidelity Group’s <span className="text-red-600">Partner Payments</span>.
                    </h1>
                    <div>
                        <button className="bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-blue-900 transition duration-300 hover:-translate-y-1 mt-4">
                            Download Our Brochure
                        </button>
                    </div>
                </div>





                <section className='flex flex-col lg:flex-row justify-between items-start p-6 lg:p-10'>
                    <div className='lg:ml-2 mt-2 lg:mt-20 w-full lg:w-11/12'>
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

export default Payments