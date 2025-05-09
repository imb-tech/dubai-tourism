import { cn, formatMoney } from 'lib/utils';
import React, { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

type Props = {
  price: number | string | undefined;
  discount?: number;
  suffix?: ReactNode;
  className?: ClassNameValue;
  priceClassName?: ClassNameValue;
  discountClassName?: ClassNameValue;
};

export default function Money({
  price,
  discount,
  className,
  priceClassName,
  discountClassName,
  suffix,
}: Props) {

  return (
    <div className={cn('relative pt-6', className, !discount && 'pt-0')}>
      {discount && (
        <h3
          className={cn(
            'font-semibold text-black/45 text-sm line-through absolute top-0',
            priceClassName
          )}
        >
          From AED {formatMoney(price)}
        </h3>
      )}
      <h3
        className={cn(
          'md:text-xl text-sm font-semibold text-[#FF5533]',
          discountClassName
        )}
      >
        From AED {formatMoney(price)} {suffix ? '/' : ''} {suffix}
      </h3>
    </div>
  );
}
