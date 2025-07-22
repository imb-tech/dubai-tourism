'use client';

import { CheckIcon, ClockIcon, UserIcon } from 'components/icons';
import React from 'react';
import WtpTable from './atraction-table';
import Modal from 'components/custom/modal';
import WtpInfo from './atraction-info';
import AttractionCardMobile from './attraction-card';
import { FormProvider, useForm } from 'react-hook-form';

export default function WtpForm({ data }: { data: AtractionDetail }) {
  const form = useForm<AtractionDetail>({
    defaultValues: {
      ...data,
      offers: data?.offers?.map((offer) => ({
        ...offer,
        adult: offer?.adult ?? 1,
        child: offer?.child ?? 0,
        infant: offer?.infant ?? 0,
      })),
    },
  });

  return (
    <div className="lg:px-6 py-6 px-3 rounded-lg bg-secondary mt-14">
      <FormProvider {...form}>
        <h2 className="text-xl lg:text-2xl font-semibold">{data?.name}</h2>
        <ul className="grid lg:grid-cols-3 grid-cols-1  gap-2 mt-3">
          <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
            <div className="text-primary">
              <ClockIcon size={36} />
            </div>
            <div className="flex flex-col">
              <span>Operating Hours</span>
              <span>{data?.opening_hours}</span>
            </div>
          </li>

          <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
            <div className="text-primary">
              <UserIcon size={36} />
            </div>
            <div className="flex flex-col">
              <span>Children </span>
              <span>{data?.children ? 'Yes' : 'No'}</span>
            </div>
          </li>

          <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
            <div className="text-primary">
              <CheckIcon size={36} />
            </div>
            <div className="flex flex-col">
              <span>Insurance</span>
              <span>{data?.insurance}</span>
            </div>
          </li>
        </ul>
        <h2 className="text-xl lg:text-2xl font-semibold mt-10 mb-3">Offers</h2>
        <div className="hidden lg:block">
          <WtpTable />
        </div>
        <div className="lg:hidden">
          {data.offers?.map((row, index) => (
            <AttractionCardMobile key={index} data={row} index={index} />
          ))}
        </div>
      </FormProvider>
      <Modal size="max-w-4xl" modalKey="more-info" title>
        <div className="max-h-[75vh] overflow-y-auto no-scrollbar ">
          <WtpInfo />
        </div>
      </Modal>
    </div>
  );
}
