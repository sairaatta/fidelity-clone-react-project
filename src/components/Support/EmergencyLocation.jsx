import React from 'react';
import { FaCheck } from 'react-icons/fa';

const EmergencyLocation = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen mt-28 mb-72">
        <section className="flex flex-col md:flex-row justify-center mt-32 p-8 mb-2">
          {/* Text Section */}
          <div className="w-full max-w-2xl mx-auto text-left px-4 sm:px-8 md:px-0 md:w-1/2 lg:w-1/2 pt-16 sm:pt-24 md:pt-32">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-4 leading-8 sm:leading-9 md:leading-10">
              Why location address information is needed?
            </h1>
            <p className="mb-4 leading-6 sm:leading-7 text-gray-500">
              Accurate location address information is needed to ensure that accurate and precise location information is presented to the 999 operator (or even an organisational internal safety desk) when an emergency call is made from a VoIP telephone. The reason that the automatic provision of reliable location information is important is to cater for emergency situations where the caller is:
            </p>
            <ul>
              <li className="flex items-center mb-2">
                <FaCheck className="mr-2 text-red-600" />
                <span className="text-gray-500">Unable to speak</span>
              </li>
              <li className="flex items-center mb-2">
                <FaCheck className="mr-2 text-red-600" />
                <span className="text-gray-500">Disoriented; or</span>
              </li>
              <li className="flex items-center mb-2">
                <FaCheck className="mr-2 text-red-600" />
                <span className="text-gray-500">Has difficulty making themselves understood due to language or dialect issues.</span>
              </li>
            </ul>
          </div>

          {/* Form Section */}
          <div className="flex justify-end w-full mt-10 md:mt-16 md:w-1/2 lg:w-1/2">
            <form action="submit" className="w-full max-w-md md:max-w-2xl p-6 bg-white shadow-md rounded-lg">
              <h1 className="text-lg md:text-xl text-gray-500 font-bold mb-4">
                Please use this form to provide us with your exact location.
              </h1>

              {/* Form Fields */}
              {['first-name', 'last-name', 'email', 'ddi', 'address1', 'address2', 'address3', 'town', 'postcode'].map((field, index) => (
                <div className="relative mb-6" key={index}>
                  <input
                    type={field === 'postcode' ? 'number' : 'text'}
                    id={field}
                    placeholder={`Your ${field.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}`}
                    className="peer w-full p-2 border border-gray-300 rounded focus:border-red-500 focus:outline-none transition duration-300"
                  />
                  <label
                    htmlFor={field}
                    className="absolute left-2 -top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-red-500 transition-all duration-300"
                  >
                    Your {field.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}
                  </label>
                </div>
              ))}

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
        </section>

        {/* Centered Div Below Section */}
        <div className="flex flex-col items-center justify-center mt-8 px-4 sm:px-6 md:px-8 lg:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-4">Moral Obligations</h1>

          <div className="flex flex-col items-center justify-center w-full">
            <p className='max-w-full lg:w-5/6 sm:w-4/6 md:w-3/6 p-4 text-center text-gray-600 leading-7'>
              Irrespective of the regulatory and legal obligations, all organisations and home users have a moral duty of care to provide maximum protection for their workforce, family, and visitors to their premises. Therefore, ensuring that precise and accurate location information is delivered with a 999 call from their private telephone network is simply the right thing for an organisation to do. Doing the right thing ensures that anyone in their workforce who is in the unfortunate situation of having to make an emergency call would receive the necessary assistance as quickly as possible.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default EmergencyLocation;
