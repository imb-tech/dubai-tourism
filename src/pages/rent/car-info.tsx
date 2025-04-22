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
    <div className="p-6 rounded-lg bg-secondary mt-20">
      <h2 className="text-4xl font-semibold m-0">Mercedes G63 AMG</h2>
      <ul className="grid grid-cols-3 gap-2 mt-3">
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

      <h2 className="text-3xl font-semibold mt-8">Rental Price</h2>
      <ul className="grid grid-cols-3 gap-2 mt-3">
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

      <div className="grid grid-cols-2 gap-2 mt-5">
        <Button size="lg">Ariza qoldirish</Button>
        <Button
          size="lg"
          variant="ghost"
          className="bg-white hover:bg-white text-primary hover:text-primary gap-1"
        >
          <WhatsappIcon size={25} />
          <span>Whatsapp</span>
        </Button>
      </div>
    </div>
  );
}
