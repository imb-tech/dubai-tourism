import React from 'react';
import CheckoutCard from './checkout-card';
import GoToPayment from './go-to-payment';

export default function CheckoutMain() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl mb-6">
        Atlantis Aquaventure Waterpark
      </h1>
      <div className="flex flex-col gap-3 p-2 rounded-md bg-secondary">
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <GoToPayment />
      </div>
    </div>
  );
}
