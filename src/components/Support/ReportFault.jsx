import React from 'react';

const ReportFault = () => {
    return (
        <>
            <section className='flex flex-col lg:flex-row justify-evenly items-start'>
                {/* Left Text Section */}
                <div className='w-full p-8 lg:p-16 mt-16 lg:mt-32 lg:ml-32'>
                    <h1 className='text-gray-600 mb-4 lg:mb-7 text-2xl lg:text-4xl font-bold'>
                        <span className='font-bold text-blue-950'> | </span> Log a <span className='text-red-700'>support</span> request
                    </h1>
                    <p className='leading-7 lg:leading-8 font-normal mb-4 text-md lg:text-lg text-gray-500'>
                        You can also report faults by calling our freephone number 0800 840 6800 or 0333 323 0404. Your fault will be logged and responded to within the terms of your service level agreement.
                    </p>
                    <h1 className='text-gray-500 text-md lg:text-lg'>
                        E-mail:
                        <span className='text-red-600 hover:underline transition-transform transform duration-300 ease-in-out ml-1'>
                            support@fidelity-group.co.uk
                        </span>
                    </h1>
                    <h1 className='text-gray-500 text-md lg:text-lg'>
                        Tel:
                        <span className='text-red-600 hover:underline transition-transform transform duration-300 ease-in-out ml-1'>
                            0800 840 6800
                        </span>
                    </h1>
                </div>

                {/* Right Form Section */}
                <div className="flex justify-start items-start mt-10 lg:mt-40 w-full lg:w-full lg:mr-20">
                    <form action="submit" className="bg-white p-6 rounded-lg shadow-md w-full sm:w-full lg:w-full">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border-2 border-gray-300 p-3 w-full rounded-lg text-start mb-4 outline-none placeholder-gray-400"
                        />
                        <input
                            type="email"
                            placeholder="Your E-mail Address"
                            className="border-2 border-gray-300 p-3 w-full rounded-lg text-start mb-4 outline-none placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Your Company Name"
                            className="border-2 border-gray-300 p-3 w-full rounded-lg text-start mb-4 outline-none placeholder-gray-400"
                        />
                        <textarea
                            placeholder="How can we help?"
                            className="border-2 border-gray-300 p-3 w-full rounded-lg text-start mb-8 outline-none placeholder-gray-400"
                        />
                        <span className='flex items-center mb-4'>
                            <input type="checkbox" name="agree" className="mr-2 leading-tight text-red-800" />
                            <p className='text-gray-600'>I agree to and have read Fidelity's privacy policy.</p>
                        </span>
                        <div className="w-full">
                            <button className="bg-red-700 text-white w-full sm:w-32 py-3 rounded-lg hover:bg-blue-900">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ReportFault;
