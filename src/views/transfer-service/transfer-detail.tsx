'use client';
import React, { ReactNode, useMemo, useState } from 'react';
import TransferSteps from './transfer-steps';
import TransferNotesForm from './transfer-notes-form';
import TransferCard from './transfer-card';

export default function TransferDetail() {
  const [step, setStep] = useState<number>(1);

  const content = (st: string) => {
    const cnt: Record<string, ReactNode> = {
      '1': <TransferNotesForm />,
      '2': <div></div>,
      '3': <div></div>,
    };

    return cnt[st];
  };

  const memoizedContent = useMemo(() => content(step.toString()), [step]);

  return (
    <div>
      <TransferSteps setStep={(v) => setStep(v)} />
      <div className="p-4 bg-primary/5 rounded-md grid grid-cols-3 gap-4">
        <div className="col-span-2">{memoizedContent}</div>
        <aside>
          <TransferCard />
        </aside>
      </div>
    </div>
  );
}
