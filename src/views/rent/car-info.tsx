import { CheckIcon, PriceVIpIcon, WhatsappIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import React from 'react';

type CarInfo = {
  model: number;
  delivery: string;
  insurance: string;
  kms: number;
  deposit: number | false;
  minage: number;
};

export default function CarInfo({ cars }: { cars: RentCar | null }) {
  const carsInfo = [
    {
      id: 1,
      label: 'Model',
      value: cars?.year,
    },
    {
      id: 2,
      label: 'Insurance',
      value: cars?.insurance,
    },
    {
      id: 3,
      label: 'Deposit',
      value: cars?.deposit ? 'Yes' : 'No',
    },
    {
      id: 4,
      label: 'Delivery',
      value: cars?.delivery,
    },
    {
      id: 5,
      label: 'KMs',
      value: cars?.km_per_day,
    },
    {
      id: 6,
      label: 'Min age',
      value: cars?.min_age,
    },
  ];

  return (
    <div className="lg:px-6 px-3 py-6 rounded-lg bg-secondary lg:mt-20 mt-10">
      <h1 className="lg:text-4xl text-2xl font-semibold m-0 ">{cars?.name}</h1>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-4">
        {carsInfo.map((item) => (
          <li
            className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md"
            key={item.id}
          >
            <div className="text-primary">
              <CheckIcon size={32} />
            </div>
            <div className="flex flex-col capitalize">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="lg:text-3xl text-2xl font-semibold mt-8">Rental Price</h2>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-3">
        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <span className="text-primary">
              {' '}
              <PriceVIpIcon />
            </span>
          </div>
          <div className="flex flex-col">
            <span>Daily</span>
            <span>{(10000).toLocaleString()} AED</span>
          </div>
        </li>

        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <span className="text-primary">
              {' '}
              <PriceVIpIcon />
            </span>
          </div>
          <div className="flex flex-col">
            <span>Weekly </span>
            <span>{(10000).toLocaleString()} AED</span>
          </div>
        </li>

        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <span className="text-primary">
              {' '}
              <PriceVIpIcon />
            </span>
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
