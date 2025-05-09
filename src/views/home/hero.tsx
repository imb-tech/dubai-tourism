'use client';
import { Button } from 'components/ui/button';
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const backgroundImages = [
  '/slider-home/slider0.png',
  '/slider-home/slider.jpg',
  '/slider-home/slider1.jpg',
  '/slider-home/slider3.png',
  '/slider-home/slider4.avif',
  '/slider-home/slider5.jpg',
  '/slider-home/slider6.png',
];

const HeroPages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="lg:h-[620px] h-[500px] overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 lg:h-[754px] h-[600px] w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(30, 29, 33, 0.3886) 0%, rgba(30, 29, 33, 0.2436) 61.98%, rgba(30, 29, 33, 0.5046) 100%), url(${image})`,
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
              backgroundPosition: 'center top',
            }}
          >
            <div className="h-full flex items-center lg:justify-start justify-center text-white container mx-auto lg:px-0 px-3">
              <div className="lg:w-1/2 space-y-4 lg:text-start text-center">
                <h1 className="font-bold lg:text-5xl text-3xl  leading-[120%]">
                  Dubaydagi Shaxsiy VIP Xizmatlar
                </h1>
                <p>
                  Experience the luxury and elegance of Dubai like never before
                  with our Exclusive VIP Tour. This bespoke journey takes you
                  through Dubai's most iconic landmarks, with personalized
                  services tailored to your needs.
                </p>
                <Button className="bg-primary text-white mt-4 cursor-pointer w-full lg:h-12 h-11 sm:w-max px-8">
                Get in touch
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto relative">
        <div className="absolute bottom-24 md:left-0 md:translate-x-0 left-1/2 -translate-x-1/2  transform  flex gap-1 items-center z-20">
          <button
            onClick={prevImage}
            className=" bg-white text-zinc-500 p-1.5 cursor-pointer rounded-full shadow-md z-20 mr-3"
          >
            <ChevronLeft />
          </button>
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center relative`}
            >
              <svg
                className="absolute top-0 left-0 w-full h-full transform -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="white"
                  strokeOpacity="1"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  className={index === currentImageIndex ? 'animate-fill' : ''}
                />
              </svg>
              <span
                className={`absolute  font-semibold ${
                  index === currentImageIndex
                    ? 'text-white text-sm'
                    : 'text-gray-300 text-xs'
                }`}
              >
                {index + 1}
              </span>
            </div>
          ))}

          <button
            onClick={nextImage}
            className="  bg-white text-zinc-500 p-1.5 rounded-full cursor-pointer shadow-md z-20 ml-3"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Animation style */}
        <style jsx>{`
          @keyframes fill {
            from {
              stroke-dashoffset: 100;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          .animate-fill {
            animation: fill 5s linear forwards;
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroPages;
