'use client';

import React, { ReactNode, useMemo, useState } from 'react';
import TransferSteps from './transfer-steps';
import TransferNotesForm from './transfer-notes-form';
import TransferCard from './transfer-card';
import TransferPersonalForm from './tranfer-personal-form';
import TransferPaymentForm from './transfer-payment-formt';

export default function TransferDetail({ data }: { data: Transfer }) {
  const [step, setStep] = useState<number>(1);
  const [active, _setActive] = useState<number>(1);
  const [allData, setAllData] = useState<TransferOrderCreate>({
    payment_type: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    meet_sign: '',
    promo_code: '',
    transfer: {
      transfer_rate: data?.id,
      pickup_date: '',
      return_date: '',
      passengers: 0,
      child_seat: 0,
      booster_seat: 0,
      driver_notes: '',
      flight_number: '',
    },
  });

  const getContent = (
    st: string,
    data: Transfer,
    allData: TransferOrderCreate
  ) => {
    const cnt: Record<string, ReactNode> = {
      '1': (
        <TransferNotesForm
          transfer={data}
          allData={allData}
          setStep={setStep}
          _setActive={_setActive}
          setAllData={setAllData}
        />
      ),
      '2': (
        <TransferPersonalForm
          setAllData={setAllData}
          allData={allData}
          setStep={setStep}
          _setActive={_setActive}
        />
      ),
      '3': (
        <TransferPaymentForm
          setStep={setStep}
          _setActive={_setActive}
          setAllData={setAllData}
          allData={allData}
        />
      ),
    };

    return cnt[st];
  };

  console.log(allData);

  const memoizedContent = useMemo(
    () => getContent(step.toString(), data, allData),
    [step, data, allData]
  );

  return (
    <div>
      <TransferSteps
        setStep={(v) => setStep(v)}
        active={active}
        _setActive={_setActive}
      />
      <div className="sm:p-4 sm:bg-primary/5 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">{memoizedContent}</div>
        <aside>
          <TransferCard data={data} allData={allData} setAllData={setAllData} />
        </aside>
      </div>
    </div>
  );
}
