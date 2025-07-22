'use client';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';
import { formatMoney } from 'lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuthStore } from 'store/auth-store';
import { useAtractionCustom } from 'views/atraction/use-atraction-custom';

export default function GoToPayment() {
  const { openModal } = useModal('auth');
  const { token } = useAuthStore();
  const { push } = useRouter();
  const { totalAmount } = useAtractionCustom();

  const handleClick = () => {
    if (token) {
      push('/payment');
    } else {
      openModal();
    }
  };


  return (
    <div className="bg-white rounded-md p-4">
      <h2 className="font-semibold text-xl">Total</h2>
      <div className="flex items-center justify-between p-4 bg-secondary rounded-md my-3">
        <span className="font-semibold">Final Amount</span>
        <span className="font-bold">AED {formatMoney(totalAmount)}</span>
      </div>
      <Button className="w-full" onClick={handleClick}>
        Go to payment
      </Button>
    </div>
  );
}
