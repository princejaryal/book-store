import React, { useEffect, useState } from 'react';

import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";
import bannerImg4 from "../../assets/banner4.jpg";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [bannerImg1, bannerImg2, bannerImg3,bannerImg4]; // Array of banner images

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row-reverse">
    <div className="w-full">
    <img src={bannerImages[currentImageIndex]} alt={`Banner ${currentImageIndex + 1}`} className="w-full h-[400px] object-cover"/>

    </div>
  </div>
  
  );
};

export default Banner;
