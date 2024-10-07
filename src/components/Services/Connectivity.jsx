import React from 'react';
import connect from '/src/assets/images/connect.jpg';
import { FaArrowRight } from 'react-icons/fa';
import img1 from '/src/assets/images/img1.png';
import img2 from '/src/assets/images/img2.png'
import img3 from '/src/assets/images/img3.png'
import img4 from '/src/assets/images/img4.png'
import img5 from '/src/assets/images/img5.png'
import img6 from '/src/assets/images/img6.png'
import p1 from '/src/assets/images/p1.png';
import p2 from '/src/assets/images/p2.png'
import p3 from '/src/assets/images/p3.png'
import p4 from '/src/assets/images/p4.png'

import TestimonialCarousel from './TestimonialCarousel';

import ContactPic from '/src/assets/images/contactPic.png';



const Connectivity = () => {
    return (
        <>

            <div className='w-full'>
                <div className="max-w-full h-screen relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={connect} alt="Connectivity" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
                        <h1 className="text-2xl md:text-3xl font-medium mb-4 text-center w-full max-w-2xl">
                            Trusted business fibre broadband and ethernet cable services.
                        </h1>
                        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center w-full max-w-2xl">
                            Get the best business fibre broadband
                        </h1>
                        <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 hover:-translate-y-1 md:py-5 md:px-12">
                            Speak with an Expert
                        </button>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <div className='flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 mx-auto max-w-full w-full md:w-8/12'>
                        <div className="flex flex-col items-center mt-12 mb-6">
                            <h1 className="flex items-center text-lg md:text-xl text-red-600 font-semibold">
                                Dedicated Fibre Internet
                                <span className="ml-2">
                                    <FaArrowRight className='text-red-600' />
                                </span>
                            </h1>
                            <p className="max-w-sm text-center mt-4 mb-4 text-gray-500">
                                The UK’s no.1 dedicated leased line internet access for business. No sharing, unrivalled reliability, and market-leading service availability to help your business thrive. Internet speeds up to 10Gbps.
                            </p>
                            <button className="mt-2 bg-red-600 text-white py-3 px-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-900">
                                Learn More
                            </button>
                        </div>

                        <div className="flex flex-col items-center mt-12 mb-6">
                            <h1 className="flex items-center text-lg md:text-xl text-red-600 font-semibold">
                                Fibre to the Premises (FTTP)
                                <span className="ml-2">
                                    <FaArrowRight className='text-red-600' />
                                </span>
                            </h1>
                            <p className="max-w-sm text-center mt-4 mb-4 text-gray-500">
                                Premium business fibre broadband service for businesses demanding high-availability and high-capacity. Internet speeds up to 1Gbps.
                            </p>
                            <button className="mt-2 bg-red-600 text-white py-3 px-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-900">
                                Learn More
                            </button>
                        </div>

                        <div className="flex flex-col items-center mt-12 mb-6">
                            <h1 className="flex items-center text-lg md:text-xl text-red-600 font-semibold">
                                SoGEA Broadband
                                <span className="ml-2">
                                    <FaArrowRight className='text-red-600' />
                                </span>
                            </h1>
                            <p className="max-w-sm text-center mt-4 mb-4 text-gray-500">
                                Business broadband without the need for a traditional phone line. So, everything you require is covered in a single order, with one supplier.
                            </p>
                            <button className="mt-2 bg-red-600 text-white py-3 px-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-900">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex max-w-full w-10/12 mx-auto mt-20 items-start justify-between">
                        <div className="w-4/12 ml-24">
                            <h1 className="text-2xl text-gray-600 font-bold">
                                Work smarter and faster, not harder, with the fastest and most reliable
                                <span className="text-red-600"> business fibre broadband speeds</span>.
                            </h1>
                        </div>

                        <div className="w-5/12">
                            <p className="text-gray-500 mb-8">
                                We have hand-picked specialist suppliers to provide our clients with superfast, business fibre broadband connectivity solutions. Whether you’re looking for a specific product or service that will benefit your team’s productivity and collaboration, or hope to achieve the fastest internet speeds possible, we’ll do the hard work for you and find the best business fibre broadband deals.
                            </p>
                            <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 hover:-translate-y-1">
                                Speak with an Expert About Fibre Broadband in Your Area
                            </button>
                        </div>
                    </div>

                </div>

                <div className='flex flex-wrap lg:flex-nowrap justify-center space-x-0 lg:space-x-4 p-4 md:p-10 lg:p-14'>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 shadow-lg shadow-slate-400 rounded-md mb-4 lg:mb-0">
                        <img src={img1} alt="" className="w-full h-auto object-cover rounded-md" />
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 shadow-lg shadow-slate-400 rounded-md mb-4 lg:mb-0">
                        <img src={img2} alt="" className="w-full h-auto object-cover rounded-md" />
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 shadow-lg shadow-slate-400 rounded-md mb-4 lg:mb-0">
                        <img src={img3} alt="" className="w-full h-auto object-cover rounded-md" />
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 shadow-lg shadow-slate-400 rounded-md mb-4 lg:mb-0">
                        <img src={img4} alt="" className="w-full h-auto object-cover rounded-md" />
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 shadow-lg shadow-slate-400 rounded-md mb-4 lg:mb-0">
                        <img src={img5} alt="" className="w-full h-auto object-cover rounded-md" />
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 shadow-lg shadow-slate-400 rounded-md mb-4 lg:mb-0">
                        <img src={img6} alt="" className="w-full h-auto object-cover rounded-md" />
                    </div>
                </div>

                <div className='mx-auto p-8 bg-gray-200 h-auto'>
                    <h1 className='text-gray-600 text-3xl font-semibold text-center m-8'>Why Fidelity for your business fibre broadband?</h1>
                    <div className='flex flex-wrap lg:flex-nowrap justify-center max-w-full w-11/12 h-auto items-stretch mx-auto space-x-4 space-y-4 md:space-y-0'>
                        <div className='p-6 shadow-lg bg-white shadow-slate-400 rounded-lg w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col'>
                            <img src={p1} alt="" className="w-32 h-32 object-cover rounded-md mx-auto" />
                            <h1 className="text-xl font-semibold mt-4 text-center">Improved productivity </h1>
                            <p className="mt-2 flex-grow text-center">Empower your teams with seamless communication via high-performing applications such as video and voice conferencing. Upgrade to full business fibre broadband for improved internet speeds and increased reliability at competitive pricing.</p>
                        </div>

                        <div className='p-6 shadow-lg bg-white shadow-slate-400 rounded-lg w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col'>
                            <img src={p2} alt="" className="w-32 h-32 object-cover rounded-md mx-auto" />
                            <h1 className="text-xl font-semibold mt-4 text-center">Scalable Business Fibre Broadband </h1>
                            <p className="mt-2 flex-grow text-center">A selection of broadband options based on your business needs, including Leased Lines, Dedicated fibre to the premises (FTTP), and fibre ethernet. Our smart business solutions are scalable and can be tailored to the specific size and requirements of each individual site. Upgrade your business to fibre business broadband today and experience improved internet speeds and reliability.</p>
                        </div>

                        <div className='p-6 shadow-lg bg-white shadow-slate-400 rounded-lg w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col'>
                            <img src={p3} alt="" className="w-32 h-32 object-cover rounded-md mx-auto" />
                            <h1 className="text-xl font-semibold mt-4 text-center">Better security </h1>
                            <p className="mt-2 flex-grow text-center">Benefit from secure communication and protection against the latest web threats. Our systems are compliant with industry-specific cyber security requirements and feature a resilient central firewall and antivirus protection for enhanced safeguarding.</p>
                        </div>

                        <div className='p-6 shadow-lg bg-white shadow-slate-400 rounded-lg w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col'>
                            <img src={p4} alt="" className="w-32 h-32 object-cover rounded-md mx-auto" />
                            <h1 className="text-xl font-semibold mt-4 text-center">Award-winning 24/7/365 business support </h1>
                            <p className="mt-2 flex-grow text-center">Our dedicated support team is on hand to assist you with any issues, at any time, from anywhere.</p>
                        </div>
                    </div>

                    <div className='mx-auto flex flex-col items-center justify-center  space-y-14 mt-24 mb-8'>
                        <h1 className='text-gray-600 text-2xl font-bold text-center'>
                            Connect to our latest <span className='text-red-700'>business Fibre Broadband</span> deals
                        </h1>
                        <div className='flex space-x-4 mt-6'>
                            <button className='px-12 py-4 text-white bg-red-700 transition-transform rounded-lg duration-300 hover:-translate-y-1 hover:bg-blue-900'>
                                Get Promo
                            </button>
                            <button className='px-12 py-4 text-white bg-blue-900 transition-transform rounded-lg duration-300 hover:-translate-y-1'>
                                Call us
                            </button>
                        </div>
                    </div>

                </div>

                <div className='w-screen flex flex-col items-center mt-10'>
                    <h3 className='text-xl text-gray-400 font-bold mb-7' >Testimonials</h3>
                    <h1 className='text-3xl font-bold text-gray-600'>What our customers have to say.</h1>
                    <div>
                        <TestimonialCarousel/>
                    </div>
                </div>

                <div>
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
                </div>


                <div>

                </div>


            </div>






        </>




    );
};

export default Connectivity;
