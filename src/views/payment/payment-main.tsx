'use client';

import React, { useState, useMemo } from 'react';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { DownloadIcon } from 'lucide-react';
import { useModal } from 'hooks/use-modal';
import { useGet } from 'hooks/useGet';
import { BASKET } from 'constants/api-endpoints';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'components/ui/accordion';
import FormInput from 'components/form/input';
import Modal from 'components/custom/modal';
import PaymentModal from './payment-modal';
import PaymentForm from './payment-form';
import PaymentTypes from './payment-types';
import OrderSteps from './order-steps';

type FormFields = { name: string; coupone: string };

type CouponeFormProps<T extends Record<string, any>> = {
  methods: UseFormReturn<T>;
};

type FormApple = {
  coupone: string;
};

type AtractionOffers = {
  name: string;
  transfer_option: any;
  tour_date: string;
  adult: number;
  price: string;
};

const renderAttractionDetails = (items: AtractionOffers[]) => (
  <Accordion type="single" collapsible defaultValue="0">
    {items.map((item, index) => (
      <AccordionItem
        key={index}
        value={index.toString()}
        className="bg-[#F5F8FC] px-4 rounded-lg"
      >
        <AccordionTrigger className="font-semibold text-lg">
          {item.name}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 pt-4 text-sm">
            <li className="flex justify-between">
              <span>Tour Option</span>
              <span>{item.transfer_option.name}</span>
            </li>
            <li className="flex justify-between">
              <span>Date</span>
              <span>{item.tour_date}</span>
            </li>
            <li className="flex justify-between">
              <span>Transfer Type</span>
              <span>{item.transfer_option.name}</span>
            </li>
            <li className="flex justify-between">
              <span>Transfer Timings</span>
              <span>{item.adult} Adult</span>
            </li>
            <li className="flex justify-between text-red-500 font-bold">
              <span>Last Date to Cancel</span>
              <span>Non Refundable</span>
            </li>
            <li className="flex justify-between">
              <span>Availability</span>
              <span>Available</span>
            </li>
            <li className="flex justify-between">
              <span>Amount Incl. VAT</span>
              <span>AED {item.price}</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

function CouponeForm() {
  const form = useForm();
  const { handleSubmit, reset } = form;
  return (
    <div className="my-4">
      <p className="text-primary text-sm mb-2">Enter Coupon Code</p>
      <form className="flex items-end gap-2">
        <FormInput
          methods={form}
          name="coupone"
          label="Coupon code"
          variant="clean"
          placeholder="Enter your coupon"
        />
        <Button type="button">Apply</Button>
      </form>
    </div>
  );
}

const FinalPaymentCard = () => (
  <div className="bg-background p-6 rounded-md">
    <h2 className="text-xl font-semibold mb-4">Final Payment</h2>
    <div className="flex justify-between bg-secondary p-3 rounded-md font-semibold">
      <span>Final Amount</span>
      <span>AED 360.00</span>
    </div>
  </div>
);

const StepContent = ({ step, isMobile, data, openModal, setStep }: any) => {
  switch (step) {
    case 2:
    case 3:
      return (
        <div className="flex flex-col gap-4">
          <PaymentForm />
          <PaymentTypes />
          <div className="bg-background p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <Checkbox defaultChecked />
            <p className="text-sm">
              By clicking Pay now you agree with Terms and Conditions
            </p>
            <Button onClick={openModal}>Pay now</Button>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="bg-secondary p-4 rounded-md text-center">
          <h2 className="text-xl mb-4">Print Voucher</h2>
          <Button>
            <DownloadIcon className="mr-2" /> Click here to download
          </Button>
        </div>
      );
    default:
      return (
        <div
          className={`grid ${
            isMobile ? '' : 'grid-cols-3 gap-4'
          } p-4 bg-primary/5 rounded-md`}
        >
          <div
            className={`${isMobile ? '' : 'col-span-2'} flex flex-col gap-4`}
          >
            {renderAttractionDetails(data?.attractions || [])}
            <CouponeForm />
            <FinalPaymentCard />
            <Button onClick={() => setStep(2)}>Next</Button>
          </div>
        </div>
      );
  }
};

export default function PaymentMain() {
  const methods = useForm<FormFields>();
  const [step, setStep] = useState(1);
  const { openModal } = useModal('payment');
  const { data } = useGet<{ id: number; attractions: AtractionOffers[] }>(
    BASKET
  );

  const content = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    return (
      <StepContent
        step={step}
        isMobile={isMobile}
        data={data}
        methods={methods}
        openModal={openModal}
        setStep={setStep}
      />
    );
  }, [step, data]);

  return (
    <FormProvider {...methods}>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl mb-6">
          Atlantis Aquaventure Waterpark
        </h1>
        <OrderSteps setStep={setStep} />
        {content}
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
