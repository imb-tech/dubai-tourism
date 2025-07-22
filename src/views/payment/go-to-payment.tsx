import { Button } from 'components/ui/button';
import { formatMoney } from 'lib/utils';
import React from 'react';
import { useAtractionCustom } from 'views/atraction/use-atraction-custom';

export default function GoToPayment() {
  const { totalAmount } = useAtractionCustom();

  return (
    <div className="bg-white rounded-md p-4">
      <h2 className="font-semibold text-xl">Total</h2>
      <div className="flex items-center justify-between p-4 bg-secondary rounded-md my-3">
        <span className="font-semibold">Final Amount</span>
        <span className="font-bold"> AED {formatMoney(totalAmount)}</span>
      </div>
      <Button>Go to payment</Button>
    </div>
  );
}
 