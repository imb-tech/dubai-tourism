import { buttonVariants } from 'components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CarCard({ name, image }: Product) {
  return (
    <div className="rounded-lg min-w-[280px] flex flex-col items-start gap-2 p-2 border">
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="mt-auto"
      />
      <h3 className="text-2xl font-semibold">{name}</h3>
      <Link
        href={'/'}
        className={buttonVariants({ size: 'lg', className: 'w-full' })}
      >
        Batafsil
      </Link>
    </div>
  );
}

