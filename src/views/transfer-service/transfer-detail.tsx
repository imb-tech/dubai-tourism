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

export default function TransferDetail({
  data,
  searchParams,
}: {
  data: Transfer;
  searchParams: any
}) {
  const { from_date, from_time, return_date, return_time, passengers } =
    searchParams;

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
      transfer: {
        transfer_rate: data.id,
        pickup_date: `${from_date}T${from_time}Z`,
        return_date: `${return_date}T${return_time}Z`,
        passengers: Number(passengers),
      },
    },
  });


  const { handleSubmit } = methods;

  const onSubmit = (values: any) => {
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
