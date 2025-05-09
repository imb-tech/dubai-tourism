'use client';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';
import { formatMoney } from 'lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useTextStore } from 'store/auth';
import { useAuthStore } from 'store/auth-store';

export default function GoToPayment() {
  const { openModal } = useModal('auth');
  const { text } = useTextStore();
  const { token } = useAuthStore();
  const { push } = useRouter(); 

  const handleClick = () => {
    if (token) {
      push('/checkout');
    } else {
      openModal();
    }
  };

  return (
    <div className="bg-white rounded-md p-4">
      <h2 className="font-semibold text-xl">Total</h2>
      <div className="flex items-center justify-between p-4 bg-secondary rounded-md my-3">
        <span className="font-semibold">Final Amount</span>
        <span className="font-bold"> AED {formatMoney(360)}</span>
      </div>
      <Button onClick={handleClick}>Go to payment</Button>

    </div>
  );
}
