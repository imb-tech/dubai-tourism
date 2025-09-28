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
  title,
}: {
  images: Banner[];
  title: string;
}) {
  const { openModal } = useModal();
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1  gap-2 relative ">
      {images?.slice(0, 5)?.map((im, i) => (
        <div
          key={im.id}
          className={cn(
            ' w-full h-full overflow-hidden ',
            i === 0 ? 'col-span-2 row-span-2 h-[380px]' : 'h-[184px]'
          )}
        >
          <Image
            src={im?.file || im?.image || '/image.jpg'}
            alt="rent car item"
            width={600}
            className="h-full w-full object-cover rounded-md "
            height={250}
            priority
          />
        </div>
      ))}

      <div
        onClick={openModal}
        className="absolute bg-white bottom-4 right-4 rounded-md flex items-center gap-3 py-4 px-6 "
      >
        <GallaryIcon size={16} />
        <span className="font-bold">Show all photos</span>
      </div>

      <CustomDrawer className="max-w-full min-h-full" title={title}>
        <DriwerImageSlides images={images} />
      </CustomDrawer>
    </div>
  );
}
