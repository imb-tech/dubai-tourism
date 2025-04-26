'use client';
import * as React from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'components/ui/carousel';

export function SliderComponents({ images }: { images: ShoppingImage[] }) {
  return (
    <div className="relative rounded-lg overflow-hidden border">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent className="min-h-0 h-auto bg-destructive">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full bg-primary !h-[460px] flex items-start">
                <Image
                  src={src.url || '/placeholder.svg'}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover object-center !h-[460px]"
                />
                <div className="lg:w-1/3 w-full h-full absolute flex items-center justify-center">
                  <div className='space-y-12'>
                    <Image
                      src={'/logo.png'}
                      alt="logo"
                      width={200}
                      height={200}
                    />
                   <div className='space-y-2'>
                   <h1 className="lg:text-5xl text-3xl text-white font-semibold">
                      {src.title}
                    </h1>
                    <p className="text-white font-semibold">
                      {src.description}
                    </p>
                   </div>
                    <a className='py-3 px-6 bg-white rounded-2xl font-semibold' href={`tel:${src.phone}`}>{src.phone}</a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
