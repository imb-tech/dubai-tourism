'use client';

import React from 'react';
import CheckoutCard from './checkout-card';
import GoToPayment from './go-to-payment';
import { useAtractionStore } from 'store/atraction';
import WtpInfo from 'views/atraction/atraction-info';
import Modal from 'components/custom/modal';

export default function CheckoutMain() {
  const { atraction } = useAtractionStore();

  const totalAmount = atraction.reduce(
    (accumulator, currentValue) =>
      accumulator +
      currentValue?.adult * 300 +
      currentValue?.child * 230 +
      currentValue?.infant * 230,
    0
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl mb-6">Cart</h1>
      <div className="flex flex-col gap-3 p-2 rounded-md bg-secondary">
        {atraction?.map((item) => (
          <CheckoutCard key={item.id} item={item} />
        ))}
        <GoToPayment totalAmount={totalAmount} />
      </div>
      <Modal modalKey="more-info" className="max-w-xl">
        <WtpInfo />
      </Modal>
    </div>
  );
}
