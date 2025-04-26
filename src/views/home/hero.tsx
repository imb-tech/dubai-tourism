'use client';
import { Button } from 'components/ui/button';
import React, { useEffect, useState } from 'react';

const backgroundImages = [
  '/slider-home/slider.jpg',
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
        (prevIndex) => (prevIndex + 1) % backgroundImages?.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`p-3 sm:p-6 h-[620px]`}>
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
        >
          <div className="h-full flex items-center justify-start text-white container mx-auto lg:px-0 px-3">
            <div className='w-1/2 space-y-4'>
              <h1 className="font-bold text-5xl leading-[120%]">
                Dubaydagi Shaxsiy VIP Xizmatlar
              </h1>
              <p>"Biz siz uchun hashamatli xizmatlarni tashkillashtiramiz"</p>
              <Button className='bg-white text-primary mt-4 hover:bg-white cursor-pointer'>Biz bilan bog'laning</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroPages;
