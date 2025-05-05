'use client';
import { cn } from 'lib/utils';
import React, { useState } from 'react';

const paymentTypes = [
  {
    id: 1,
    img: '/images/mastercard.png',
  },
  {
    id: 2,
    img: '/images/sberbank.png',
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
    id: 5,
    img: '/images/click.png',
  },
  {
    id: 6,
    img: '/images/apple-pay.png',
  },
  {
    id: 7,
    img: '/images/humocard.png',
  },
];

export default function PaymentTypes() {
  const [active, setActive] = useState<number>(1);
  return (
    <div className="bg-background rounded-md p-6">
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">
        Choose a Payment Method
      </h2>
      <div className="gap-2 bg-background grid grid-cols-2">
        {paymentTypes?.map((tp) => (
          <div
            key={tp.id}
            className={cn(
              'flex items-center justify-center bg-secondary rounded-lg border cursor-pointer',
              active === tp.id ? 'border-primary/40' : 'border-transparent'
            )}
            onClick={() => setActive(tp.id)}
          >
            <img src={tp.img} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
