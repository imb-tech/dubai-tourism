'use client';

import React, { ReactNode, useMemo, useState } from 'react';
import TransferSteps from './transfer-steps';
import TransferNotesForm from './transfer-notes-form';
import TransferCard from './transfer-card';
import TransferPersonalForm from './tranfer-personal-form';
import TransferPaymentForm from './transfer-payment-formt';
import { FormProvider, useForm } from 'react-hook-form';
import { usePost } from 'hooks/usePost';
import { toast } from 'sonner';
import { TRANSFERORDER } from 'constants/api-endpoints';

type QueryParams = {
  from_airport?: string | undefined;
  to_airport?: string | undefined;
  pickup_date: string | undefined;
  passengers?: string | undefined;
  return_date?: string | undefined;
};

export default function TransferDetail({
  data,
  initialQuery,
}: {
  data: Transfer;
  initialQuery: any;
}) {
  const { mutate, isPending } = usePost({
    onSuccess: (data) => {
      toast.success('Muvaffaqiyatli yaratildi!');
      window.location.href = data?.payment_url;
    },
  });
  const [step, setStep] = useState<number>(1);
  const [active, _setActive] = useState<number>(1);

  const methods = useForm<TransferOrderCreate>({
    defaultValues: {
      payment_type: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      meet_sign: '',
      promo_code: '',
      transfer: {
        transfer_rate: data?.id,
        pickup_date: initialQuery?.pickup_date ? initialQuery?.pickup_date : '',
        return_date: initialQuery?.return_date
          ? initialQuery?.return_date
          : null,
        passengers: Number(initialQuery.passengers ?? 1),
        child_seat: 0,
        booster_seat: 0,
        driver_notes: null,
        flight_number: null,
      },
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: any) => {
    console.log('all values => ', values);
    mutate(TRANSFERORDER, values);
  };

  const getContent = (st: string, data: Transfer, isPending: boolean) => {
    const cnt: Record<string, ReactNode> = {
      '1': (
        <TransferNotesForm
          transfer={data}
          setStep={setStep}
          _setActive={_setActive}
        />
      ),
      '2': <TransferPersonalForm setStep={setStep} _setActive={_setActive} />,
      '3': (
        <TransferPaymentForm
          setStep={setStep}
          _setActive={_setActive}
          isPending={isPending}
        />
      ),
    };

    return cnt[st];
  };

  const memoizedContent = useMemo(
    () => getContent(step.toString(), data, isPending),
    [data, step, isPending]
  );

  return (
    <div>
      <TransferSteps
        setStep={setStep}
        active={active}
        _setActive={_setActive}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:p-4 sm:bg-primary/5 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">{memoizedContent}</div>
            <aside>
              <TransferCard data={data} />
            </aside>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
