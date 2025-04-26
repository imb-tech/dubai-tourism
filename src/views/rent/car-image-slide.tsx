'use client';
import * as React from 'react';
import Image from 'next/image';
import type { CarouselApi } from 'components/ui/carousel';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'components/ui/carousel';
import { cn } from 'lib/utils';

export function CarImageSlides({ images }: { images: CarImage[] }) {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!mainApi) {
      return;
    }

    const onSelect = () => {
      const selectedIndex = mainApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);

      if (thumbApi) {
        thumbApi.scrollTo(selectedIndex);
      }
    };

    mainApi.on('select', onSelect);

    return () => {
      mainApi.off('select', onSelect);
    };
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!thumbApi) {
      return;
    }

    const onSelect = () => {
      const selectedIndex = thumbApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);

      if (mainApi) {
        mainApi.scrollTo(selectedIndex);
      }
    };

    thumbApi.on('select', onSelect);

    return () => {
      thumbApi.off('select', onSelect);
    };
  }, [mainApi, thumbApi]);

  // Handle thumbnail click
  const onThumbClick = React.useCallback(
    (index: number) => {
      setCurrentIndex(index);
      if (mainApi) {
        mainApi.scrollTo(index);
      }
      if (thumbApi) {
        thumbApi.scrollTo(index);
      }
    },
    [mainApi, thumbApi]
  );

  return (
    <div className="flex flex-col gap-4 w-full max-w-[70%] mx-auto">
      <div className="relative rounded-lg overflow-hidden border">
        <Carousel setApi={setMainApi} className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={src.url || '/placeholder.svg'}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      <div className="relative">
        <Carousel
          setApi={setThumbApi}
          opts={{
            align: 'start',
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/8"
              >
                <div
                  className={cn(
                    'relative cursor-pointer overflow-hidden rounded border-2',
                    currentIndex === index
                      ? 'border-primary'
                      : 'border-transparent'
                  )}
                  onClick={() => onThumbClick(index)}
                >
                  <div className="aspect-[4/3] w-full">
                    <Image
                      src={src.url || '/placeholder.svg'}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={cn(
                        'absolute inset-0 bg-black/20 transition-opacity',
                        currentIndex === index ? 'opacity-0' : 'opacity-50'
                      )}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
