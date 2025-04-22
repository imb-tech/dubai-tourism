import { Button } from 'components/ui/button';
import { formatMoney } from 'lib/utils';
import React from 'react';

export default function GoToPayment() {
  return (
    <div className="bg-white rounded-md p-4">
      <h2 className="font-semibold text-xl">Total</h2>
      <div className="flex items-center justify-between p-4 bg-secondary rounded-md my-3">
        <span className="font-semibold">Final Amount</span>
        <span className="font-bold"> AED {formatMoney(360)}</span>
      </div>
      <Button>Go to payment</Button>
    </div>
  );
}
