import { EngineIcon, KarobkaIcon, MapIcon } from 'components/icons';
import { buttonVariants } from 'components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Money from './money';

export default function CarCard({ name, image, price, url }: Product) {
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
      <ul className="flex justify-between py-1 w-full">
        <li className="flex items-center gap-1 text-primary">
          <MapIcon size={18} />
          <span className="text-black font-medium md:text-sm text-sm">
            260 km/day
          </span>
        </li>
        <li className="flex items-center gap-1 text-primary">
          <EngineIcon size={18} />
          <span className="text-black font-medium md:text-sm text-sm">
            600 hp
          </span>
        </li>
        <li className="flex items-center gap-1 text-primary">
          <KarobkaIcon size={18} />
          <span className="text-black font-medium md:text-sm text-sm">
            Automatic
          </span>
        </li>
      </ul>
      <Money
        price={price}
        discount={price - 24}
        className="mb-2"
        suffix="/day"
      />

      <Link
        href={url}
        className={buttonVariants({ size: 'lg', className: 'w-full' })}
      >
        Batafsil
      </Link>
    </div>
  );
}
