import { LocationIcon } from 'components/icons';
import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TourCard({
  image,
  location,
  index,
}: Tour & { index: number }) {
  const isColTwo = index == 2 || index == 4 || index == 6;

  return (
    <div
      className={cn(
        'relative min-w-[240px]   h-[200px] lg:h-[420px]',
        isColTwo ? 'lg:col-span-2 md:col-span-3' : 'col-span-1'
      )}
    >
      <Image
        className="md:rounded-3xl rounded-xl w-full object-cover   h-[200px] lg:h-[420px] object-center"
        src={image}
        width={800}
        height={800}
        alt={'name'}
      />
      <Link
        href={'/'}
        className="absolute bottom-3 left-3 bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-3xl flex items-center"
      >
        <div className="flex items-center gap-2">
          <LocationIcon />
          <span>{location}</span>
        </div>
      </Link>
    </div>
  );
}
