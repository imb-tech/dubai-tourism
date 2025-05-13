'use client';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';
import { cn } from 'lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  shopping: Shopping;
};

function ShoppingInfo({ shopping }: Props) {
  const { openModal } = useModal('shopping');
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-8 lg:font-normal font-semibold">
      <div
        className={cn(
          'rounded-xl lg:p-6 p-4 flex flex-col items-start lg:gap-4 gap-2 self-stretch bg-white  border border-[#E1E1E1] lg:col-span-2 col-span-1'
        )}
      >
        <h1 className="lg:text-3xl text-2xl font-semibold">{shopping?.name}</h1>
        <div className="flex items-center gap-3">
          {shopping?.category?.id ? (
            <Link
              href={'#'}
              className="rounded-2xl bg-[#FFDDD6] text-orange-500 text-xs py-1 px-2"
            >
              #{shopping?.category?.name}
            </Link>
          ) : null}
          {shopping?.best_seller ? (
            <div className="p-2 text-white text-xs font-medium rounded-sm bg-[#FF7043]">
              Best seller
            </div>
          ) : null}
        </div>
        <p className="lg:text-[#121212] lg:text-[16px] text-sm">
          {shopping?.description}
        </p>
        <Button onClick={openModal} className="w-full mt-3">
          Узнать цену
        </Button>
      </div>
      {shopping?.properties?.map((item, index) => (
        <div
          key={index}
          className={cn(
            'rounded-xl lg:p-6 p-4 flex flex-col items-start lg:gap-4 gap-2 self-stretch bg-white  border border-[#E1E1E1]'
          )}
        >
          <h1 className="lg:text-3xl text-2xl font-semibold">{item.title}</h1>
          <p className="lg:text-[#121212] lg:text-[16px] text-sm whitespace-pre-line">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingInfo;
