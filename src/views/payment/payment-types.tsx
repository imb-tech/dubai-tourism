'use client';
import { cn } from 'lib/utils';
import Image from 'next/image';
import { Controller, useFormContext } from 'react-hook-form';

const paymentTypes = [
  { id: 'applepay', img: '/images/apple-pay.png' },
  { id: 'click', img: '/images/click.png' },
  { id: 'mastercard', img: '/images/mastercard.png' },
  { id: 'payme', img: '/images/payme.png' },
  { id: 'cebr', img: '/images/sberbank.png' },
];

export default function PaymentTypes({
  className = '',
}: {
  className?: string;
}) {
  const { control } = useFormContext();

  return (
    <div className={cn('bg-background rounded-md p-6 ', className)}>
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">
        Choose a Payment Method
      </h2>
      <Controller
        control={control}
        name="payment_type"
        defaultValue="applepay"
        render={({ field }) => (
          <div className="gap-2 bg-background grid grid-cols-2 sm:grid-cols-3">
            {paymentTypes.map((tp, index) => (
              <div
                key={tp.id}
                className={cn(
                  'flex items-center h-20 justify-center bg-secondary rounded-lg border cursor-pointer',
                  field.value === tp.id
                    ? 'border-primary/40'
                    : 'border-transparent',
                  index === paymentTypes.length - 1
                    ? 'col-span-2 sm:col-span-1'
                    : ''
                )}
                onClick={() => field.onChange(tp.id)}
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
        )}
      />
    </div>
  );
}
