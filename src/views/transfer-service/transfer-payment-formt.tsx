'use client';

import { useForm } from 'react-hook-form';

import FormInput from 'components/form/input';
import PhoneField from 'components/form/phone-field';
import { Button } from 'components/ui/button';
import PaymentTypes from 'views/payment/payment-types';
import { Checkbox } from 'components/ui/checkbox';

export default function TransferPaymentForm() {
  const form = useForm();

  return (
    <div className="bg-background rounded-md p-6">
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">Payment</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-end gap-1">
          <FormInput
            methods={form}
            name="coupone"
            variant="clean"
            placeholder="Enter your coupone"
            wrapperClassName="flex-1"
            label="Coupone code"
          />
          <Button size="lg" type="button">
            Apply
          </Button>
        </div>
        <PaymentTypes className="p-0" />
      </div>

      <div className="bg-background py-3 rounded-md">
        <h1 className="text-2xl font-semibold">Final Payment</h1>
        <div className="flex items-center justify-between mt-4 bg-secondary rounded-md p-3 font-semibold">
          <p>Final Amount</p>
          <p> AED 360.00</p>
        </div>
      </div>

      <div className="flex items-center bg-background rounded-md gap-4">
        <Checkbox defaultChecked />
        <p>By clicking Pay now you agree with Terms and Conditions</p>
        <Button size="lg" type="button" className="ml-auto">
          Pay now
        </Button>
      </div>
    </div>
  );
}
