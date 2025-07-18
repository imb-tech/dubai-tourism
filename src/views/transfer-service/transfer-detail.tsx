'use client';
import React, { ReactNode, useMemo, useState } from 'react';
import TransferSteps from './transfer-steps';
import TransferNotesForm from './transfer-notes-form';
import TransferCard from './transfer-card';
import TransferPersonalForm from './tranfer-personal-form';
import TransferPaymentForm from './transfer-payment-formt';

export default function TransferDetail({ data }: { data: Transfer }) {
  const [step, setStep] = useState<number>(1);

  const content = (st: string, data: Transfer) => {
    const cnt: Record<string, ReactNode> = {
      '1': <TransferNotesForm data={data} />,
      '2': <TransferPersonalForm />,
      '3': <TransferPaymentForm />,
    };

    return cnt[st];
  };

  const memoizedContent = useMemo(
    () => content(step.toString(), data),
    [step, data]
  );

  return (
    <div>
      <TransferSteps setStep={(v) => setStep(v)} />
      <div className="sm:p-4 sm:bg-primary/5 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">{memoizedContent}</div>
        <aside>
          <TransferCard {...data} />
        </aside>
      </div>
    </div>
  );
}
