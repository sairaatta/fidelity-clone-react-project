import React from 'react'
import Voice1 from '/src/assets/images/voice.png';
import Voice2 from '/src/assets/images/voice2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMoneyBillWave, faShieldAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight } from 'react-icons/fa';
import v1 from '/src/assets/images/v1.png';
import v2 from '/src/assets/images/v2.png';
import v3 from '/src/assets/images/v3.png';
import v4 from '/src/assets/images/v4.png';
import v5 from '/src/assets/images/v5.png';
import v6 from '/src/assets/images/v6.png';
import TestimonialCarousel from './TestimonialCarousel';
import ContactPic from '/src/assets/images/contactPic.png';


const Voices = () => {
    return (
        <>
            <div>
                <div className="relative">
                    <img src={Voice1} alt="Hosted Telephony" className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col items-start md:items-start justify-center text-white p-4">
                        <h1 className="text-4xl lg:text-4xl text-gray-200 font-bold mb-4 text-center sm:text-3xl md:text-4xl">
                            Hosted Telephony Systems For Business
                        </h1>
                        <p className="mb-4 text-center sm:text-base md:text-lg">
                            Maximise customer satisfaction with VoIP solutions customised for your business.
                        </p>
                        <button className="bg-red-700 text-white px-8 py-4 rounded hover:bg-blue-900 transition duration-300 hover:-translate-y-1">
                            Speak with an Expert
                        </button>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-start p-16 mt-24">
                    <div className="md:w-1/2 flex justify-center md:mr-4">
                        <img src={Voice2} alt="" className="w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <p className="text-gray-600">
                            Fidelity Group offers an extensive range of hosted telephony solutions that deliver scalability and exceptional functionality to meet the critical voice service needs of our customers. Enjoy effortless communication with clients, suppliers, and your internal team, all without the hassle and expense of setting up and maintaining a traditional phone system on your business premises.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col items-center text-center p-4">
                    <h1 className="text-3xl font-bold mb-6">
                        Business Voice <span className="text-red-600">Features</span>
                    </h1>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} className="text-2xl text-red-700 mr-2 size-4" />
                            <h1>24/7/365 inclusive support</h1>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-red-700 mr-2 size-4" />
                            <h1>Fraud protection</h1>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-red-700 mr-2 size-4" />
                            <h1>Lifetime warranty available</h1>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCalendar} className="text-2xl text-red-700 mr-2 size-4" />
                            <h1>Integration with over 200 CRM's</h1>
                        </div>
                    </div>
                </div>


                <div className='mx-auto p-6 md:p-16 mt-10'>
                    <h1 className='text-gray-600 text-3xl font-bold text-center mb-10 md:mb-16'>Voice services for Business</h1>
                    <div className="flex flex-col items-center space-y-6 md:space-y-8">
                        <div className='flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-8 md:space-y-0'>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full md:w-96 h-auto hover:-translate-y-1 duration-300 transition-transform'>
                                <img src={v1} alt="" className="w-full h-auto object-cover" />
                                <h1 className="text-lg font-bold mt-2 text-center text-gray-500">VoIP phone systems</h1>
                                <button className="flex items-center justify-center text-red-700 px-4 py-2 rounded hover:text-blue-900 transition duration-300 mt-2">
                                    Learn More <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full md:w-96 h-auto hover:-translate-y-1 duration-300 transition-transform'>
                                <img src={v2} alt="" className="w-full h-auto object-cover" />
                                <h1 className="text-lg font-bold mt-2 text-center text-gray-500">Sip Trunking</h1>
                                <button className="flex items-center justify-center text-red-700 px-4 py-2 rounded hover:text-blue-900 transition duration-300 mt-2">
                                    Learn More <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full md:w-96 h-auto hover:-translate-y-1 duration-300 transition-transform'>
                                <img src={v3} alt="" className="w-full h-auto object-cover" />
                                <h1 className="text-lg font-bold mt-2 text-center text-gray-500">Microsoft Teams</h1>
                                <button className="flex items-center justify-center text-red-700 px-4 py-2 rounded hover:text-blue-900 transition duration-300 mt-2">
                                    Learn More <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-8 md:space-y-0'>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full md:w-96 h-auto hover:-translate-y-1 duration-300 transition-transform'>
                                <img src={v4} alt="" className="w-full h-auto object-cover" />
                                <h1 className="text-lg font-bold mt-2 text-center text-gray-500">Non-Geographic Numbers</h1>
                                <button className="flex items-center justify-center text-red-700 px-4 py-2 rounded hover:text-blue-900 transition duration-300 mt-2">
                                    Learn More <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full md:w-96 h-auto hover:-translate-y-1 duration-300 transition-transform'>
                                <img src={v5} alt="" className="w-full h-auto object-cover" />
                                <h1 className="text-lg font-bold mt-2 text-center text-gray-500">Contact centre solutions</h1>
                                <button className="flex items-center justify-center text-red-700 px-4 py-2 rounded hover:text-blue-900 transition duration-300 mt-2">
                                    Learn More <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full md:w-96 h-auto hover:-translate-y-1 duration-300 transition-transform'>
                                <img src={v6} alt="" className="w-full h-auto object-cover" />
                                <h1 className="text-lg font-bold mt-2 text-center text-gray-500">Keep-in-Touch</h1>
                                <button className="flex items-center justify-center text-red-700 px-4 py-2 rounded hover:text-blue-900 transition duration-300 mt-2">
                                    Learn More <FaArrowRight className="ml-2" />
                                </button>
                            </div>
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




        </>
    )
}

export default Voices