import { buttonVariants } from 'components/ui/button';
import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServicesCard({ name, image, link }: Service) {
  return (
    <div
      style={{
        boxShadow: ' 0px 4px 124px 0px rgba(18, 24, 34, 0.18)',
      }}
      className="bg-[#F5F5F5] h-[312px] rounded-lg pt-5 lg:pl-7 pl-3 justify-between  lg:min-h-[300px] flex flex-col hover:scale-100 items-start gap-3 cursor-pointer hover:transition-all duration-300 ease-linear"
    >
      <h3 className="lg:text-2xl font-semibold max-w-[200px]">{name}</h3>
      <Link href={link} className={cn(buttonVariants({ size: 'lg' }),"lg:h-10 h-8 lg:text-sm text-xs")}>
        Batafsil
      </Link>
     <div className='w-full h-full'>
       <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="object-content w-full h-full transition-all duration-300"
      />
     </div>
    </div>
  );
}
