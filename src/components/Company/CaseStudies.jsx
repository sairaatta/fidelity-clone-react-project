import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import tigger from '/src/assets/images/tigger.png'; // Replace with your image path
import express from '/src/assets/images/express.png'; // Replace with your image path
import invictus from '/src/assets/images/invictus.png'; // Replace with your image path
import ContactPic from '/src/assets/images/contactPic.png';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCategory, setHoveredCategory] = useState(null); // State to track the hovered category

  const caseStudies = [
    {
      title: 'Tigers Telecoms',
      description: 'Leicester Tigers is a professional rugby union club based in Leicester, England. It plays Premiership Rugby, England\'s top division of rugby. The club was founded in 1880 and …',
      services: 'Cloud Services, Connectivity and Data, Energy, Hosted Telephony, Voice Over IP',
      image: tigger,
    },
    {
      title: 'Invictus Communications',
      description: 'Invictus Group are a multi award winning IT, Telecoms and Energy provider with over 100 years of combined industry knowledge. …',
      services: 'Billing Platform, Cloud Services, Connectivity and Data, Cyber Security, Energy, Hosted Telephony, IT Consultancy, IT Security, Partner Programme Case study category, Voice Over IP',
      image: express,
    },
    {
      title: 'Mission Express',
      description: 'Mission Express is a worldwide document and parcel express courier based at London’s Heathrow Airport. British-owned, with over 18 years’ experience, they provide flexible, cost effective and reliable …',
      services: 'Cloud Services, Energy, Hosted Telephony, IT Consultancy',
      image: invictus,
    },
  ];

  const categoryCounts = {
    'All': caseStudies.length,
    'Billing Platform': 1,
    'Cloud Services': 3,
    'Connectivity and Data': 2,
    'Cyber Security': 1,
    'Energy': 3,
    'Hosted Telephony': 3,
    'IT Consultancy': 2,
    'IT Security': 1,
    'Partner Programme Case study Category': 1,
    'Voice Over IP': 2,
  };

  const filterCaseStudies = (category) => {
    if (category === '') return [];
    return category === 'All' ? caseStudies : caseStudies.filter(cs => cs.services.toLowerCase().includes(category.toLowerCase()));
  };

  return (
    <div>
      <div className='max-w-full w-9/12 h-56 overflow-hidden mx-auto mt-20 items-center ml-24'>
        <h1 className='text-gray-600 text-4xl font-bold p-6 '>Case Studies</h1>

        <ul className='flex flex-wrap flex-row p-8  space-x-10 text-lg justify-center font-medium text-red-700 leading-9'>
          {Object.keys(categoryCounts).map(category => (
            <li
              className="message-button-container"
              key={category}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button
                className={`focus:outline-none ${selectedCategory === category ? 'underline' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setHoveredCategory(null);
                }}
              >
                {category}
              </button>
              <div className="msg-icon">{hoveredCategory === category ? categoryCounts[category] : ''}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 p-2 '>
        {filterCaseStudies(selectedCategory).map((caseStudy, index) => (
          <div className='max-w-full sm:w-4/12 mt-4 sm:mt-0  transition-transform transform duration-300 ease-in-out hover:scale-105 shadow-lg rounded-lg overflow-hidden'>
            <img src={caseStudy.image} alt={caseStudy.title} className='w-full h-auto' />
            <h1 className='text-start px-4 py-2 text-gray-600 font-medium text-lg'>{caseStudy.title}</h1>
            <p className='text-base px-4 text-red-600 cursor-pointer'>{caseStudy.services}</p>
            <h2 className='px-4 py-3 w-11/12'>{caseStudy.description}</h2>
            <button className='px-40 max-w-full py-4 mt-8 hover:bg-red-700 hover:text-white transition-all transform duration-300 hover:-translate-y-2 flex items-center space-x-2 whitespace-nowrap'>
              View case study
              <FaArrowRight className='ml-2 mt-1' />
            </button>
          </div>
        ))}
      </div>

      <div>
        <section className='flex flex-col lg:flex-row justify-between items-start p-4 lg:p-10'>
          <div className='lg:ml-28 mt-0 lg:mt-20 w-full lg:w-11/12'>
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
  );
};

export default CaseStudies;
