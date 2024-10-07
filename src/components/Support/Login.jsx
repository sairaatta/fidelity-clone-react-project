import React from 'react';
import logoImg from '/src/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <>
      <section>
        <div className='w-full flex justify-between items-center p-6'>
          <img src={logoImg} alt="Logo" className='h-24' /> {/* Adjust height for responsiveness */}
          <button className='px-6 py-2 mr-20 bg-blue-900 text-white rounded hover:bg-blue-700'>
            Login
          </button>
        </div>

        <div className='bg-blue-950 h-16 w-screen'></div>
        <div className='p-6'>
          <div>
            <h1 className='text-3xl font-semibold text-gray-800 text-center md:text-left'>Login</h1> {/* Centered on small screens */}
          </div>

          <div className="flex items-center justify-center mt-1">
            <div className='justify-center rounded-lg flex flex-col border-2 border-gray-400 max-w-full w-96 md:w-72'>
              <div className='bg-blue-500 text-gray-300 text-center h-24 p-8 text-xl font-bold'>Anvil Login</div>
              <input type="text" placeholder='Username' className='p-2 border-2 border-gray-300 outline-gray-300 mt-4 m-4 rounded-md' />
              <input type="password" placeholder='Password' className='p-2 border-2 border-gray-300 outline-gray-300 mt-0 m-4 rounded-md' />
              <button className='p-2 border-2 bg-blue-500 hover:bg-blue-600 text-white text-lg mt-0 m-4 rounded-md'>Login</button>
              <div className="flex items-center space-x-2 mx-4">
                <input type="checkbox" name="Remember-me" className="form-checkbox" />
                <span className="text-sm">Remember me</span>
              </div>
              <p className='text-blue-600 text-xs mx-4 mb-6 hover:underline cursor-pointer mt-6 text-center'>Forgotten your password?</p>
            </div>
          </div>

          <div className='max-w-full w-80 md:w-72 mt-6 mx-auto items-center bg-red-100 p-2'>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-700 mr-1" />
              <span className="text-yellow-700 font-semibold">Warning:</span>
            </div>
            <p className='m-2 text-justify text-sm text-yellow-700'>This is a secure site and all access attempts are logged along with the IP address. We use this information to trace and prosecute illegal attempts to gain access to our systems.</p>
          </div>

          <div className='mt-20 mb-8'>
            <hr className='border-t border-black w-screen' />
            <h1 className='flex justify-between text-sm'>
              <span>
                Fidelity Group, 37/41 Bedford Row, London, WC1R 4JH, No.: 06765669
              </span>
              <span className='text-end mr-8 md:mr-16'>
                Copyright © 2005-2024 Anvil
              </span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
