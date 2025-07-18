'use client';
import { cn } from 'lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';

const paymentTypes = [
  {
    id: 6,
    img: '/images/apple-pay.png',
  },
  {
    id: 7,
    img: '/images/humocard.png',
  },
  {
    id: 5,
    img: '/images/click.png',
  },
  {
    id: 1,
    img: '/images/mastercard.png',
  },
  {
    id: 3,
    img: '/images/uzcard.png',
  },
  {
    id: 4,
    img: '/images/payme.png',
  },
  {
    id: 2,
    img: '/images/sberbank.png',
  },
];

export default function PaymentTypes({
  className = '',
}: {
  className?: string;
}) {
  const [active, setActive] = useState<number>(1);
  return (
    <div className={cn('bg-background rounded-md p-6 ', className)}>
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">
        Choose a Payment Method
      </h2>
      <div className="gap-2 bg-background grid grid-cols-2 sm:grid-cols-4">
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
              alt={`Choose a Payment Method-${tp.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
