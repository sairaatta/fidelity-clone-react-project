import React from 'react'
import IotHome from '/src/assets/images/IotHome.png';

import ContactPic from '/src/assets/images/contactPic.png';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileUpload,
    faAward,
    faSimCard,
    faListOl,
    faUserCog,
    faShield
}
    from '@fortawesome/free-solid-svg-icons';
import iot1 from '/src/assets/images/iot1.png';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';

import iot2 from '/src/assets/images/iot2.png';

import i1 from '/src/assets/images/i4.png';



const IoT = () => {
    return (
        <>
            <div>
                <section className='relative flex h-auto'>
                    <div className="relative flex flex-col items-start justify-center w-full mx-auto overflow-hidden">
                        <img src={IotHome} alt="IoT Home" className="w-full h-auto" />
                        <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-4 md:p-8 sm:w-10/12 w-full max-w-md ml-4 md:ml-32">
                            <h1 className="text-white text-2xl sm:text-lg md:text-xl font-bold mb-2">
                                A Global IoT Solution – Data everywhere for everything
                            </h1>
                            <p className="text-white text-base sm:text-xs md:text-sm mb-2">
                                Our IoT solutions are driving connectivity and growth everywhere, from CCTV cameras to handheld payment devices. And from the UK to the farthest reaches of the globe.
                            </p>
                            <p className="text-white text-base sm:text-xs md:text-sm mb-2">
                                If your business needs the very best in IoT connectivity, choosing our solution will be the easiest decision you’ll ever make.
                            </p>
                            <button className="bg-red-700 text-white px-6 sm:px-5 py-2 sm:py-3 rounded hover:bg-blue-900 transition duration-300 transform hover:-translate-y-1">
                                Find out more
                            </button>
                        </div>
                    </div>
                </section>

                <div className="mt-8 p-4 bg-gray-100">
                    <h1 className="text-3xl font-bold mb-4 text-center text-gray-600"> <span className='text-red-700'> Quote, order & manage </span> – ENTIRELY ONLINE!</h1>
                    <div className="flex flex-col md:flex-row items-center mt-28">
                        <div className="md:w-4/12 lg:w-5/12 ml-24">
                            <p className='w-10/12 mb-6 mt-6 text-gray-600'>Fidelity’s new platform, named <span className='text-red-600 underline hover:text-gray-500'> vM2M </span>, allows you to create your perfect IoT solution and get a quote whenever you need it. No phone calls, no waiting for pricing to come back to you. It’s all in your hands.</p>
                            <p className='w-10/12 mb-6 mt-6 text-gray-600'>And once you have your quote, you can order your IoT SIM cards, entirely online too.</p>
                            <p className='w-10/12 mb-6 mt-6 text-gray-600'>Need more SIM cards or just want to keep track of your data usage? No problem, just log into your vM2M account and you can do that, quickly, simply and easily.</p>
                            <p className='w-10/12 mb-6 mt-6 text-gray-600'>Getting started with IoT has never been easier for you. Find out more about vM2M <span className='text-red-600 underline hover:text-gray-500'> here.</span></p>
                            <p className='w-10/12 mb-6 mt-6 text-gray-600'>Or enjoy our outstanding customer service. vM2M is the only totally online IoT management portal but we recognise that for some people, talking directly to one of our IoT specialists is preferable.</p>
                            <p className='w-10/12 mb-6 mt-6 text-gray-600'>With a team of Fidelity’s experts on hand to help you get started on your IoT journey and answer any questions you may have, you can rest assured that we’ll help you get started with vM2M and our leading IoT connectivity technology.</p>
                        </div>
                        <div className="md:w-1/2 lg:w-5/12 w-10/12 mt-4 md:mt-0">
                            <img src={ContactPic} alt="Contact" className="w-full h-auto" />
                        </div>
                    </div>
                </div>


                <div className='bg-gray-200 p-8 items-center mx-auto'>
                    <h1 className='text-gray-600 text-3xl font-bold mx-auto text-center w-full md:w-5/12'>
                        IoT SIMs from Fidelity Group with vM2M – Data with a difference
                    </h1>
                    <div className='flex flex-wrap max-w-full w-11/12 p-4'>
                        <div className="quote-container w-full sm:w-1/2 p-4">
                            <div className="icon-heading">
                                <FontAwesomeIcon icon={faFileUpload} size="1x" className='text-red-700' />
                                <h1 className='text-gray-600 font-semibold text-2xl'>24/7 Online Quoting</h1>
                            </div>
                            <p className='text-gray-500'>
                                You’ve selected your ideal IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.
                            </p>
                        </div>

                        <div className="quote-container w-full sm:w-1/2 p-4">
                            <div className="icon-heading">
                                <FontAwesomeIcon icon={faAward} size="1x" className='text-red-700' />
                                <h1 className='text-gray-600 font-semibold text-2xl'>24/7 Online Quoting</h1>
                            </div>
                            <p className='text-gray-500'>
                                You’ve selected your ideal IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.
                            </p>
                        </div>

                        <div className="quote-container w-full sm:w-1/2 p-4">
                            <div className="icon-heading">
                                <FontAwesomeIcon icon={faSimCard} size="1x" className='text-red-700' />
                                <h1 className='text-gray-600 font-semibold text-2xl'>24/7 Online Quoting</h1>
                            </div>
                            <p className='text-gray-500'>
                                You’ve selected your ideal IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.
                            </p>
                        </div>

                        <div className="quote-container w-full sm:w-1/2 p-4">
                            <div className="icon-heading">
                                <FontAwesomeIcon icon={faListOl} size="1x" className='text-red-700' />
                                <h1 className='text-gray-600 font-semibold text-2xl'>24/7 Online Quoting</h1>
                            </div>
                            <p className='text-gray-500'>
                                You’ve selected your ideal IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.
                            </p>
                        </div>

                        <div className="quote-container w-full sm:w-1/2 p-4">
                            <div className="icon-heading">
                                <FontAwesomeIcon icon={faUserCog} size="1x" className='text-red-700' />
                                <h1 className='text-gray-600 font-semibold text-2xl'>24/7 Online Quoting</h1>
                            </div>
                            <p className='text-gray-500'>
                                You’ve selected your ideal IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.
                            </p>
                        </div>

                        <div className="quote-container w-full sm:w-1/2 p-4">
                            <div className="icon-heading">
                                <FontAwesomeIcon icon={faShield} size="1x" className='text-red-700' />
                                <h1 className='text-gray-600 font-semibold text-2xl'>24/7 Online Quoting</h1>
                            </div>
                            <p className='text-gray-500'>
                                You’ve selected your ideal IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='my-8'>

                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='md:w-1/2 p-4'>
                            <img src={iot1} alt="IoT Solutions" className='w-full h-auto rounded-lg shadow-md' />
                        </div>
                        <div className='md:w-1/2 p-4'>
                            <h1 className='text-center text-3xl font-bold mb-4 text-gray-600'>
                                We’re completely <span className='text-red-600'>independent…</span>
                            </h1>
                            <p className='text-gray-700 mb-4'>
                                There are a huge range of IoT solutions available to you, from a wide range of suppliers. Find the ideal solution for you and your business by using our vM2M platform. Just log in, select the SIM specification of your choice and you’ll get an instant quote. Our independence means that we always ensure that you make the best possible choice.
                            </p>
                            <p className='text-gray-700 mb-4'>
                                At Fidelity Group, our trusted network provides you with the peace of mind that you will always be making the best choice for you and your business.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='my-8'>

                    <div className='flex flex-col md:flex-row items-center'>

                        <div className='md:w-1/2 p-4'>
                            <h1 className='text-center text-3xl font-bold mb-4 text-gray-600'>
                                …trusted in telecoms for over <span className='text-red-600'> 40 </span> years
                            </h1>
                            <p className='text-gray-700 mb-4'>
                                IoT may be relatively new to the telecoms marketplace but we’ve been here much longer than that.                            </p>
                            <p className='text-gray-700 mb-4'>
                                With over 40 years of telecoms experience and success, working closely with some of the UK’s leading companies to supporting tens of thousands of end users, Fidelity Group’s network expertise is trusted by businesses everywhere.                            </p>
                            <p className='text-gray-700 mb-4'>Your decision to work with us will not only provide you with the very best IoT solution but also give you access to a wide range of other outstanding telecoms solutions to help your business.</p>
                        </div>
                        <div className='md:w-1/2 p-4'>
                            <img src={iot2} alt="IoT Solutions" className='w-full h-auto rounded-lg shadow-md' />
                        </div>
                    </div>
                </div>


                <div className='mx-auto items-center'>
                    <h1 className='text-4xl text-center text-gray-600 font-bold'>The future is now and <span className='text-red-700'> IoT is changing  </span> how business is done</h1>

                    <div className='flex flex-wrap lg:flex-nowrap justify-center p-8'>
                        {/* Card 1 */}
                        <div className='bg-white shadow-xl shadow-slate-300 hover:-translate-y-1 transition-transform duration-300 rounded-lg p-6 m-4 w-80 flex flex-col items-center'>
                            <FontAwesomeIcon icon={faSimCard} size="8x" className="text-red-700 mb-4" />
                            <h1 className='text-xl font-semibold text-gray-800 mb-2'>IoT Connectivity</h1>
                            <p className='text-gray-600 text-center'>
                                Our multi-network SIM cards provide optimized network coverage, ensuring you can connect to anything, anywhere, at any time.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white shadow-xl shadow-slate-300 hover:-translate-y-1 transition-transform duration-300 rounded-lg p-6 m-4 w-80 flex flex-col items-center'>
                            <FontAwesomeIcon icon={faCodeMerge} size="8x" className="text-red-700 mb-4" />
                            <h1 className='text-xl font-semibold text-gray-800 mb-2'>Aggregated Data</h1>
                            <p className='text-gray-600 text-center'>
                                Our SIMs can share pooled data allowances across your IoT SIM estate, helping to eliminate unwelcome data overage charges.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white shadow-xl shadow-slate-300 rounded-lg hover:-translate-y-1 transition-transform duration-300 p-6 m-4 w-80 flex flex-col items-center'>
                            <FontAwesomeIcon icon={faHandshake} size="8x" className="text-red-700 mb-4" />
                            <h1 className='text-xl font-semibold text-gray-800 mb-2'>Partner Programme</h1>
                            <p className='text-gray-600 text-center'>
                                Benefit from a compelling margin share by reselling market-disrupting, customer-centric IoT connectivity.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='bg-white shadow-xl shadow-slate-300 hover:-translate-y-1 transition-transform duration-300 rounded-lg p-6 m-4 w-80 flex flex-col items-center'>
                            <img src={i1} alt="vM2M IoT Platform" className="w-28 h-28 mb-4" />
                            <h1 className='text-xl font-semibold text-gray-800 mb-2'>vM2M IoT Platform</h1>
                            <p className='text-gray-600 text-center'>
                                In simple terms, we’ve made IoT as easy as: Quote – Order – Manage - 24/7.
                            </p>
                        </div>
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
            </div>












        </>
    )
}

export default IoT