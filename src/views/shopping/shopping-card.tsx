import { buttonVariants } from 'components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ShoppingCard({ item }: { item: Shopping }) {
  return (
    <div
      key={item.id}
      className="relative flex w-full p-2 gap-3 items-start flex-col rounded-xl bg-white border border-[#E1E1E1]"
    >
      <Image
        src={item.poster || '/image.jpg'}
        height={220}
        width={290}
        alt={item.name}
        priority
      />
      {item.best_seller ? (
        <div className="absolute top-0 left-0 p-2 text-white text-xs font-medium rounded-tl-lg rounded-br-lg bg-[#FF7043]">
          Best seller
        </div>
      ) : null}
      <div>
        <Link
          href={'#'}
          className="rounded-2xl bg-[#FFDDD6] text-orange-500 text-xs py-1 px-2"
        >
          #{item.category_name}
        </Link>
        <h1 className="font-semibold text-xl mt-3">{item.name}</h1>
      </div>
      <Link
        href={`/shopping/${item.slug}`}
        className={buttonVariants({ size: 'lg', className: 'w-full' })}
      >
        Find out the price
      </Link>
    </div>
  );
}

export default ShoppingCard;
