'use client';
import { GallaryIcon } from 'components/icons';
import { cn } from 'lib/utils';
import Image from 'next/image';
import React from 'react';
import { useModal } from 'hooks/use-modal';
import CustomDrawer from 'components/custom/drawer';
import { SliderComponents } from 'components/slider/page';
import { images } from 'app/shopping/page';


export default function ShopppingImages() {
  const { openModal } = useModal();
  return (
    <div className="grid grid-cols-4 gap-2 relative">
      {images?.map((im, i) => (
        <Image
          key={im.id}
          src={im?.url}
          alt="rent car item"
          width={600}
          height={600}
          className={cn(
            'h-full w-full object-cover rounded-md',
            i === 0 ? 'col-span-2 row-span-2' : ''
          )}
        />
      ))}

      <div
        onClick={openModal}
        className="absolute bg-white bottom-4 right-4 rounded-md flex items-center gap-3 py-4 px-6 "
      >
        <GallaryIcon size={16} />
        <span className="font-bold">Show all photos</span>
      </div>

      <CustomDrawer className="max-w-full min-h-full" title="Shopping">
        <SliderComponents images={[...images, ...images, ...images]} />
      </CustomDrawer>
    </div>
  );
}
