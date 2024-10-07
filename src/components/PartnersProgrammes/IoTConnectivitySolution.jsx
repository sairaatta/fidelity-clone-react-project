import React from 'react';
import IoT from '/src/assets/images/IoT.png';
import ContactPic from '/src/assets/images/contactPic.png';

const IoTConnectivitySolution = () => {
    return (
        <>
            <section className="relative h-screen pb-24 mb-96 "> 
                <div className="relative flex flex-col md:flex-row h-full ">
                    <img
                        src={IoT}
                        alt="IoT Program"
                        className="w-full "
                    />
                    <div className="absolute left-4 md:left-20 top-1/2 transform -translate-y-1/2 p-4 md:p-8 text-white rounded-lg">
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-8 w-80 leading-10">Join our IoT Provider Partner Program</h1>
                        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 w-72 leading-9">Unlock advanced collaboration opportunities to propel your IoT solutions forward</h2>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-red-700 hover:bg-blue-900 text-white font-normal py-4 px-8 rounded hover:-translate-y-1 transition-transform duration-300">
                                Become a partner
                            </button>
                            <button className="bg-red-700 hover:bg-blue-900 text-white font-normal py-4 px-8 rounded hover:-translate-y-1 transition-transform duration-300">
                                Download our brochure
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-8 mb-96">
                    <h1 className="text-4xl text-gray-600 font-semibold text-center max-w-full w-11/12">
                        Staying ahead of the curve means more than just keeping pace — it’s about embracing cutting-edge technologies that drive transformation.
                    </h1>

                    <div className="flex flex-col md:flex-row w-full mt-8 ">
                        <div className="md:w-1/2 p-4">
                            <p className='leading-8 mb-4 text-gray-500 text-base ml-6'>As a valued partner, you’ll have a unique opportunity to elevate your offerings by providing comprehensive global IoT solutions to your customers.</p>
                            <p className='leading-8 mb-4 text-gray-500 text-base ml-6'>Powered by our latest platform, vM2M, our integrated suite includes IoT SIM management, robust IoT software, and a wide range of IoT supplier services — all conveniently housed under one roof.</p>
                            <p className='leading-8 mb-4 text-gray-500 text-base ml-6'>Whether your clients are seeking reliable IoT connectivity, scalable management solutions, or innovative hardware options, our platform ensures they have access to everything they need, 24/7.</p>
                            <p className='leading-8 mb-4 text-gray-500 text-base ml-6'>Partnering with us means delivering unparalleled value and staying at the forefront of the IoT revolution.</p>
                        </div>
                        <div className="md:w-1/2 p-4 ml-20  ">
                            <img src={ContactPic} alt="Contact" className=" h-96 w-10/12" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IoTConnectivitySolution;
