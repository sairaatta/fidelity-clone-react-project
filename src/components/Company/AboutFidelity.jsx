import React from 'react';
import AboutImage from '/src/assets/images/aboutImage.png';
import { FaCheck } from 'react-icons/fa';
import AutoScrollImages from './AutoScrollImages.jsx';
import journet from '/src/assets/images/journet.png';
import ContactPic from '/src/assets/images/contactPic.png';



const AboutFidelity = () => {
    return (
        <>
            <section className="relative mb-32">
                <img src={AboutImage} alt="About Us" className="w-full h-auto absolute" />

                <div className="mt-16 relative inset-0 flex flex-col items-start justify-center text-center px-4 sm:px-8 md:px-32">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl text-gray-200 font-extrabold" style={{ textShadow: '8px 8px 8px rgba(0, 0, 0, 0.8)' }}>
                        About Us
                    </h1>

                    <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 md:py-4 md:px-6 bg-red-700 text-white rounded-lg hover:bg-blue-900 transition-all transform hover:scale-95">
                        Talk to us
                    </button>
                </div>

                <div className='p-4 sm:p-8 md:p-16 mx-auto text-gray-600 text-base md:text-lg'>
                    <h1 className='mt-6 sm:mt-10 mb-6 max-w-full w-full md:w-10/12'>
                        At Fidelity Group, we are dedicated to transforming the way people connect. Founded over 30 years ago, with a vision to bring unparalleled communication services to our clients, we pride ourselves on being at the forefront of technological innovation and customer satisfaction.
                    </h1>
                    <h2 className='mb-4 sm:mb-8'>
                        Our team comprises seasoned industry professionals with extensive expertise in designing, deploying, and managing advanced telecom infrastructure.
                    </h2>
                    <h2 className='mt-4 sm:mt-8'>
                        We are committed to offering reliable, high-quality services that meet the diverse needs of businesses and individuals alike.
                    </h2>
                </div>

                <div className='p-4 sm:p-8 md:p-16 mx-auto text-gray-600'>
                    <h1 className='mt-6 sm:mt-10 mb-6 text-3xl md:text-5xl font-bold text-center'>Our Mission</h1>
                    <p className='italic text-lg sm:text-2xl md:text-3xl text-center'>
                        “To be the UK’s most customer-centric communications company, helping businesses grow by providing and supporting them with innovative and trusted solutions.”
                    </p>
                </div>

                <div className='p-4 sm:p-8 md:p-16 mx-auto text-gray-600'>
                    <h1 className='mt-6 sm:mt-10 mb-6 text-3xl md:text-5xl font-bold text-center text-gray-600'>Our Values</h1>
                    <div className="flex flex-wrap justify-center md:justify-between">
                        <div className="mt-4 w-full sm:w-6/12 md:w-5/12 p-4">
                            <div className="flex items-center space-x-2">
                                <FaCheck className="text-red-500" />
                                <h1 className="text-xl md:text-2xl font-bold">Innovation</h1>
                            </div>
                            <p className="mt-2 text-gray-600">
                                We embrace innovation and are always exploring new technologies to improve our services and deliver the best solutions to our clients.
                            </p>
                        </div>

                        <div className="mt-4 w-full sm:w-6/12 md:w-5/12 p-4">
                            <div className="flex items-center space-x-2">
                                <FaCheck className="text-red-500" />
                                <h1 className="text-xl md:text-2xl font-bold">Integrity</h1>
                            </div>
                            <p className="mt-2 text-gray-600">
                                Integrity is at the core of our business. We believe in transparency, honesty, and ethical practices in all our business operations.
                            </p>
                        </div>

                        <div className="mt-4 w-full sm:w-6/12 md:w-5/12 p-4">
                            <div className="flex items-center space-x-2">
                                <FaCheck className="text-red-500" />
                                <h1 className="text-xl md:text-2xl font-bold">Customer Focus</h1>
                            </div>
                            <p className="mt-2 text-gray-600">
                                Our customers are our top priority. We listen to their needs and work tirelessly to exceed their expectations with our services and support.
                            </p>
                        </div>

                        <div className="mt-4 w-full sm:w-6/12 md:w-5/12 p-4">
                            <div className="flex items-center space-x-2">
                                <FaCheck className="text-red-500" />
                                <h1 className="text-xl md:text-2xl font-bold">Reliability</h1>
                            </div>
                            <p className="mt-2 text-gray-600">
                                We understand the importance of dependable communication services. Our commitment to reliability ensures that our clients can count on us for consistent performance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-300 text-gray-600 p-14'>
                    <h1 className='text-center text-3xl md:text-5xl font-bold mt-16 mb-8'>Fidelity Group – Multi-award winners!</h1>
                    <div className="mt-8">
                        <AutoScrollImages />
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-3xl md:text-5xl font-bold mt-16 mb-8 text-gray-600'>Fidelity Group in numbers</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 max-w-full w-2/5 items-center mx-auto">
                        <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
                            <h1 className="text-gray-500 text-2xl font-medium">Over</h1>
                            <h1 className="text-red-700 text-3xl font-medium">62903</h1>
                            <p className="text-gray-500 text-base font-normal">Hosted seats</p>
                        </div>
                        <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
                            <h1 className="text-gray-500 text-2xl font-medium">Over</h1>
                            <h1 className="text-red-700 text-3xl font-medium">9260</h1>
                            <p className="text-gray-500 text-base font-normal">Customers being billed</p>
                        </div>
                        <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
                            <h1 className="text-gray-500 text-2xl font-medium">Average of</h1>
                            <h1 className="text-red-700 text-3xl font-medium">1651953401</h1>
                            <p className="text-gray-500 text-base font-normal">Call minutes</p>
                        </div>
                        <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
                            <h1 className="text-gray-500 text-2xl font-medium">Over</h1>
                            <h1 className="text-red-700 text-3xl font-medium">4004</h1>
                            <p className="text-gray-500 text-base font-normal">Data circuits</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto p-6">
                    <h1 className="text-center text-3xl md:text-5xl font-bold mt-16 mb-8 text-gray-600">
                        Our Journey
                    </h1>
                    <p className="text-center max-w-full w-11/12 mx-auto">
                        At Fidelity Group, we have been creating meaningful connections for decades. Whether you are a business looking to enhance your communication infrastructure or a residential customer seeking reliable services, we are here to help. Join us and experience the difference that comes with every service from Fidelity Group.
                    </p>
                    <div className="mt-6 mx-auto">
                        <img src={journet} alt="Our Journey" className="mx-auto mt-10" />
                    </div>
                </div>

                <section className='flex flex-col lg:flex-row justify-between items-start p-6 lg:p-10'>
                    <div className='lg:ml-2 mt-2 lg:mt-20 w-full lg:w-11/12'>
                        <h1 className='text-gray-600 mb-5 text-3xl lg:text-5xl font-bold text-center lg:text-left'>Connect with us </h1>
                        <p className='lg:w-3/5 mb-8 lg:mb-10 text-gray-600 leading-7 text-center lg:text-left'>
                            To find out more, please call us today on 0800 840 6800.</p>
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
                                        I agree to the
                                        <span className="text-red-600"> privacy policy</span>.
                                        <span className="text-red-500 text-xs"> (Required)</span>
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
    );
};

export default AboutFidelity;
