'use client';
import React, { useEffect, useState } from 'react';

const backgroundImages = [
  '/slider-home/slider1.jpg',
  '/slider-home/slider3.png',
  '/slider-home/slider4.avif',
  '/slider-home/slider5.jpg',
  '/slider-home/slider6.png',
];
const HeroPages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  return (
    <section className={`p-3 sm:p-6 h-[700px]`}>
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 h-[754px] bg-cover bg-center transition-opacity duration-1000 ease-in-out "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(30, 29, 33, 0.3886) 0%, rgba(30, 29, 33, 0.2436) 61.98%, rgba(30, 29, 33, 0.5046) 100%), url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
            backgroundPosition: 'center top',
          }}
        ></div>
      ))}
    </section>
  );
};

export default HeroPages;
