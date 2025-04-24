import { buttonVariants } from 'components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServicesCard({ name, image, link }: Service) {
  return (
    <div className="bg-[#F5F5F5] rounded-lg pt-5 lg:pl-7 pl-3  lg:min-h-[300px] flex flex-col items-start gap-3 cursor-pointer hover:shadow-xl hover:transition-all duration-300 ease-linear">
      <h3 className="lg:text-2xl font-semibold max-w-[200px]">{name}</h3>
      <Link href={link} className={buttonVariants({ size: 'lg' })}>
        Batafsil
      </Link>
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="mt-auto transition-all duration-300"
      />
    </div>
  );
}
