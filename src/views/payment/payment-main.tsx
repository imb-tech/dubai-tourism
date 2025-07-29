'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { DownloadIcon } from 'lucide-react';
import { useGet } from 'hooks/useGet';
import { BASKET } from 'constants/api-endpoints';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'components/ui/accordion';
import Modal from 'components/custom/modal';
import PaymentModal from './payment-modal';
import PaymentForm from './payment-form';
import PaymentTypes from './payment-types';
import OrderSteps, { CartIcon, PrintIcon } from './order-steps';
import { usePost } from 'hooks/usePost';
import { Input } from 'components/ui/input';
import { useQueryClient } from '@tanstack/react-query';
import { formatMoney } from 'lib/utils';
import { toast } from 'sonner';

type FormFields = {
  name: string;
  coupone: string;
  first_name: string;
  last_name: string;
  email: string;
  payment_type: string;
};

export default function PaymentMain() {
  const queryClient = useQueryClient();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const methods = useForm<FormFields>();
  const { handleSubmit } = methods;
  const [step, setStep] = useState(1);

  const { data } = useGet<{ id: number; attractions: AtractionOffers[] }>(
    BASKET
  );

  const { mutate, isPending } = usePost({
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [BASKET] });
      window.location.href = data.payment_url;
    },
  });

  const onSubmit = (values: FormFields) => {
    const promo_codes = data?.attractions
      .filter((item) => item.code)
      .map((item) => ({
        code: item.code,
        id: item.attraction_offer,
      }));

    if (!data?.id) return;
    mutate('payment/order/attraction', {
      ...values,
      basket_id: data.id,
      promo_codes,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto">
          <h1 className="text-center text-3xl mb-6">
            Atlantis Aquaventure Waterpark
          </h1>

          <OrderSteps setStep={setStep} steps={steps} />

          <StepContent
            step={step}
            isMobile={isMobile}
            data={data}
            isPending={isPending}
          />

          <Modal
            modalKey="payment"
            titleClass="lg:text-3xl font-semibold text-2xl"
          >
            <PaymentModal />
          </Modal>
        </div>
      </form>
    </FormProvider>
  );
}

const steps = [
  {
    id: 1,
    label: 'Add to cart',
    icon: CartIcon,
  },
  {
    id: 2,
    label: 'Print Vaucher',
    icon: PrintIcon,
  },
];

function StepContent({
  step,
  isMobile,
  data,
  isPending,
}: {
  step: number;
  isMobile: boolean;
  isPending: boolean;
  data: { id: number; attractions: AtractionOffers[] } | undefined;
}) {
  const totalPrice = useMemo(() => {
    return data?.attractions?.reduce(
      (sum, item) => sum + Number(item.price || 0),
      0
    );
  }, [data]);

  if (step === 2) {
    return (
      <div className="bg-secondary p-4 rounded-md text-center">
        <h2 className="text-xl mb-4">Print Voucher</h2>
        <Button>
          <DownloadIcon className="mr-2" /> Click here to download
        </Button>
      </div>
    );
  }

  return (
    <div
      className={`grid ${
        isMobile ? '' : 'grid-cols-3 gap-4'
      } p-4 bg-primary/5 rounded-md`}
    >
      <div className={`${isMobile ? '' : 'col-span-2'} flex flex-col gap-4`}>
        <PaymentForm />
        <PaymentTypes />
        <div className="bg-background p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <Checkbox defaultChecked />
          <p className="text-sm">
            By clicking Pay now you agree with Terms and Conditions
          </p>
          <Button disabled={isPending} loading={isPending} type="submit">
            Pay now
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {data?.attractions && renderAttractionDetails(data?.attractions)}
        <FinalPaymentCard totalAmount={totalPrice || 0} />
      </div>
    </div>
  );
}

function CouponeForm({
  basket_attraction_id,
  disabled,
  codeItem,
}: {
  basket_attraction_id: number;
  disabled: boolean;
  codeItem: string;
}) {
  const queryClient = useQueryClient();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (codeItem) {
      setCode(codeItem);
    }
  }, [codeItem]);

  const { mutate, isPending } = usePost({
    onSuccess: (data) => {
      const resPrice: number = data.total_price;

      if (resPrice === 0) {
        toast.error('Promokod mavjud emas');
        return;
      }

      const onlyData = queryClient.getQueryData<{
        id: number;
        attractions: AtractionOffers[];
      }>([BASKET]);
      if (!onlyData) return;

      const updateData = {
        ...onlyData,
        attractions: onlyData?.attractions.map((item) =>
          item.id === basket_attraction_id
            ? {
                ...item,
                price: item.price - resPrice,
                disabled: true,
                code: code,
              }
            : item
        ),
      };
      queryClient.setQueryData([BASKET], updateData);
    },
  });

  const onSubmit = () => {
    mutate('payment/check-discount', { code, basket_attraction_id });
  };

  return (
    <div className=" bg-white  border-b py-3 px-0.5">
      <p className="text-primary text-sm mb-2">Enter Coupon Code</p>
      <div className="flex items-end gap-2 w-full">
        <Input
          value={code}
          fullWidth
          variant="clean"
          placeholder="Enter your coupon"
          size="sm"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
        <Button
          className="h-10"
          disabled={!code || isPending || disabled}
          loading={isPending}
          type="button"
          onClick={onSubmit}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

const renderAttractionDetails = (items: AtractionOffers[]) => (
  <Accordion type="single" collapsible defaultValue="0">
    {items.map((item, index) => (
      <AccordionItem
        key={index}
        value={index.toString()}
        className="bg-white px-4 border-none rounded-lg mb-2"
      >
        <AccordionTrigger className="font-semibold text-lg">
          {item.name}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 py-4 border-b text-sm">
            <li className="flex justify-between">
              <span>Tour Option</span>
              <span>{item.name}</span>
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
              <span>{item.is_refundable}</span>
            </li>
            <li className="flex justify-between">
              <span>Availability</span>
              <span>{item.available}</span>
            </li>
            <li className="flex justify-between">
              <span>Amount Incl. VAT</span>
              <span>AED {item.vat}</span>
            </li>
          </ul>
          <CouponeForm
            basket_attraction_id={item.id}
            disabled={item.disabled}
            codeItem={item.code}
          />
          <div className="w-full mt-2 font-semibold flex  justify-between items-center gap-3">
            <h1>Total</h1>
            <h1>AED {formatMoney(item.price)}</h1>
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const FinalPaymentCard = ({ totalAmount }: { totalAmount: number }) => {
  return (
    <div className="bg-white p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Final Payment</h2>
      <div className="flex justify-between bg-secondary p-3 rounded-md font-semibold">
        <span>Final Amount</span>
        <span>AED {formatMoney(totalAmount)}</span>
      </div>
    </div>
  );
};
