import { SuccessIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { FileCheck2 } from 'lucide-react';
import React from 'react';

const PaymentModal = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-primary">
      <SuccessIcon />
      <p className="text-3xl text-center text-black">
        Payment approved successfully
      </p>
      <div className="bg-primary-foreground w-full rounded-lg p-4">
        <p className="text-black font-semibold text-base mb-5">Print Chekout</p>
        <Button className="w-full">
          <span>
            <FileCheck2 />
          </span>
          <span className="text-white font-medium">Click here to download</span>
        </Button>
      </div>
    </div>
  );
};

export default PaymentModal;
