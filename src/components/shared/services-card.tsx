import { buttonVariants } from 'components/ui/button';
import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServicesCard({ name, image, link }: Service) {
  return (
    <Link
      href={link}
      className="relative z-50 bg-white shadow overflow-hidden  h-[312px] rounded-lg pt-5 lg:pl-7 pl-3  lg:min-h-[300px] flex flex-col hover:scale-100 items-start gap-3 cursor-pointer hover:transition-all duration-300 ease-linear"
    >
      <div className="z-50">
        <h3 className="lg:text-2xl font-semibold w-full">{name}</h3>
        <div className={cn(buttonVariants(), 'lg:h-10 h-8 lg:text-sm text-xs')}>
          Batafsil
        </div>
      </div>
      <div className=" w-[85%] h-[80%] absolute bottom-0 -right-3">
        <Image
          src={image}
          width={300}
          height={300}
          alt={name}
          className="object-content  w-full h-full transition-all duration-300"
        />
      </div>
    </Link>
  );
}
