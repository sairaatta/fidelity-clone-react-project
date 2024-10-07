import React from 'react';
import ContactImage from '../assets/images/contactImage.png';

const Contact = ({imageSrc}) => {
  return (
    <>
      <section className='flex flex-col lg:flex-row justify-between items-start p-6 lg:p-10'>
        <div className='lg:ml-20 mt-10 lg:mt-20 w-full lg:w-1/2'>
          <h1 className='text-gray-600 mb-5 text-3xl lg:text-5xl font-bold text-center lg:text-left'>Talk to us today</h1>
          <p className='lg:w-3/5 mb-8 lg:mb-10 text-gray-600 leading-7 text-center lg:text-left'>
            We’d love to talk to you if you are considering using one of our outstanding services. Or if you’d like to find out how you can become one of our trusted partners. We have a team of experts ready to help you.
          </p>
          <form action='submit' className='w-full flex flex-col items-center lg:items-start'>
            <div className='flex flex-col lg:flex-row w-full lg:w-11/12'>
              <input
                type='text'
                placeholder='Your Name'
                className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 outline-none placeholder-gray-500'
              />
              <input
                type='text'
                placeholder='Your Company Name'
                className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 lg:ml-4 outline-none placeholder-gray-500'
              />
            </div>

            <div className='flex flex-col lg:flex-row w-full lg:w-11/12'>
              <input
                type='email'
                placeholder='Your E-mail Address'
                className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 outline-none placeholder-gray-500'
              />
              <input
                type='tel'
                placeholder='Your Contact Number'
                className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 lg:ml-4 outline-none placeholder-gray-500'
              />
            </div>

            <textarea
              placeholder='How can we help?'
              className='border-2 border-gray-400 p-3 w-full lg:w-11/12 rounded-lg text-start outline-none mb-8 placeholder-gray-500'
            />

            <div className='w-full lg:w-11/12'>
              <button className='bg-red-700 text-white w-full py-3 hover:bg-blue-900'>
                Send
              </button>
            </div>
          </form>
        </div>


        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center mt-10 lg:mt-40'>
          <img
            src={ContactImage}
            alt="Contact Us"
            className='w-full lg:w-4/5 h-auto object-cover'
          />
          <div className='mt-6 text-center'>
            <h1 className='text-gray-500 text-2xl font-bold mb-3'>Prefer to pick up the phone and talk to us?</h1>
            <p className='text-gray-500'>
              <span className='text-gray-500 text-base font-medium'>Call 0800 840 6800</span> to talk to us about any of our services or partnerships.
            </p>
          </div>
        </div>
       
      </section>
    </>
  );
}

export default Contact;
