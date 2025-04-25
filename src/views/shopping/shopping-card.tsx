import { buttonVariants } from 'components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ShoppingCard({ item }: { item: any }) {
  return (
    <div
      key={item.id}
      className="relative flex w-full p-2 gap-3 items-start flex-col rounded-xl bg-white border border-[#E1E1E1]"
    >
      <Image src={item.image} height={220} width={290} alt={item.name} />
      <div className="absolute top-0 left-0 p-2 text-white text-xs font-medium rounded-tl-lg rounded-br-lg bg-[#FF7043]">
        {item.sold}
      </div>
      <div>
        <Link
          href={'#'}
          className="rounded-2xl bg-amber-100 text-primary text-xs py-1 px-2"
        >
          #{item.tag}
        </Link>
        <h1 className="font-semibold text-xl mt-3">{item.name}</h1>
      </div>
      <Link
       href={'/shopping/1'}
        className={buttonVariants({ size: 'lg', className: 'w-full' })}
      >
        Узнать цену
      </Link>
    </div>
  );
}

export default ShoppingCard;
