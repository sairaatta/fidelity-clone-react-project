import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/images/logo.png';
import Contact from '../pages/Contact';
const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const servicesSubItems = {
        Connectivity: ['SoGEA Broadband', 'Fibre to the Premises Broadband', 'Dedicated Leased Line Fibre'],
        IoT: ['IoT Connectivity and Solutions', 'IoT Starter Pack', 'vM2M'],
        Voice: ['Voice over IP', 'SIP Trunk Call Manager', 'Non-Geographic Numbers', 'Contact Center Solutions'],
        Payments: ['Merchant Payment Solutions', 'Mobile Card Payment Terminals', 'Virtual Terminal', 'Pay by Link'],
        Energy: ['Business Gas', 'Business Electricity', 'EV Charge Points', 'Green Energy'],
        'Business Mobile': [],
        'Cloud, Hosting and Security': [],
        Billing: []
    };

    const Partner_Programmes_subItems = {
        'Partner Programmes': ['Dealer programme', 'Referral Partner Programme', 'Wholesale Partner Programme'],
        'IoT Connectivity and Solutions': [],
        'Selling Payments': [],
        'Billing, CRM and Provisioning Platform': []
    };

    const company_subItems = {
        'About Fidelity': [],
        'Leadership Team': [],
        'Careers': [],
        'Case Studies': [],
        'Insights and News': []
    };

    const support_subItems = {
        'Report a Fault': [],
        'Emergency Location': [],
        'Cloud Fault': [],
        "Anvil Login": [],
        'Remote Support': [],
        'Terms and Conditions': []
    };

    return (
        <nav className="bg-white text-gray-500 p-4 shadow-lg">
            <div className="flex justify-between items-center container mx-auto">
                {/* Logo */}
                <div className="text-xl font-bold ">
                    <img src={Logo} alt="Logo" className="w-48 h-auto " />
                </div>

                {/* Navbar Links */}
                <div className="relative">
                    <ul className="flex space-x-8 text-base font-normal">
                        {/* Services Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setHoveredItem('Services')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <button className="flex items-center focus:outline-none hover:text-red-600">
                                Services
                                <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500 group-hover:text-red-600 transition-transform" />
                            </button>

                            {/* Submenus*/}
                            <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transform transition-opacity duration-200">
                                <ul className="py-1">
                                    {Object.keys(servicesSubItems).map((service, index) => (
                                        <li
                                            key={index}
                                            className="relative group"
                                            onMouseEnter={() => setHoveredItem(service)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <Link
                                                to={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                                                className="flex items-center justify-between px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                            >
                                                <span>{service}</span>
                                                {servicesSubItems[service].length > 0 && (
                                                    <ChevronRightIcon className="w-3 h-3 ml-2 text-gray-500 hover:text-red-500" />
                                                )}
                                            </Link>

                                            {/* Secondary Submenus */}
                                            {hoveredItem === service && servicesSubItems[service].length > 0 && (
                                                <div className="absolute left-full top-0 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                                    <ul className="py-1">
                                                        {servicesSubItems[service].map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={`/services/${service.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                                    className="block px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}


                                </ul>
                            </div>
                        </li>

                        {/* Partners programmes Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setHoveredItem('Partners Programmes')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <button className="flex items-center focus:outline-none hover:text-red-600">
                                Partners Programmes
                                <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500 group-hover:text-red-600 transition-transform" />
                            </button>

                            {/* Submenus */}
                            <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transform transition-opacity duration-200">
                                <ul className="py-1">
                                    {Object.keys(Partner_Programmes_subItems).map((service, index) => (
                                        <li
                                            key={index}
                                            className="relative group"
                                            onMouseEnter={() => setHoveredItem(service)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <Link
                                                to={`/partners-programmes/${service.toLowerCase().replace(/ /g, '-')}`}
                                                className="flex items-center justify-between px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                            >
                                                <span>{service}</span>
                                                {Partner_Programmes_subItems[service].length > 0 && (
                                                    <ChevronRightIcon className="w-3 h-3 ml-2 text-gray-500 hover:text-red-500" />
                                                )}
                                            </Link>

                                            {/* Secondary Submenus */}
                                            {hoveredItem === service && Partner_Programmes_subItems[service].length > 0 && (
                                                <div className="absolute left-full top-0 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                                    <ul className="py-1">
                                                        {Partner_Programmes_subItems[service].map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={`/partners-programmes/${service.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                                    className="block px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>


                        {/* company Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setHoveredItem('Company')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <button className="flex items-center focus:outline-none hover:text-red-600">
                                Company
                                <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500 group-hover:text-red-600 transition-transform" />
                            </button>

                            {/* Submenus*/}
                            <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transform transition-opacity duration-200">
                                <ul className="py-1">
                                    {Object.keys(company_subItems).map((service, index) => (
                                        <li
                                            key={index}
                                            className="relative group"
                                            onMouseEnter={() => setHoveredItem(service)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <Link
                                                to={`/company/${service.toLowerCase().replace(/ /g, '-')}`}
                                                className="flex items-center justify-between px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                            >
                                                <span>{service}</span>
                                                {company_subItems[service].length > 0 && (
                                                    <ChevronRightIcon className="w-3 h-3 ml-2 text-gray-500 hover:text-red-500" />
                                                )}
                                            </Link>

                                            {/* Secondary Submenus*/}
                                            {hoveredItem === service && company_subItems[service].length > 0 && (
                                                <div className="absolute left-full top-0 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                                    <ul className="py-1">
                                                        {company_subItems[service].map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={`/company/${service.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                                    className="block px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>


                        {/* support Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setHoveredItem('Company')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <button className="flex items-center focus:outline-none hover:text-red-600">
                                Support
                                <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500 group-hover:text-red-600 transition-transform" />
                            </button>

                            {/* Submenus*/}
                            <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transform transition-opacity duration-200">
                                <ul className="py-1">
                                    {Object.keys(support_subItems).map((service, index) => (
                                        <li
                                            key={index}
                                            className="relative group"
                                            onMouseEnter={() => setHoveredItem(service)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <Link
                                                to={`/support/${service.toLowerCase().replace(/ /g, '-')}`}
                                                className="flex items-center justify-between px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                            >
                                                <span>{service}</span>
                                                {support_subItems[service].length > 0 && (
                                                    <ChevronRightIcon className="w-3 h-3 ml-2 text-gray-500 hover:text-red-500" />
                                                )}
                                            </Link>

                                            {/* Secondary Submenus*/}
                                            {hoveredItem === service && support_subItems[service].length > 0 && (
                                                <div className="absolute left-full top-0 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                                    <ul className="py-1">
                                                        {support_subItems[service].map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={`/support/report-a-fault${service.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                                    className="block px-4 py-2 hover:text-red-500 hover:underline transition-all"
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                        {/* contact us */}
                        <Link
                            to="/contact" 
                            className="flex items-center px-4 focus:outline-none hover:text-red-600" 
                        >
                        Contact
                        </Link>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
