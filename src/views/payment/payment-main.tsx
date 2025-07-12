'use client';
import React, { useCallback, useMemo, useState } from 'react';
import PaymentForm from './payment-form';
import PaymentTypes from './payment-types';
import { FormProvider, useForm } from 'react-hook-form';
import OrderSteps from './order-steps';
import FormInput from 'components/form/input';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { DownloadIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { useModal } from 'hooks/use-modal';
import Modal from 'components/custom/modal';
import PaymentModal from './payment-modal';

type FormFields = {
  name: string;
  coupone: string;
};

export default function PaymentMain() {
  const methods = useForm<FormFields>();
  const [step, setStep] = useState<number>(1);
  const { openModal } = useModal('payment');

  const componentMobile = useCallback(
    (v: number) => {
      switch (v) {
        case 2:
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:bg-primary/5 rounded-md gap-2">
              <div className="flex flex-col gap-3 col-span-1 md:col-span-2">
                <PaymentForm />
                <PaymentTypes />
                <div className="flex flex-col items-center bg-background p-6 rounded-md gap-4">
                  <div className="flex items-center gap-3">
                    <Checkbox defaultChecked />
                    <p>
                      By clicking Pay now you agree with Terms and Conditions
                    </p>
                  </div>
                  <Button
                    onClick={openModal}
                    size="lg"
                    type="button"
                    className="ml-auto w-full md:w-auto"
                  >
                    Pay now
                  </Button>
                </div>
              </div>
            </div>
          );
        case 4:
          return (
            <div className="bg-secondary p-3 rounded-md">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-background p-6 rounded-md gap-4">
                <p className="text-xl text-center">Print Vaucher</p>
                <Button size="lg" type="button">
                  <DownloadIcon />
                  Click here to download
                </Button>
              </div>
            </div>
          );

        default:
          return (
            <div className="flex flex-col gap-3 md:p-3 md:bg-primary/5">
              <div className="p-6 bg-background rounded-md">
                <h1 className="text-center text-2xl font-semibold">
                  Atlantis Aquaventure Waterpark
                </h1>

                <span className="w-full border-b block mt-4"></span>

                <ul className="flex flex-col gap-5 pt-5">
                  <li className="text-sm flex items-center justify-between">
                    <span>Tour Option</span>
                    <span>Atlantis day pass - (21st April - 4th June)</span>
                  </li>
                  <li className="text-sm flex items-center justify-between">
                    <span>Date</span>
                    <span>21/4/2025</span>
                  </li>
                  <li className="text-sm flex items-center justify-between">
                    <span>Transfer Type</span>
                    <span>Without Transfers</span>
                  </li>
                  <li className="text-sm flex items-center justify-between">
                    <span>Transfer Timings</span>
                    <span>1 Adult</span>
                  </li>
                  <li className="text-sm flex items-center justify-between font-bold text-red-500">
                    <span>Last Date to Cancel:</span>
                    <span>Non Refundable</span>
                  </li>
                  <li className="text-sm flex items-center justify-between">
                    <span>Availability</span>
                    <span>Available</span>
                  </li>
                  <li className="text-sm flex items-center justify-between">
                    <span>Amount Incl. VAT</span>
                    <span>AED 360.00</span>
                  </li>
                </ul>

                <span className="w-full border-b block my-5"></span>

                <p className="text-primary text-sm mb-4">Enter Coupone code</p>

                <div className="flex items-end gap-1 ">
                  <FormInput
                    methods={methods}
                    name="coupone"
                    label="Coupon code"
                    variant="clean"
                    placeholder="Enter your coupone"
                    wrapperClassName="flex-1 h-[58px]"
                    size="lg"
                  />
                  <Button size="lg" className="" type="button">
                    Apply
                  </Button>
                </div>
              </div>

              <div className="bg-background p-6 rounded-md">
                <h1 className="text-2xl font-semibold">Final Payment</h1>
                <div className="flex items-center justify-between mt-4 bg-secondary rounded-md p-3 font-semibold">
                  <p>Final Amount</p>
                  <p> AED 360.00</p>
                </div>
              </div>

              <Button className="mx-6" size="lg" onClick={() => setStep(2)}>
                Next
              </Button>
            </div>
          );
      }
    },
    [methods, openModal]
  );

  const component = useCallback(
    (v: number) => {
      switch (v) {
        case 3:
          return (
            <div className="flex items-center bg-background p-6 rounded-md gap-4">
              <Checkbox defaultChecked />
              <p>By clicking Pay now you agree with Terms and Conditions</p>
              <Button
                onClick={openModal}
                size="lg"
                type="button"
                className="ml-auto"
              >
                Pay now
              </Button>
            </div>
          );
        case 4:
          return (
            <div className="bg-secondary p-3 rounded-md">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-background p-6 rounded-md gap-4">
                <p className="text-xl text-center">Print Vaucher</p>
                <Button size="lg" type="button">
                  <DownloadIcon />
                  Click here to download
                </Button>
              </div>
            </div>
          );

        default:
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 bg-primary/5 rounded-md gap-2">
              <div className="flex flex-col gap-3 col-span-1 md:col-span-2">
                <PaymentForm />
                <PaymentTypes />
                <div className="flex items-center bg-background p-6 rounded-md gap-4">
                  <Checkbox defaultChecked />
                  <p>By clicking Pay now you agree with Terms and Conditions</p>
                  <Button
                    onClick={openModal}
                    size="lg"
                    type="button"
                    className="ml-auto"
                  >
                    Pay now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-6 bg-background rounded-md">
                  <h1 className="text-center text-2xl font-semibold">
                    Atlantis Aquaventure Waterpark
                  </h1>

                  <span className="w-full border-b block mt-4"></span>

                  <ul className="flex flex-col gap-5 pt-5">
                    <li className="text-sm flex items-center justify-between">
                      <span>Tour Option</span>
                      <span>Atlantis day pass - (21st April - 4th June)</span>
                    </li>
                    <li className="text-sm flex items-center justify-between">
                      <span>Date</span>
                      <span>21/4/2025</span>
                    </li>
                    <li className="text-sm flex items-center justify-between">
                      <span>Transfer Type</span>
                      <span>Without Transfers</span>
                    </li>
                    <li className="text-sm flex items-center justify-between">
                      <span>Transfer Timings</span>
                      <span>1 Adult</span>
                    </li>
                    <li className="text-sm flex items-center justify-between font-bold text-red-500">
                      <span>Last Date to Cancel:</span>
                      <span>Non Refundable</span>
                    </li>
                    <li className="text-sm flex items-center justify-between">
                      <span>Availability</span>
                      <span>Available</span>
                    </li>
                    <li className="text-sm flex items-center justify-between">
                      <span>Amount Incl. VAT</span>
                      <span>AED 360.00</span>
                    </li>
                  </ul>

                  <span className="w-full border-b block my-5"></span>

                  <p className="text-primary text-sm">Enter Coupone code</p>

                  <div className="flex items-center gap-1">
                    <FormInput
                      methods={methods}
                      name="coupone"
                      variant="clean"
                      placeholder="Enter your coupone"
                      wrapperClassName="flex-1"
                      size="lg"
                    />
                    <Button size="lg" type="button">
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-md">
                  <h1 className="text-2xl font-semibold">Final Payment</h1>
                  <div className="flex items-center justify-between mt-4 bg-secondary rounded-md p-3 font-semibold">
                    <p>Final Amount</p>
                    <p> AED 360.00</p>
                  </div>
                </div>
              </div>
            </div>
          );
      }
    },
    [methods, openModal]
  );

  const mobileContent = useMemo(
    () => componentMobile(step),
    [step, componentMobile]
  );
  const desktopContent = useMemo(() => component(step), [step, component]);

  return (
    <FormProvider {...methods}>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl mb-6">
          Atlantis Aquaventure Waterpark
        </h1>
        <OrderSteps setStep={(v) => setStep(v)} />
        <div className="hidden sm:block">{desktopContent}</div>
        <div className="visible sm:hidden">{mobileContent}</div>
        <Modal
          modalKey="payment"
          titleClass="lg:text-3xl font-semibold text-2xl"
        >
          <PaymentModal />
        </Modal>
      </div>
    </FormProvider>
  );
}
