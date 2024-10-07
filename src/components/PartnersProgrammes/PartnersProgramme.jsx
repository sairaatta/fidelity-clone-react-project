import React from 'react'
import partnerImage from '/src/assets/images/partner1.png';
import AutoScrollImages from './AutoScrollImages.jsx';
import uploadImage from '/src/assets/images/upload.png';
import ContactPic from '/src/assets/images/contactPic.png';


import DropdownComponent from './DropDownComponent.jsx';
const PartnersProgramme = () => {
    return (
        <>
            <section >
                <div className="relative">
                    <img src={partnerImage} alt="Partner" className="w-full h-auto overflow-hidden" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 w-full">
                        <h1 className="text-2xl font-bold text-center sm:text-xl">
                            Unlock New Revenue Opportunities with Our Channel Partnership Program
                        </h1>
                        <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            <button className="bg-red-700 text-white px-8 py-2 text-sm rounded hover:bg-blue-950 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 sm:px-2 sm:py-1 sm:w-24 sm:h-10">
                                Enquire now
                            </button>
                            <button className="bg-red-700 text-white px-8 py-2 text-sm rounded hover:bg-blue-950 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 sm:px-4 sm:py-2 sm:w-72 sm:h-10">
                                Download our partnership brochure
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start p-4 md:p-16">
                    <div className="w-full md:w-6/12 md:ml-32 pr-0 md:pr-8"> {/* Full width on small screens */}
                        <h1 className='text-2xl font-bold text-gray-600 text-center md:text-left'>
                            Partner inspired software, telecoms, energy and billing solutions.
                        </h1>
                        <p className='text-base text-gray-500 font-normal leading-8 mt-4 md:mt-8'>
                            With over 40 years of experience in the telecom market, we have developed a dynamic partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, Broadband and Utility solutions.
                        </p>
                        <p className='text-base text-gray-500 font-normal leading-8 mt-4 md:mt-8'>
                            Our collaborative approach is designed to provide your business with greater value for both existing and new customers who require these essential services.
                        </p>
                    </div>
                    <div className="flex flex-col justify-start space-y-4 md:space-y-10 mt-8 md:mt-0 md:mr-32"> {/* Vertical stacking of buttons */}
                        <button className='p-4 bg-blue-100 text-gray-500 font-bold text-xl rounded-md'>Dealer programme</button>
                        <button className='p-4 bg-blue-100 text-gray-500 font-bold text-xl rounded-md'>Wholesale partnership</button>
                        <button className='p-4 bg-blue-100 text-gray-500 font-bold text-xl rounded-md'>Referral programme</button>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-center text-3xl font-bold mb-4">Fidelity Group – Multi-award winners</h1>
                    <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl"> {/* Change flex direction for smaller screens */}
                        <div className="w-full md:w-1/2 pr-4"> {/* Left side paragraph */}
                            <p className="text-base text-gray-500">
                                With over 30 years experience in the channel partner space, we’ve built an enviable reputation for supporting our channel partners with the very best solutions, allowing them to generate recurring revenues and generate new business continually.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 pl-4 mt-4 md:mt-0"> {/* Right side paragraph */}
                            <p className="text-base text-gray-500">
                                As multi-award winners across a wide range of services, you know you can trust our business partnerships! In July 2024 we took home more awards for our services than anyone else.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-gray-100 text-gray-600 p-14'>
                        <h1 className='text-center text-3xl md:text-5xl font-bold mt-16 mb-8'>Fidelity Group – Multi-award winners!</h1>
                        <div className="mt-8">
                            <AutoScrollImages />
                        </div>
                    </div>
                </div>

                <div className='mx-auto items-center p-8'>
                    <h1 className='text-gray-600 text-3xl font-bold text-center p-16'>Choose the perfect partnership for your business</h1>
                    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 p-8">
                        <div className="p-4 bg-gray-50 rounded-xl shadow-lg w-full md:w-1/3">
                            <h1 className="text-xl text-gray-600 font-bold mb-4">Dealer partnership</h1>
                            <p className='text-gray-600 leading-8'>✓ Incentive and growth programmes</p>
                            <p className='text-gray-600 leading-8'>✓ Sales and product training</p>
                            <p className='text-gray-600 leading-8'>✓ Full product suite access</p>
                            <p className='text-gray-600 leading-8'>✓ Anvil Access and training</p>
                            <p className='text-gray-600 leading-8'>✓ Dual branded customer billing</p>
                            <p className='text-gray-600 leading-8'>✓ 24/7/365 customer support service</p>
                            <p className='text-gray-600 leading-8'>✓ Inside track market update</p>
                            <p className='text-gray-600 leading-8'>✓ Dedicated account management</p>
                            <p className='text-gray-600 leading-8'>✓ Provisioning and fault management</p>
                            <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-blue-900 transition-transform duration-300 hover:-translate-y-1 ">Enquire now</button>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl shadow-lg w-full md:w-1/3">
                            <h1 className="text-xl text-gray-600 font-bold mb-4">Referral partnership</h1>
                            <p className='text-gray-600 leading-8'>✓ Incentive and growth programmes</p>
                            <p className='text-gray-600 leading-8'>✓ Sales and product training</p>
                            <p className='text-gray-600 leading-8'>✓ Full product suite access</p>
                            <p className='text-gray-600 leading-8'>✓ Dual branded customer billing</p>
                            <p className='text-gray-600 leading-8'>✓ 24/7/365 customer support service</p>
                            <p className='text-gray-600 leading-8'>✓ Inside track market update</p>
                            <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-blue-900 transition-transform duration-300 hover:-translate-y-1 ">Enquire now</button>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl shadow-lg w-full md:w-1/3">
                            <h1 className="text-xl text-gray-600 font-bold mb-4">Wholesale partnership</h1>
                            <p className='text-gray-600 leading-8'>✓ Incentive and growth programmes</p>
                            <p className='text-gray-600 leading-8'>✓ Provisioning and fault management</p>
                            <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-blue-900 transition-transform duration-300 hover:-translate-y-1 ">Enquire now</button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between p-8 space-y-8 md:space-y-0 bg-gray-200 p-8">
                    <div className="md:w-1/2 w-full">
                        <img src={uploadImage} alt="Billing software" className="w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 w-full lg:ml-20 md:pl-8">
                        <h1 className="text-2xl font-bold mb-4 text-gray-600 ">More than just billing</h1>
                        <p className="text-gray-600 mb-6 leading-8 w-10/12">
                            Fidelity leverages the market-leading billing management software, Anvil—a comprehensive business
                            management platform that empowers our resellers to quote, order, and bill their end users according
                            to their specific requirements. Supported by our 24/7/365 customer support service, we ensure that
                            driving revenue growth for your business becomes effortless.
                        </p>
                        <button className="bg-red-700 text-white py-4 px-6 rounded-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-900">
                            Find out more
                        </button>
                    </div>
                </div>

                <div>

                    <div className='flex justify-center mt-20 space-x-8'>
                        <div>
                            <button className='text-md border-2 border-white hover:border-red-600 hover:text-red-600 text-gray-600 px-28 py-4 rounded-sm transition-transform duration-300 hover:-translate-y-1'>
                                OUR MISSION
                            </button>
                        </div>
                        <span>
                            <div>
                                <button className='text-md border-2 border-white hover:border-red-600 hover:text-red-600 text-gray-600 px-28 py-4 rounded-sm transition-transform duration-300 hover:-translate-y-1'>
                                    TECH AND TELECOMS PARTNERS
                                </button>
                            </div>
                        </span>
                        <div>
                            <button className='text-md border-2 border-white hover:border-red-600 hover:text-red-600 text-gray-600 px-28 py-4 rounded-sm transition-transform duration-300 hover:-translate-y-1'>
                                ENERGY PARTNERS
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <DropdownComponent />
                </div>

                <div>
                    <section className='flex flex-col lg:flex-row justify-between items-start p-6 lg:p-10'>
                        <div className='lg:ml-2 mt-2 lg:mt-20 w-full lg:w-11/12'>
                            <h1 className='text-gray-600 mb-5 text-3xl lg:text-5xl font-bold text-center lg:text-left'>Connect with us </h1>
                            <p className='lg:w-3/5 mb-8 lg:mb-10 text-gray-600 leading-7 text-center lg:text-left'>
                                To find out more about our partnership programmes, please call us today on 0800 840 6800.
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

                               
                                <div className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        id="privacy-policy"
                                        className="mr-2"
                                    />

                                    <div className=''>
                                        <label htmlFor="privacy-policy" className="text-gray-500  ">
                                            I agree to the <span className='text-red-500'>  privacy policy (Required).</span>
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





            </section>





        </>
    )
}

export default PartnersProgramme