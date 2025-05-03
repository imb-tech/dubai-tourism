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
import { cn } from 'lib/utils';

export function SliderComponents({
  images,
  showPagination = true,
  showCout =false,
}: {
  images: ShoppingImage[];
  showPagination?: boolean;
  showCout?: boolean;
}) {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <div className="relative rounded-lg overflow-hidden border">
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="min-h-0 h-auto bg-destructive">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full bg-primary lg:!h-[460px] sm:!h-[240px] md:!h-[300px] !h-[260px]  flex items-start">
                {
                  <Image
                    src={src.url || '/placeholder.svg'}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover object-center lg:!h-[460px] sm:!h-[300px] !h-[260px] md:!h-[340px]"
                  />
                }
                <div className="lg:w-1/3 sm:w-1/2 w-full  h-full absolute flex items-center pl-4 md:pl-0 sm:justify-center">
                  <div className="lg:space-y-12 space-y-4">
                    {src.title ? (
                      <Image
                        src={'/logo.png'}
                        alt="logo"
                        width={200}
                        height={200}
                        className="md:w-52 w-40"
                      />
                    ) : null}
                    <div className="space-y-2">
                      {src.title ? (
                        <h1 className="lg:text-5xl md:text-3xl text-2xl text-white font-semibold">
                          {src.title}
                        </h1>
                      ) : (
                        ''
                      )}
                      {src.description ? (
                        <p className="text-white font-semibold">
                          {src.description}
                        </p>
                      ) : null}
                    </div>
                    {src.phone ? (
                      <a
                        className="md:py-3 py-2 md:px-6 px-3 md:text-sm text-sm bg-white  rounded-2xl font-semibold"
                        href={`tel:${src.phone}`}
                      >
                        {src.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute hidden md:block cursor-pointer left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute  hidden md:block cursor-pointer right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
      {showPagination && images.length > 1 && (
        <div className="flex gap-1 mt-2   z-20  absolute bottom-4 left-1/2 -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                current === index ? 'bg-primary w-4' : 'bg-gray-100'
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      {showCout && images.length > 1 && (
        <div className="absolute right-2 top-[70%] -translate-y-[70%] z-20 px-3 py-1 rounded-full bg-white text-black text-sm font-medium shadow">
          {`${current + 1} / ${images.length}`}
        </div>
      )}
    </div>
  );
}
