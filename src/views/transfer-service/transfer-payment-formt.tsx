'use client';

import { useForm } from 'react-hook-form';
import FormInput from 'components/form/input';
import { Button } from 'components/ui/button';
import PaymentTypes from 'views/payment/payment-types';
import { Checkbox } from 'components/ui/checkbox';
import Modal from 'components/custom/modal';
import { useModal } from 'hooks/use-modal';
import PaymentModal from '../payment/payment-modal';

export default function TransferPaymentForm() {
  const form = useForm();
  const { openModal } = useModal('payment');

  return (
    <div className="bg-background rounded-md p-4 shadow">
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
          <Button size="lg" type="button" className="h-11">
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

      <div className="md:flex items-center bg-background rounded-md gap-4">
        <div className="flex items-center gap-2 mb-6 md:mb-0">
          <Checkbox defaultChecked />
          <p>By clicking Pay now you agree with Terms and Conditions</p>
        </div>
        <div className="grid grid-cols-2  gap-2 md:ml-auto">
          <Button variant="secondary" className="shadow-none ">
            Back
          </Button>
          <Button onClick={openModal} type="button">
            Pay now
          </Button>
        </div>
      </div>
      <Modal
        modalKey="payment"
        titleClass="lg:text-3xl font-semibold text-2xl"
      >
        <PaymentModal />
      </Modal>
    </div>
  );
}
