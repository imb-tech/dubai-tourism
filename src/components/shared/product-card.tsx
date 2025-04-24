import { StarIcon, UserIcon } from 'components/icons';
import { buttonVariants } from 'components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Money from './money';

export default function ProductCard({ name, image, price }: Product) {
  return (
    <div className="rounded-lg  flex flex-col items-start gap-1 p-2 border">
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="mt-auto"
      />
      <h3 className="md:text-2xl font-semibold mt-1">{name}</h3>
      <ul className="flex gap-3 py-1">
        <li className="flex items-center gap-2 text-primary">
          <UserIcon />
          <span className="text-black font-medium">Sharhlar</span>
        </li>
        <li className="flex items-center gap-2 text-primary">
          <StarIcon />
          <span className="text-black font-medium">4.5</span>
        </li>
      </ul>
      <Money price={price} discount={price - 24} className="mb-2 " suffix="/day" />

      <Link
        href={'/'}
        className={buttonVariants({ size: 'lg', className: 'w-full' })}
      >
        Batafsil
      </Link>
    </div>
  );
}
