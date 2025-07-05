'use client';
import SelectField from 'components/form/select';
import { CartIcon, WhatsappIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { Card, CardContent, CardHeader } from 'components/ui/card';
import { DatePicker } from 'components/ui/datepicker';
import { useModal } from 'hooks/use-modal';
import { formatMoney } from 'lib/utils';
import { Minus, Plus, User } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddToCartAttraction from './attraction-add';

const agesTypes = [
  {
    id: 'adult',
    name: 'Adult',
  },
  {
    id: 'child',
    name: 'Child',
  },
  {
    id: 'infant',
    name: 'Infant',
  },
];

const AttractionCardMobile = ({ data }: { data: Atraction }) => {
  const { openModal } = useModal('more-info');
  const methods = useForm<{ name: number }>();
  const [agesQuantity, setAgesQuantity] = useState<{ [key: string]: number }>({
    adult: 0,
    child: 0,
    infant: 0,
  });

  const handleAdd = (value: string) => {
    setAgesQuantity((prev) => ({
      ...prev,
      [value]: prev[value] + 1,
    }));
  };
  const handleDelete = (value: string) => {
    setAgesQuantity((prev) => {
      if (prev[value] > 0) {
        return { ...prev, [value]: prev[value] - 1 };
      } else {
        return prev;
      }
    });
  };

  return (
    <Card className="lg:hidden mb-4">
      <CardHeader>
        <span>{data.tour_options}</span>
        <span className="underline text-blue-500 mr-auto" onClick={openModal}>
          More info
        </span>
      </CardHeader>
      <CardContent>
        <SelectField
          methods={methods}
          name="name"
          options={[{ id: 1, name: 'Doniyor' }]}
          wrapperClassName="w-auto"
          placeholder="Sharing Transfers"
          className="mb-2"
        />
        <DatePicker className="w-full mb-2" />
        <div className="space-y-3">
          {agesTypes.map((item, index) => (
            <div
              key={index}
              className="p-2 mb-2 bg-secondary rounded-sm text-sm"
            >
              <div className="grid grid-cols-2 items-center">
                <p className="font-normal">{item.name}</p>
                <div className="grid grid-cols-3 gap-1 items-center ml-auto">
                  <Button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="w-8 h-8 rounded-full p-0 bg-white hover:bg-secondary"
                  >
                    <Minus className="w-4 p-0 text-black" />
                  </Button>
                  <p className="text-center font-normal">
                    {agesQuantity[item.id]}
                  </p>
                  <Button
                    onClick={() => {
                      handleAdd(item.id);
                    }}
                    className="w-8 h-8 rounded-full p-0 bg-white hover:bg-secondary"
                  >
                    <Plus className="w-4 p-0 text-black" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-[12px] text-primary">
                <span>
                  <User className="w-4 h-4" />
                </span>
                <span className=""> +300 AED per {item.id}</span>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-4 h-0.5" />
        <div className="grid grid-cols-2 mx-auto content-between text-sm font-bold">
          <p className="">Total</p>
          <p className="text-end">AED {formatMoney(360)}</p>
        </div>
        <AddToCartAttraction data={[{ ...data, ...agesQuantity }]} />
      </CardContent>
    </Card>
  );
};

export default AttractionCardMobile;
