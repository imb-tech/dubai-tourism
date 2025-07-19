'use client';
import { paymentTypes } from 'constants/payment-types';
import { cn } from 'lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  className?: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaymentTypes({
  className = '',
  active,
  setActive,
}: Props) {
  return (
    <div className={cn('bg-background rounded-md p-6 ', className)}>
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">
        Choose a Payment Method
      </h2>
      <div>
        <div className="gap-2 bg-background grid grid-cols-2 sm:grid-cols-3">
          {paymentTypes?.map((tp, index) => (
            <div
              key={tp.id}
              className={cn(
                'flex items-center h-20 justify-center bg-secondary rounded-lg border cursor-pointer',
                active === tp.id ? 'border-primary/40' : 'border-transparent',
                index === paymentTypes.length - 1
                  ? 'col-span-2 sm:col-span-1'
                  : ''
              )}
              onClick={() => setActive(tp.id)}
            >
              <Image
                width={70}
                height={70}
                src={tp.img}
                className="w-20 h-auto"
                alt={`Choose a Payment Method-${tp.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
