'use client';
import React, { ReactNode, useMemo, useState } from 'react';
import TransferSteps from './transfer-steps';
import TransferNotesForm from './transfer-notes-form';
import TransferCard from './transfer-card';
import TransferPersonalForm from './tranfer-personal-form';
import TransferPaymentForm from './transfer-payment-formt';

export default function TransferDetail() {
  const [step, setStep] = useState<number>(1);

  const content = (st: string) => {
    const cnt: Record<string, ReactNode> = {
      '1': <TransferNotesForm />,
      '2': <TransferPersonalForm />,
      '3': <TransferPaymentForm />,
    };

    return cnt[st];
  };

  const memoizedContent = useMemo(() => content(step.toString()), [step]);

  const data = {
    id: 1,
    name: 'Lambar gambar',
    image:
      'https://s3-alpha-sig.figma.com/img/0f7d/b948/24f139d6e8e95cda732725bf48af5e86?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aw2B8DstoCu7S77CiQ98SaRuThV3jBzo~LYjlGCCOu3IqglsQ-zDVrFBG0DVdrPrpIkn5biwmzyBgaC36SUVxhM5Ey3mDc06f8TKmwOGtCE8i3JUDoxNapJ7JlNEsEmkWR9GytgFkVMtRRStEK9pes2-QMSUbPHOk7wu7honzqLFvzCqNb3gOvwCNMrkV11BvjvyUeVw2Z8W4~DZU8lmfL4Z1yUnnQrVVRBdYKp~r~r9i4zDrZ8VKaFebj4WYoOlJQBroJVNsqYnQ0v-8Q1AkcF47Iq3qKd8J6jPMJC6~bBWAKZ~Nwb9nqYcIIojxtve1xRJl7PZiDuKuBSNpfwOmA__',
    suffix: '1',
    reviewsCount: 12,
    rating: 4.5,
    discount: 350,
    slug: '1',
    price: 375,
    url: '/transfer-service/1',
  };

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
