import React from 'react';
import QRCodeImage from "/src/assets/images/QRCode.png";
import { useState } from 'react';

const SupportRequest = () => {
    const [selectedFault, setSelectedFault] = useState('');
    return (
        <>
            <div className='w-full p-8 lg:p-16 mt-16 lg:mt-32 lg:ml-32'>
                <h1 className='text-gray-600 mb-4 lg:mb-7 text-2xl lg:text-4xl font-bold'>
                    <span className='font-bold text-blue-950'> | </span> Log a <span className='text-red-700'>support</span> request
                </h1>
                <p className='leading-7 lg:leading-8 font-normal mb-4 text-md lg:text-lg text-gray-500'>
                    Scan the below QR code to open a new text message to send our way.
                </p>
                <h1 className='text-gray-500 text-md lg:text-lg'>
                    E-mail:
                    <span className='text-red-600 hover:underline transition-transform transform duration-300 ease-in-out ml-1'>
                        cloud@fidelity-group.co.uk
                    </span>
                </h1>
                <h1 className='text-gray-500 text-md lg:text-lg'>
                    Tel:
                    <span className='text-red-600 hover:underline transition-transform transform duration-300 ease-in-out ml-1'>
                        03330 15 15 01
                    </span>
                </h1>

                {/* QR Code Section */}
                <div className="flex justify-start mt-8">
                    <img src={QRCodeImage} alt="QR Code" className="w-64 h-64" />
                </div>
            </div>

            {/* Form Section */}
            <div className="flex justify-start w-full mr-40 mt-44 md:mt-28 md:w-1/2 lg:w-11/12">
                <form action="submit" className="w-full max-w-md md:max-w-2xl p-6 bg-white shadow-md rounded-lg">


                    {/* Form Fields */}
                    {[
                        { name: 'first-name', placeholder: 'Your First Name' },
                        { name: 'last-name', placeholder: 'Your Last Name' },
                        { name: 'phone-number', placeholder: 'Your Phone Number' },
                        { name: 'company-name', placeholder: 'Your Company Name' },
                        { name: 'email', placeholder: 'Your Email' },
                        { name: 'fault-type', placeholder: '-Fault Type: select a option -', isSelect: true }, // Added select field
                    ].map((field, index) => (
                        <div className="relative mb-6" key={index}>
                            {field.isSelect ? (
                                <div className="relative">
                                    <input
                                        type="text"
                                        id={field.name}
                                        value={selectedFault} // Display the selected fault in the input
                                        placeholder=" " // Set placeholder to a space to trigger the label animation
                                        className="peer w-full p-2 border border-gray-300 rounded focus:border-red-500 focus:outline-none transition duration-300"
                                        readOnly // Make it read-only to prevent direct editing
                                        onClick={() => {
                                            // Show dropdown on click
                                            const dropdown = document.getElementById(`${field.name}-dropdown`);
                                            dropdown.classList.toggle('hidden');
                                        }}
                                    />
                                    <ul
                                        id={`${field.name}-dropdown`}
                                        className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg mt-1 hidden"
                                    >
                                        {['Admin Change', 'Single Extension Fault', 'Affecting All Extensions', 'Connectivity Issue', 'Other'].map((option, i) => (
                                            <li
                                                key={i}
                                                className="p-2 hover:bg-red-600 hover:text-white cursor-pointer transition duration-200"
                                                onClick={() => {
                                                    // Set selected fault and hide dropdown
                                                    setSelectedFault(option);
                                                    const dropdown = document.getElementById(`${field.name}-dropdown`);
                                                    dropdown.classList.add('hidden'); // Hide dropdown after selection
                                                }}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <input
                                    type={field.name === 'phone-number' ? 'tel' : 'text'}
                                    id={field.name}
                                    placeholder=" " // Set placeholder to a space to trigger the label animation
                                    className="peer w-full p-2 border border-gray-300 rounded focus:border-red-500 focus:outline-none transition duration-300"
                                />
                            )}
                            <label
                                htmlFor={field.name}
                                className="absolute left-2 -top-2.5 text-gray-500 text-sm transition-all duration-300 transform origin-[0_0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-red-500"
                            >
                                {field.placeholder}
                            </label>
                        </div>
                    ))}


                    {/* Fault Description Text Area */}
                    <div className="relative mb-6">
                        <textarea
                            id="fault-description"
                            placeholder=" " // Set placeholder to a space to trigger the label animation
                            className="peer w-full p-2 border border-gray-300 rounded focus:border-red-500 focus:outline-none transition duration-300"
                        />
                        <label
                            htmlFor="fault-description"
                            className="absolute left-2 -top-2.5 text-gray-500 text-sm transition-all duration-300 transform origin-[0_0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-red-500"
                        >
                            Your Fault Description
                        </label>
                    </div>





                    {/* Privacy Policy Checkbox */}
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

                    {/* Submit Button */}
                    <button className="w-full sm:w-28 bg-red-700 text-white py-2 rounded hover:bg-blue-800 transition">
                        Submit
                    </button>
                </form>
            </div>
        </>

    );
};

export default SupportRequest;
