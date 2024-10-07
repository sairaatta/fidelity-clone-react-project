import React from 'react'
import leader1 from '/src/assets/images/leader1.png';
import leader2 from '/src/assets/images/leader2.png';
import leader3 from '/src/assets/images/leader3.png';
import leader4 from '/src/assets/images/leader4.png';
import leader5 from '/src/assets/images/leader5.png';
import leader6 from '/src/assets/images/leader6.png';
import leader7 from '/src/assets/images/leader7.jpg';
import leader8 from '/src/assets/images/leader8.jpg';
import { FaLinkedin } from 'react-icons/fa';

import ContactPic from '/src/assets/images/contactPic.png';



const LeadershipTeam = () => {
    return (
        <>
            <section className='p-8 mx-auto mb-8 mt-20'>
                <h1 className='text-center text-3xl text-gray-600 font-medium mb-14'>“We live an ethos of trust,<span className='text-red-700'> loyalty </span> and delivery.”</h1>
                <div className='flex flex-col sm:flex-row sm:space-x-12 justify-center'>
                    <div className='flex flex-col items-center mb-8 sm:mb-0 relative group'>
                        <img src={leader1} alt="Alan Shraga" className='w-full h-auto' />
                        <h1 className='text-center text-gray-600 font-semibold text-2xl mt-3'>Alan Shraga</h1>
                        <p className='text-center text-gray-500 font-medium text-base'>Managing Director</p>

                        <a
                            href="https://www.linkedin.com/in/alan-shraga-347a4311/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-32 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        >
                            <FaLinkedin className="mr-2" />
                        </a>
                    </div>

                    <div className='flex flex-col items-center mb-8 sm:mb-0 relative group'>
                        <img src={leader2} alt="Ian McNamara" className='w-full h-auto' />
                        <h1 className='text-center text-gray-600 font-semibold text-2xl mt-3'>Ian McNamara</h1>
                        <p className='text-center text-gray-500 font-medium text-base'>Transformation Director</p>
                        <a
                            href="https://www.linkedin.com/in/ian-mcnamara-74b47826/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-32 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        >
                            <FaLinkedin className="mr-2" />
                        </a>
                    </div>
                    <div className='flex flex-col items-center mb-8 sm:mb-0 relative group'>
                        <img src={leader3} alt="Aron Teacher" className='w-full h-auto' />
                        <h1 className='text-center text-gray-600 font-semibold text-2xl mt-3'>Aron Teacher</h1>
                        <p className='text-center text-gray-500 font-medium text-base'>Commercial Director</p>
                        <a
                            href="https://www.linkedin.com/in/aron-teacher-a1538623/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-32 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        >
                            <FaLinkedin className="mr-2" />
                        </a>
                    </div>
                </div>


                <div className='flex flex-wrap justify-center mb-8 relative mt-24 space-x-8'>
                    {[leader4, leader5, leader6, leader7, leader8].map((leader, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center mx-4 mb-8 relative group w-1/2 sm:w-1/3 lg:w-2/12 lg:flex-shrink-0'
                        >
                            <img src={leader} alt={`Leader ${index + 4}`} className='w-full h-auto' />
                            <h1 className='text-center text-gray-600 font-semibold text-2xl mt-3'>
                                {['James Shraga', 'Dan Miles', 'Cristian Siminea', 'Pamela Murray', 'Niki Foote'][index]}
                            </h1>
                            <p className='text-center text-gray-500 font-medium text-base'>
                                {['Director of Sales and Partnerships', 'UK Service Director', 'Head of Mobile', 'Group Finance Manager', 'Head of Customer Marketing and Retentions'][index]}
                            </p>
                            {index !== 3 && (
                                <a
                                    href={[
                                        "https://www.linkedin.com/in/james-shraga-fidelitygroup/",
                                        "https://www.linkedin.com/in/daniel-miles-81701813/",
                                        "https://www.linkedin.com/in/cristian-siminea-0542ab38/",
                                        null,
                                        "https://www.linkedin.com/in/nikifoote/"
                                    ][index]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-20 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                >
                                    <FaLinkedin className="mr-2" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className='bg-gray-200 flex items-center p-16'>
                    <h1 className='text-gray-500 text-4xl font-bold max-w-full w-3/5 p-12'>
                        The UK’s fastest growing, <span className='text-red-600'> customer <br /> centric </span> service provider.
                    </h1>
                    <button className='ml-auto bg-red-600 text-white px-8 py-4 mr-16 rounded hover:bg-blue-900 transition-transform duration-300 transform hover:scale-105'>
                        Let's Connect
                    </button>

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

export default LeadershipTeam