'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Search, X } from 'lucide-react';
import { CalendarIcon, ClockIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { BagIcon, UserIcon } from 'components/icons';
import { Badge } from 'components/ui/badge';
import IconFormDatePicker from 'components/ui/prefixy-date-picker';
import IconFormTimePicker from 'components/ui/prefixy-time-picker';
import { useForm } from 'react-hook-form';
import { dateForBackend } from 'lib/utils';

type Props = {
  data: Transfer;
  allData: TransferOrderCreate;
  setAllData: React.Dispatch<React.SetStateAction<TransferOrderCreate>>;
};

type Fields = {
  returnDate: string;
  returnTime: string;
};

export default function TransferCard({ data, allData, setAllData }: Props) {
  const [isReturn, setIsReturn] = useState(false);
  const form = useForm<Fields>();
  const { handleSubmit } = form;

  const onSubmit = (data: Fields) => {
    const return_date = dateForBackend(data?.returnDate, data?.returnTime);
    setAllData({
      ...allData,
      transfer: { ...allData.transfer, return_date },
    });
  };

  return (
    <div className="bg-background rounded-md p-4 relative  shadow">
      {data?.best_seller && (
        <Badge className="absolute bg-[#FF5533] top-0 left-0 p-2 text-white text-xs font-medium rounded-none rounded-tl-lg rounded-br-lg">
          Best seller
        </Badge>
      )}
      <Image
        src={data?.transfer?.image}
        alt="camara"
        width={450}
        height={450}
        priority
        style={{ height: 'auto' }}
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{data?.transfer?.name}</h3>

        <ul className="flex items-center gap-5 py-1 w-full">
          <li className="flex items-center gap-1 text-[#74AEF8]">
            <UserIcon size={18} />
            <span className="text-black font-semibold md:text-sm text-sm">
              {data?.transfer?.passengers} passengers
            </span>
          </li>
          <li className="flex items-center gap-1 text-[#74AEF8]">
            <BagIcon size={18} />
            <span className="text-black font-semibold md:text-sm text-sm">
              {data?.transfer?.luggage} luggages
            </span>
          </li>
        </ul>

        <span className="border-t h-1 w-full my-2"></span>

        <div>
          <p className="font-semibold">Outward Journey</p>

          <ul className="py-2">
            <li>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <span className="block size-3 bg-black/40 rounded-full"></span>
                <span className="flex flex-col">
                  <span className="text-base">{data?.from_airport?.name}</span>
                  <span className="font-light">
                    {data?.from_airport?.country}
                  </span>
                </span>
              </p>
            </li>
            <li className="pl-[5px]">
              <span className="block h-3 border-l border-l-primary/80"></span>
            </li>
            <li>
              <p className="flex items-center gap-1 text-sm font-semibold">
                <span className="block size-3 bg-primary/80 rounded-full"></span>
                <span className="flex flex-col">
                  <span className="text-base">{data?.to_airport?.name}</span>
                  <span className="font-light">
                    {data?.to_airport?.country}
                  </span>
                </span>
              </p>
            </li>
          </ul>

          <p className="flex items-center gap-3 font-semibold mt-1">
            <span className="text-primary">
              <CalendarIcon size={16} />
            </span>
            <span className="text-sm">03 May 2025</span>
          </p>

          <p className="flex items-center gap-3 font-semibold mt-3">
            <span className="text-primary">
              <ClockIcon size={16} />
            </span>
            <span className="text-sm">12:35(1:35 pm)</span>
          </p>
        </div>

        <span className="border-t h-1 w-full my-2"></span>

        {!isReturn && (
          <Button
            size="default"
            className="border-primary w-full text-white font-semibold text-base py-2 h-12"
            onClick={(e) => {
              e.preventDefault();
              setIsReturn(true);
            }}
          >
            <Plus size={18} /> Add return
          </Button>
        )}

        {isReturn && (
          <>
            <ul className="py-2">
              <li>
                <p className="flex items-center gap-1 text-sm font-semibold">
                  <span className="block size-3 bg-primary/80 rounded-full"></span>
                  <span className="flex flex-col">
                    <span className="text-base">{data?.to_airport?.name}</span>
                    <span className="font-light">
                      {data?.to_airport?.country}
                    </span>
                  </span>
                </p>
              </li>
              <li className="pl-[5px]">
                <span className="block h-3 border-l border-l-primary/80"></span>
              </li>
              <li>
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <span className="block size-3 bg-black/40 rounded-full"></span>
                  <span className="flex flex-col">
                    <span className="text-base">
                      {data?.from_airport?.name}
                    </span>
                    <span className="font-light">
                      {data?.from_airport?.country}
                    </span>
                  </span>
                </p>
              </li>
            </ul>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 relative">
                <IconFormDatePicker
                  label="Return date"
                  methods={form}
                  name="returnDate"
                />
                <IconFormTimePicker
                  label="Return time"
                  methods={form}
                  name="returnTime"
                />
                <span
                  className="absolute -right-1 -top-1 bg-background text-primary border border-primary rounded-full p-1 cursor-pointer"
                  onClick={() => setIsReturn(false)}
                >
                  <X size={12} />
                </span>
              </div>
              <Button type="submit" className="h-10 w-full mt-3">
                <span className="text-base">Search</span>
                <Search size={20} />
              </Button>
            </form>
          </>
        )}
        <span className="border-t h-1 w-full my-2"></span>
        <ul className="flex flex-col gap-4 ">
          <li className="flex items-center gap-2 text-[#74AEF8]">
            <UserIcon size={20} />
            <span className="text-black font-semibold md:text-sm text-sm">
              {data?.transfer?.passengers} passengers
            </span>
          </li>
          <li className="flex items-center gap-2 text-[#74AEF8]">
            <UserIcon size={20} />
            <span className="text-black font-semibold md:text-sm text-sm">
              {data?.distance_km} km/{data?.distance_mile} miles
            </span>
          </li>
          <li className="flex items-center gap-2 text-[#74AEF8]">
            <span className="text-primary">
              <ClockIcon size={20} />
            </span>
            <span className="text-black font-semibold md:text-sm text-sm">
              {data?.distance_hour}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
