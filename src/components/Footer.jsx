import React from 'react';
import FooterLogo from '../assets/images/FooterLogo.png';
import { Link } from 'react-router-dom';
import FooterImage from '../assets/images/footerImage.png';
import { FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-200 mt-16'>
        <div className='flex flex-col md:flex-row md:space-x-12 p-12 mt-10 ml-10'>
          <div className='leading-7 w-full md:w-96 text-gray-600 '>
            <img src={FooterLogo} alt="" />
            <h1>Henley: 14 Station Rd, Henley-on-Thames,<br /> RG9 1AY</h1>
            <h1>London: Fox Court, 14 Grays Inn Rd, London WC1X 8HN</h1>
            <h1>Reg. Number: 06765669</h1>
            <h1 className='text-red-600 hover:underline hover:text-blue-800 transition-all transform mt-3'>
              <Link to='/' >www.fidelity-group.co.uk</Link>
            </h1>
          </div>

          <div className='leading-10 mt-7 w-full md:w-auto'>
            <h1 className='font-bold text-xl text-gray-600 mb-4'>Services</h1>
            <ul>
              {['Connectivity', 'Cloud and Hosting', 'Energy', 'IoT', 'Mobile', 'Voice', 'Billing', 'Payments'].map(service => (
                <li key={service} className='text-red-600 hover:underline transition duration-300 ease-in-out hover:text-red-700'>
                  <Link to={`/${service.toLowerCase().replace(/ /g, '-')}`}>{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='leading-10 mt-7 w-full md:w-auto'>
            <h1 className='font-bold text-xl text-gray-600 mb-4'>Quick links</h1>
            <ul>
              {['About', 'Contact', 'Media and News', 'Careers', 'Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Code of Practice', 'KIT Home VIP'].map(link => (
                <li key={link} className='text-red-600 hover:underline transition duration-300 ease-in-out hover:text-red-700'>
                  <Link to={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='leading-10 mt-7 w-full md:w-auto'>
            <h1 className='font-bold text-xl text-gray-600 mb-4'>Support</h1>
            <ul>
              {['Login', 'Remote Support', 'Report a Fault', 'Emergency Location', 'Cloud Fault', 'Terms and Conditions', 'Energy Complaints Procedure'].map(link => (
                <li key={link} className='text-red-600 hover:underline transition duration-300 ease-in-out hover:text-red-700'>
                  <Link to={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-7 flex flex-col items-start'>
            <img src={FooterImage} alt="" className='py-5' />
            <h1 className='flex items-center'>
              <div className='ml-0 md:ml-7'> {/* Adjusted for smaller screens */}
                <FaStar className='text-green-500 w-5 h-5' />
              </div>
              <span className='ml-1'>Trustpilot</span>
            </h1>

            {/* Stars on a new line */}
            <div className='flex flex-row mt-1 ml-0 md:ml-7'> {/* Adjusted for smaller screens */}
              {[...Array(5)].map((_, index) => (
                <div key={index} className='bg-green-500 p-1 rounded-md m-1'>
                  <FaStar className='text-white w-5 h-5' />
                </div>
              ))}
            </div>

            <div>
              <p className='text-xs ml-0 md:ml-7'>
                TrustScore <span className='font-semibold'>4.8 368</span> <span className='text-gray-600'>reviews</span>
              </p>
            </div>

          </div>

        </div>
        <div className='flex justify-center mb-4'>
          <h1 className='text-gray-600'>© 2024 Fidelity Group. All Rights Reserved</h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
