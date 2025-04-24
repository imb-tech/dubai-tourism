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

export function RentImageSlider({ images }: { images: CarImage[] }) {
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
