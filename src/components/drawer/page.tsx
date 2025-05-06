'use client';
import { GallaryIcon } from 'components/icons';
import { cn } from 'lib/utils';
import Image from 'next/image';
import React from 'react';
import { useModal } from 'hooks/use-modal';
import CustomDrawer from 'components/custom/drawer';
import { DriwerImageSlides } from 'components/slider/drawer-slider';

export default function DrawerImagesView({
  images,
}: {
  images: { file: string; id: number }[];
}) {
  const { openModal } = useModal();
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1  gap-2 relative  sm:!h-[240px] md:!h-[300px] !h-[260px] ">
      {images?.slice(0,5)?.map((im, i) => (
        <Image
          key={im.id}
          src={im?.file}
          alt="rent car item"
          width={600}
          height={250}
          className={cn(
            'h-full w-full  object-cover rounded-md',
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
        <DriwerImageSlides images={images} />
      </CustomDrawer>
    </div>
  );
}
