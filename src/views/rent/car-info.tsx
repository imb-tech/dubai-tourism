import { CheckIcon, PriceIcon, WhatsappIcon } from 'components/icons';
import Money from 'components/shared/money';
import { Button } from 'components/ui/button';
import { formatMoney } from 'lib/utils';
import React from 'react';

type CarInfo = {
  model: number;
  delivery: string;
  insurance: string;
  kms: number;
  deposit: number | false;
  minage: number;
};

const keys: Record<keyof CarInfo, string> = {
  model: 'Model',
  delivery: 'Dubai Free',
  insurance: 'Insurance',
  kms: 'KMs',
  deposit: 'Deposit',
  minage: 'Min age',
};

export default function CarInfo() {
  return (
    <div className="lg:px-6 px-3 py-6 rounded-lg bg-secondary lg:mt-20 mt-10">
      <h2 className="lg:text-4xl text-2xl font-semibold m-0">Mercedes G63 AMG</h2>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-3">
        {Object.entries(keys).map(([k, v]) => (
          <li
            className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md"
            key={k}
          >
            <div className="text-primary">
              <CheckIcon size={32} />
            </div>
            <div className="flex flex-col">
              <span>{v}</span>
              <span>Full</span>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="lg:text-3xl text-2xl font-semibold mt-8">Rental Price</h2>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-3">
        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <PriceIcon size={36} />
          </div>
          <div className="flex flex-col">
            <span>Daily</span>
            <span>{(10000).toLocaleString()} AED</span>
          </div>
        </li>

        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <PriceIcon size={36} />
          </div>
          <div className="flex flex-col">
            <span>Weekly </span>
            <span>{(10000).toLocaleString()} AED</span>
          </div>
        </li>

        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <PriceIcon size={36} />
          </div>
          <div className="flex flex-col">
            <span>Monthly</span>
            <span>{(10000).toLocaleString()} AED</span>
          </div>
        </li>
      </ul>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-5">
        <Button size="lg">Ariza qoldirish</Button>
        <Button
          size="lg"
          variant="ghost"
          className="bg-[#52C41A] hover:bg-[#53c41add] text-white hover:text-white gap-1"
        >
          <WhatsappIcon size={25} />
          <span>Whatsapp</span>
        </Button>
      </div>
    </div>
  );
}
