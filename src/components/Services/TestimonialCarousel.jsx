import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import star from '/src/assets/images/star.png';

const testimonials = [
    {
        id: 1,
        name: "MATTHEW FINN",
        position: "Business Manager",
        text: "Been a hosted telephony customer of Fidelity now for almost a year and be delighted with the service. The tech support is first class as you get a dedicated adviser to handle your case all the way through, which I love! I would definitely recommend.",
    },
    {
        id: 2,
        name: "MATTHEW FINN",
        position: "Business Manager",
        text: "I spoke with Carl after my system was down. He guided me through the problems and kept me informed. The follow up was excellent until the problem was resolved.",
    },
    {
        id: 3,
        name: "MATTHEW FINN",
        position: "Business Manager",
        text: "We recently changed from a standard broadband line to a leased line with Fidelity. It was installed within two months of signing (and that included the Christmas/New Year break), so much quicker than we expected. And it is far superior to our old line. A very efficient service.",
    },
    {
        id: 4,
        name: "MATTHEW FINN",
        position: "Business Manager",
        text: "Been a hosted telephony customer of Fidelity now for almost a year and be delighted with the service. The tech support is first class as you get a dedicated adviser to handle your case all the way through, which I love! I would definitely recommend.",
    },
    {
        id: 5,
        name: "MATTHEW FINN",
        position: "Business Manager",
        text: "I used to be a customer of one of the major UK networks. Billing or tech queries took hours of waiting. Each time I contact Fidelity Group they get back to me promptly with the answer. The service is impeccable.",
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
                setFade(true);
            }, 500); 
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    const displayedTestimonials = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2);

    return (
        <div className='flex justify-center'>
            {displayedTestimonials.map((testimonial) => (
                <div key={testimonial.id} className={`w-96 p-8 shadow-lg shadow-gray-400 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}> {/* Adjusted transition here */}
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
                        <h1 className="font-bold">
                            {testimonial.name}
                            <span className="text-base font-normal text-gray-500"> / {testimonial.position}</span>
                        </h1>
                    </div>
                    <div className='p-4'>
                        <p className='text-gray-600 text-base leading-7 font-normal'>{testimonial.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialCarousel;
