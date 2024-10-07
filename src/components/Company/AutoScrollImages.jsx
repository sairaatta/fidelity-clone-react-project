import React, { useEffect, useRef } from 'react';
import scrollImage1 from '/src/assets/images/scroll1.png';
import scrollImage2 from '/src/assets/images/scroll2.png';
import scrollImage3 from '/src/assets/images/scroll3.png';
import scrollImage4 from '/src/assets/images/scroll4.png';
import scrollImage5 from '/src/assets/images/scroll5.png';
import scrollImage6 from '/src/assets/images/scroll6.png';
import scrollImage7 from '/src/assets/images/scroll7.png';
import scrollImage8 from '/src/assets/images/scroll8.png';
import scrollImage9 from '/src/assets/images/scroll9.png';

const AutoScrollImages = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollContainer.offsetWidth;
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0; 
      }
      scrollContainer.scroll({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 3000); 

    return () => clearInterval(scrollInterval); 
  }, []);

  return (
    <div className="overflow-hidden max-w-full w-11/12  mx-auto ">
      <div
        ref={scrollContainerRef}
        className="flex flex-nowrap space-x-8 shadow-xl shadow-gray-400 w-full overflow-x-auto scroll-smooth"
      >
        {[
          scrollImage1,
          scrollImage2,
          scrollImage3,
          scrollImage4,
          scrollImage5,
          scrollImage6,
          scrollImage7,
          scrollImage8,
          scrollImage9,
        ].map((image, index) => (
          <div key={index} className="flex-none w-1/6 space-x-20"> 
            <img src={image} alt={`Award ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollImages;
