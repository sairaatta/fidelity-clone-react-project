import React from 'react';
import { FaStar, FaReact, FaArrowRight, FaGlobe, FaBolt, FaMobileAlt, FaNetworkWired, FaCloudDownloadAlt, FaHeadset, FaExchangeAlt, FaCogs, FaBezierCurve } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import scrollImage1 from '../assets/images/scroll1.png';
import scrollImage2 from '../assets/images/scroll2.png';
import scrollImage3 from '../assets/images/scroll3.png';
import scrollImage4 from '../assets/images/scroll4.png';
import scrollImage5 from '../assets/images/scroll5.png';
import scrollImage6 from '../assets/images/scroll6.png';
import scrollImage7 from '../assets/images/scroll7.png';
import scrollImage8 from '../assets/images/scroll8.png';
import scrollImage9 from '../assets/images/scroll9.png';
import star from '../assets/images/star.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import contactPic from '../assets/images/contactPic.png';
const YourComponent = () => {
    return (
        <section>
            <div
                style={{
                    backgroundImage: `url(https://www.fidelity-group.co.uk/wp-content/uploads/2022/08/Fidelity-UK-Home.jpg)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '600px',
                    width: '1500px',
                    backgroundColor: 'lightgray',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                }}
            >
                <div className='text-center font-bold text-6xl'>
                    <p className='font-bold text-2xl leading-10'>
                        Business broadband, telecoms, IoT, software, and energy procurement solutions.
                    </p>
                    <h1 className='text-6xl font-bold'>
                        <span className='text-red-600'>Empowering </span> everything as a <span className='text-red-600'>service</span>
                    </h1>
                </div>
            </div>
            <div className='mt-10 flex justify-center'>
                <div className='flex items-center'>
                    <h1 className='flex items-center mr-2'>Excellent</h1>
                    <div className='flex items-center'>
                        <div className='flex flex-row'>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className='bg-green-500 p-1 rounded-md m-1'>
                                    <FaStar className='text-white w-5 h-5' />
                                </div>
                            ))}
                        </div>
                        <FaStar className='text-green-500 w-5 h-5 ml-1' />
                        <p className='ml-1'>Trustpilot</p>
                    </div>
                </div>
            </div>


            <div className='text-5xl font-bold justify-center text-center mt-4'>
                <h1 className='text-gray-500'>The <span className='text-red-700'> X factor</span> for your business</h1>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 px-4 sm:px-10 md:px-20 mb-10">
                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6">
                    <FaGlobe className="text-red-700" size={50} />
                    <h1 className="font-bold text-gray-600 leading-10">Connectivity and Data</h1>
                    <p className="text-gray-500 font-normal text-base leading-7">
                        Connect to super fast, reliable business broadband and ethernet connectivity across the UK.
                    </p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/connectivity-and-data" className="flex items-center">
                            Connectivity and Data
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>


                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6">
                    <FaBolt className="text-red-700" size={50} />
                    <h1 className="font-bold">Business Energy</h1>
                    <p>Don't be left in the dark or break the bank with high energy costs. We have the know-how. Let us procure and manage energy requirements for your business.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/energy" className="flex items-center">
                            Energy
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>

                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6 ">
                    <FaMobileAlt className="text-red-700" size={50} />
                    <h1 className="font-bold">Business Mobile</h1>
                    <p>Let your business roam with us. We have business mobile plans that won't let you down. Connect to the UK's biggest network through us.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/business-mobile" className="flex items-center">
                            Business Mobile
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>

                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6 ">
                    <FaNetworkWired className="text-red-700" size={50} />
                    <h1 className="font-bold">Internet of Things</h1>
                    <p>With vM2M, a supplier-agnostic, easy-to-use platform making IoT connectivity management as simple as 1..2..3.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/iot" className="flex items-center">
                            IoT
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>

                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6 ">
                    <FaCloudDownloadAlt className="text-red-700" size={50} />
                    <h1 className="font-bold">Cloud</h1>
                    <p>Let's get your business in the cloud. Bespoke design and implementation of business IT and cloud strategies is our game.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/cloud-and-hosting" className="flex items-center">
                            Cloud and Hosting
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>

                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6 ">
                    <FaHeadset className="text-red-700" size={50} />
                    <h1 className="font-bold">Voice/VoIP & Hosted Telephony</h1>
                    <p>Use the latest VoIP technology. Keep your business and customers connected with unified communications.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/voice-and-hosted-telephony" className="flex items-center">
                            Voice and Hosted Telephony
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>

                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6 ">
                    <FaExchangeAlt className="text-red-700" size={50} />
                    <h1 className="font-bold">Billing </h1>
                    <p>An award winning billing solution. Empower your business with a comprehensive telecoms customer management and billing platform.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/billing" className="flex items-center">
                            Billing
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>


                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6 ">
                    <FaCogs className="text-red-700" size={50} />
                    <h1 className="font-bold">Payment Solutions </h1>
                    <p>Improve efficiency and save! We offer a serviced, consultative, and managed approach to merchants payment solutions.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/payments" className="flex items-center">
                            Payments
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>

                <div className="h-80 flex flex-col items-center text-center p-4 border rounded-lg transition-transform duration-300 hover:translate-y-[-5px] max-w-full w-5/6 ">
                    <FaBezierCurve className="text-red-700" size={50} />
                    <h1 className="font-bold">Fidelity Partner Programme </h1>
                    <p>Join club Fidelity. The most customer centric reseller partner programme in the UK.</p>
                    <button className="p-6 text-red-600 hover:text-blue-800">
                        <Link to="/partner-programme" className="flex items-center">
                            Partner Programme
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </button>
                </div>



                {/* You can continue adding more cards here */}
            </div>

            <div className='space-x-8 flex justify-center '>
                <button className='px-9 py-4 border-3 rounded-lg bg-red-700 text-white hover:bg-blue-900  transition-transform duration-300 hover:translate-y-[-5px]'>Get a Quote</button>
                <span>
                    <button className='px-8 py-4 border-2 border-red-700 rounded-lg bg-white text-red-600 hover:text-white hover:bg-blue-900  transition-transform duration-300 hover:translate-y-[-5px]'>Call us Today</button>
                </span>
            </div>


            <div className='flex justify-center mt-24'>
                <h2 className='font-semibold  text-lg text-gray-400'>Discover Fidelity Group</h2>
            </div>
            <div className='flex justify-center mt-6'>
                <h1 className='text-4xl font-bold text-gray-500'>We’ve been thriving <span className='text-red-700'>since 2008</span></h1>

            </div>


            <div className='flex justify-center mt-10 space-x-8'>
                <div>
                    <button className='text-md border-2 border-white hover:border-red-600 hover:text-red-600 text-gray-600 px-28 py-4 rounded-sm transition-transform duration-300'>
                        OUR MISSION
                    </button>
                </div>
                <span>
                    <div>
                        <button className='text-md border-2 border-red-600 px-24 py-4 rounded-sm'>
                            TECH AND TELECOMS PARTNERS
                        </button>
                        <img src="https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-80.webp" className='h-auto w-96 mt-8  mx-auto' alt="" />
                    </div>
                </span>
                <div>
                    <button className='text-md border-2 border-white hover:border-red-600 hover:text-red-600 text-gray-600 px-28 py-4 rounded-sm transition-transform duration-300'>
                        ENERGY PARTNERS
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center mt-20">
                {/* Section Title */}
                <h1 className="text-gray-600 text-4xl font-bold mb-6">
                    Fidelity Group – Multi-award winners
                </h1>

                {/* Swiper Slider */}
                <div className="w-full p-6">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        className="lg:w-[80rem]"
                    >
                        <SwiperSlide>
                            <img src={scrollImage1} alt="Award 1" className="w-96 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage2} alt="Award 2" className="w-80 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage3} alt="Award 3" className="w-80 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage4} alt="Award 4" className="w-96 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage5} alt="Award 5" className="w-80 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage6} alt="Award 6" className="w-96 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage7} alt="Award 7" className="w-80 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage8} alt="Award 7" className="w-80 h-72" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={scrollImage9} alt="Award 7" className="w-80 h-72" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='mt-6' >
                    <button className='px-10 py-4 border-2 bg-transparent hover:bg-red-700 text-red-700 hover:text-white rounded-lg transition-transform duration-300 hover:translate-y-[-5px]'>Find out more </button>
                </div>
            </div>

            <div className='w-screen flex flex-col items-center mt-10'>
                <h3 className='text-xl text-gray-400 font-bold mb-7' >Testimonials</h3>
                <h1 className='text-3xl font-bold text-gray-600'>What our customers have to say.</h1>

                <div className='flex flex-row justify-center w-9/12 overflow-hidden'>
                    <Swiper
                        centeredSlides={true}
                        spaceBetween={0}
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                        }}
                        className='w-4/5 ml-0'
                    >
                        <SwiperSlide>
                            <div className='w-96 p-8 shadow-lg shadow-gray-400'>
                                <div className="flex items-center space-x-4">
                                    <img src={star} alt="" className="rounded-full w-24 h-24" />
                                    <div className="flex flex-row mt-1 ml-0 md:ml-7">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="bg-white p-1 rounded-md">
                                                <FaStar className="text-yellow-500 w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ml-16">
                                    <h1 className="font-bold">MATTHEW FINN
                                        <span className="text-base font-normal text-gray-500"> / Business Manager</span>
                                    </h1>
                                </div>
                                <div className='p-4'>
                                    <p className='text-gray-600 text-base leading-7 font-normal'>
                                        Been a hosted telephony customer of Fidelity now for almost a year and be delighted with the service.
                                        The tech support is first class as you get a dedicated adviser to handle your case all the way through, which I love!
                                        I would definitely recommend.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-96 p-8 shadow-lg shadow-gray-400'>
                                <div className="flex items-center space-x-4">
                                    <img src={star} alt="" className="rounded-full w-24 h-24" />
                                    <div className="flex flex-row mt-1 ml-0 md:ml-7">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="bg-white p-1 rounded-md">
                                                <FaStar className="text-yellow-500 w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ml-16">
                                    <h1 className="font-bold">MATTHEW FINN
                                        <span className="text-base font-normal text-gray-500"> / Business Manager</span>
                                    </h1>
                                </div>
                                <div className='p-4'>
                                    <p className='text-gray-600 text-base leading-7 font-normal'>
                                        Been a hosted telephony customer of Fidelity now for almost a year and be delighted with the service.
                                        The tech support is first class as you get a dedicated adviser to handle your case all the way through, which I love!
                                        I would definitely recommend.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-96 p-8 shadow-lg shadow-gray-400'>
                                <div className="flex items-center space-x-4">
                                    <img src={star} alt="" className="rounded-full w-24 h-24" />
                                    <div className="flex flex-row mt-1 ml-0 md:ml-7">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="bg-white p-1 rounded-md">
                                                <FaStar className="text-yellow-500 w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ml-16">
                                    <h1 className="font-bold">MATTHEW FINN
                                        <span className="text-base font-normal text-gray-500"> / Business Manager</span>
                                    </h1>
                                </div>
                                <div className='p-4'>
                                    <p className='text-gray-600 text-base leading-7 font-normal'>
                                        Been a hosted telephony customer of Fidelity now for almost a year and be delighted with the service.
                                        The tech support is first class as you get a dedicated adviser to handle your case all the way through, which I love!
                                        I would definitely recommend.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-96 p-8 shadow-lg shadow-gray-400'>
                                <div className="flex items-center space-x-4">
                                    <img src={star} alt="" className="rounded-full w-24 h-24" />
                                    <div className="flex flex-row mt-1 ml-0 md:ml-7">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="bg-white p-1 rounded-md">
                                                <FaStar className="text-yellow-500 w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ml-16">
                                    <h1 className="font-bold">MATTHEW FINN
                                        <span className="text-base font-normal text-gray-500"> / Business Manager</span>
                                    </h1>
                                </div>
                                <div className='p-4'>
                                    <p className='text-gray-600 text-base leading-7 font-normal'>
                                        Been a hosted telephony customer of Fidelity now for almost a year and be delighted with the service.
                                        The tech support is first class as you get a dedicated adviser to handle your case all the way through, which I love!
                                        I would definitely recommend.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-96 p-8 shadow-lg shadow-gray-400'>
                                <div className="flex items-center space-x-4">
                                    <img src={star} alt="" className="rounded-full w-24 h-24" />
                                    <div className="flex flex-row mt-1 ml-0 md:ml-7">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="bg-white p-1 rounded-md">
                                                <FaStar className="text-yellow-500 w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ml-16">
                                    <h1 className="font-bold">MATTHEW FINN
                                        <span className="text-base font-normal text-gray-500"> / Business Manager</span>
                                    </h1>
                                </div>
                                <div className='p-4'>
                                    <p className='text-gray-600 text-base leading-7 font-normal'>
                                        Been a hosted telephony customer of Fidelity now for almost a year and be delighted with the service.
                                        The tech support is first class as you get a dedicated adviser to handle your case all the way through, which I love!
                                        I would definitely recommend.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <div className='flex flex-col md:flex-row justify-center py-10 px-4 md:px-32 space-y-8 md:space-y-0 md:space-x-8'>
                <div className='md:w-1/3'>
                    <h3 className='text-gray-400 font-bold text-lg mb-6'>IN THE MEDIA</h3>
                    <h1 className='text-gray-500 font-bold text-5xl mb-8'>Press releases,<span className='text-red-700'>  blogs</span> and videos</h1>
                    <ul className='text-red-700 font-bold space-y-5'>
                        {[
                            'From 2G to 5G and beyond in IoT',
                            'CNA Awards - Winners of Best Reseller Innovation 2024',
                            'Why companies should avoid using mobile phone SIMs in IoT applications',
                            'Summer is the best time to sign a new energy contract but time is running out!',
                            'What is a fixed IP SIM card?'
                        ].map((item, index) => (
                            <li key={index} className='flex items-center hover:cursor-pointer transition-all'>
                                <span className='flex items-center group'>
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="mr-4 transition-transform duration-300 group-hover:-translate-y-1"
                                    />
                                    <span className='transition-opacity duration-300'>
                                        {item}
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='md:w-1/3 flex flex-col items-center'>
                    <img src={image1} alt="" className='rounded-lg mb-5 w-full' />
                    <div className='flex items-center ml-2 mb-2'>
                        <FontAwesomeIcon icon={faCalendar} className='text-gray-400' />
                        <span className='ml-2 text-gray-600'>Date: MM/DD/YYYY</span> {/* You can replace this with dynamic data if needed */}
                    </div>
                    <div className='text-center'>
                        <h1 className='text-gray-500 font-bold text-xl sm:text-2xl mt-4'>
                            <Link className='hover:text-red-700 transition-transform duration-200'>From 2G to 5G and beyond in IoT</Link>
                        </h1>
                        <p className='mt-4 text-gray-500 font-medium text-sm sm:text-base'>
                            From the beginnings of 2G to the innovations of 5G and beyond, we explore …
                        </p>
                        <button className='mt-5 py-2 px-4 shadow-lg shadow-gray-400 text-red-700 flex items-center justify-center hover:bg-red-700 hover:text-white transition duration-300'>
                            Read more
                            <span className='ml-2'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </button>
                    </div>
                </div>


                <div className='md:w-1/3 flex flex-col items-center'>
                    <img src={image2} alt="" className='rounded-lg mb-5 w-full' />
                    <div className='flex items-center ml-2 mb-2'>
                        <FontAwesomeIcon icon={faCalendar} className='text-gray-400' />
                        <span className='ml-2 text-gray-600'>Date: MM/DD/YYYY</span> {/* You can replace this with dynamic data if needed */}
                    </div>
                    <div className='text-center'>
                        <h1 className='text-gray-500 font-bold text-xl sm:text-2xl mt-4'>
                            <Link className='hover:text-red-700 transition-transform duration-200'>CNA Awards – Winners of Best Reseller Innovation 2024</Link>
                        </h1>
                        <p className='mt-4 text-gray-500 font-medium text-sm sm:text-base'>
                            We've been recognized as the winner of the CNA Best Reseller Innovation award 2024! …
                        </p>
                        <button className='mt-5 py-2 px-4 shadow-lg shadow-gray-400 text-red-700 flex items-center justify-center hover:bg-red-700 hover:text-white transition duration-300'>
                            Read more
                            <span className='ml-2'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </button>
                    </div>
                </div>

            </div>

            <div>
                <section className='flex flex-col lg:flex-row justify-between items-start p-6 lg:p-10'>
                    <div className='lg:ml-20 mt-10 lg:mt-20 w-full lg:w-1/2'>
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
                                    type='tel'
                                    placeholder='Contact Number'
                                    className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 outline-none placeholder-gray-500'
                                />
                                <input
                                    type='email'
                                    placeholder='E-mail'
                                    className='border-2 border-gray-400 p-3 w-full lg:w-1/2 rounded-lg text-start mb-4 lg:ml-4 outline-none placeholder-gray-500'
                                />
                            </div>

                            <textarea
                                placeholder='Message'
                                className='border-2 border-gray-400 p-3 w-full lg:w-11/12 rounded-lg text-start outline-none mb-4 placeholder-gray-500'
                            />

                            <span className='flex items-center mb-4'>
                                <input type="checkbox" name="agree" className="mr-2 leading-tight text-red-800" />
                                <p className='text-gray-600'>I agree to and have read Fidelity's privacy policy.</p>
                            </span>

                            <div className='w-32 mt-4 '>
                                <button className='bg-red-700 rounded-lg text-white w-full py-3 hover:bg-blue-900'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col justify-center items-center mt-0 lg:mt-24'>
                        <img
                            src={contactPic}
                            alt="Contact Us"
                            className='w-full lg:w-4/5 h-auto object-cover'
                        />
                    </div>
                </section>
            </div>














        </section>
    );
};

export default YourComponent;
