import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DropdownComponent = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index); 
    };

    return (
        <div className="space-y-6 mx-auto flex flex-col items-center justify-center p-8 shadow-lg max-w-full w-11/12">
            <div className="max-w-full w-4/12 text-gray-500 hover:text-white mb-8">
                <div
                    className={`flex items-center cursor-pointer transition-transform duration-300 rounded-lg p-6 ${openDropdown === 1 ? 'bg-blue-950 text-white' : 'text-gray-500 hover:text-white hover:bg-blue-950'
                        }`}
                    onClick={() => toggleDropdown(1)}
                >
                    <h1 className="text-xl font-medium">Who are Fidelity Group?</h1>

                    <span className="ml-2 mt-1">
                        {openDropdown === 1 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                </div>

                {openDropdown === 1 && (
                    <p className="mt-2 text-gray-600">
                        The Fidelity name has been trusted in the telecoms market for over 40 years. Over that time, we have developed a highly successful partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, broadband and utility solutions for our partners. The awards that we have won speak volumes about our ongoing success story. We have been featured twice in The Sunday Times TechTrack 100 listing and are regularly awarded by our industry peers.                    </p>
                )}
            </div>

            <div className="max-w-full w-4/12 text-gray-500 hover:text-white mb-8">
                <div
                    className={`flex items-center cursor-pointer transition-transform duration-300 rounded-lg p-6 ${openDropdown === 2 ? 'bg-blue-950 text-white' : 'text-gray-500 hover:text-white hover:bg-blue-950'
                        }`}
                    onClick={() => toggleDropdown(2)}
                >
                    <h1 className="text-xl font-medium">How can you support our business to win?</h1>

                    <span className="ml-2 mt-1">
                        {openDropdown === 2 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                </div>

                {openDropdown === 2 && (
                    <p className="mt-2 text-gray-600">
                        Working together we will help you to build new and lasting revenue streams and give you the tools to create opportunities, increase profitability and ultimately close your deals quicker. Our wide range of products and services provide you with improved revenue opportunities within your customer base and equip you with greater opportunities to acquire new customers. In addition, we have a compelling margin share, applied equally to new and existing revenues.                    </p>
                )}
            </div>

            <div className="max-w-full w-4/12 text-gray-500 hover:text-white mb-8">
                <div
                    className={`flex items-center cursor-pointer transition-transform duration-300 rounded-lg p-6 ${openDropdown === 3 ? 'bg-blue-950 text-white' : 'text-gray-500 hover:text-white hover:bg-blue-950'
                        }`}
                    onClick={() => toggleDropdown(3)}
                >
                    <h1 className="text-xl font-medium">How do we get a quote?</h1>

                    <span className="ml-2 mt-1">
                        {openDropdown === 3 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                </div>

                {openDropdown === 3 && (
                    <p className="mt-2 text-gray-600">
                        As a partner of Fidelity Group you will have access to our market-leading business management system, Anvil (www.anvilhub.com) which can provide instant quotes to all your clients. Alternatively, you will have a dedicated business manager who can assist you to do this.                    </p>
                )}
            </div>

            <div className="max-w-full w-4/12 text-gray-500 hover:text-white mb-8">
                <div
                    className={`flex items-center cursor-pointer transition-transform duration-300 rounded-lg p-6 ${openDropdown === 4 ? 'bg-blue-950 text-white' : 'text-gray-500 hover:text-white hover:bg-blue-950'
                        }`}
                    onClick={() => toggleDropdown(4)}
                >
                    <h1 className="text-xl font-medium">Can you do the billing for us?</h1>

                    <span className="ml-2 mt-1">
                        {openDropdown === 4 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                </div>

                {openDropdown === 4 && (
                    <p className="mt-2 text-gray-600">
                        As a partner of Fidelity Group, you will be able to access to our market-leading business management system, Anvil (www.anvilhub.com). This fully integrated customer management and billing platform equips you and your business with the ability to automate all your end-user billing.                    </p>
                )}
            </div>

            <div className="max-w-full w-4/12 text-gray-500 hover:text-white mb-8">
                <div
                    className={`flex items-center cursor-pointer transition-transform duration-300 rounded-lg p-6 ${openDropdown === 5 ? 'bg-blue-950 text-white' : 'text-gray-500 hover:text-white hover:bg-blue-950'
                        }`}
                    onClick={() => toggleDropdown(5)}
                >
                    <h1 className="text-xl font-medium">Why should we partner with Fidelity Group?</h1>

                    <span className="ml-2 mt-1">
                        {openDropdown === 5 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                </div>

                {openDropdown === 5 && (
                    <p className="mt-2 text-gray-600">
                        For our partners, we have developed a dynamic partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, Broadband and Utility solutions for our partners. Our synergistic approach is designed to provide your business with greater value for both existing and new customers who require these essential services. With many long-standing relationships with all major communications vendors, including Platinum Partner status with Gamma Telecoms, JUC status with O2 and Global Partner status with Telefonica. We are trusted by our partners to deliver value added solutions supported by exemplary service, securing loyalty from our partners. These principles are at the core of our channel proposition and lie at the heart of our business.                    </p>
                )}
            </div>
        </div>
    );
};

export default DropdownComponent;
