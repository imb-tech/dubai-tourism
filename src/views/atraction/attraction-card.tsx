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

const AttractionCardMobile = ({ data }: { data: Atraction }) => {
  const { openModal } = useModal('more-info');
  const methods = useForm<{ name: number }>();
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  const decrase = (
    value: number,
    func: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (value > 0) func(value - 1);
  };

  const increase = (
    value: number,
    func: React.Dispatch<React.SetStateAction<number>>
  ) => {
    func(value + 1);
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
        <div className="p-2 mb-2 bg-secondary rounded-sm text-sm">
          <div className="grid grid-cols-2 items-center">
            <p className="font-normal">Adult</p>
            <div className="grid grid-cols-3 gap-1 items-center ml-auto">
              <Button
                onClick={() => {
                  decrase(adult, setAdult);
                }}
                className="w-8 h-8 rounded-full p-0 bg-white hover:bg-secondary"
              >
                <Minus className="w-4 p-0 text-black" />
              </Button>
              <p className="text-center font-normal">{adult}</p>
              <Button
                onClick={() => {
                  increase(adult, setAdult);
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
            <span className=""> +300 AED per adult</span>
          </div>
        </div>
        <div className="p-2 mb-2 bg-secondary rounded-sm text-sm ">
          <div className="grid grid-cols-2 items-center">
            <p className="font-normal">Child (3-7 Yrs)</p>
            <div className="grid grid-cols-3 gap-1 items-center ml-auto">
              <Button
                onClick={() => {
                  decrase(child, setChild);
                }}
                className="w-8 h-8 rounded-full p-0 bg-white hover:bg-secondary"
              >
                <Minus className="w-4 p-0 text-black" />
              </Button>
              <p className="text-center font-normal">{child}</p>
              <Button
                onClick={() => {
                  increase(child, setChild);
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
            <span className="">+230 AED per child</span>
          </div>
        </div>
        <div className="p-2 bg-secondary rounded-sm text-sm">
          <div className="grid grid-cols-2 items-center">
            <p className="font-normal">Infant (0-3 Yrs)</p>
            <div className="grid grid-cols-3 gap-1 items-center ml-auto">
              <Button
                onClick={() => {
                  decrase(infant, setInfant);
                }}
                className="w-8 h-8 rounded-full p-0 bg-white hover:bg-secondary"
              >
                <Minus className="w-4 p-0 text-black" />
              </Button>
              <p className="text-center font-normal">{infant}</p>
              <Button
                onClick={() => {
                  increase(infant, setInfant);
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
            <span className="">+230 AED per infant</span>
          </div>
        </div>
        <hr className="my-4 h-0.5" />
        <div className="grid grid-cols-2 mx-auto content-between text-sm font-bold">
          <p className="">Total</p>
          <p className="text-end">AED {formatMoney(360)}</p>
        </div>
        <AddToCartAttraction data={[{ ...data, adult, child, infant }]} />
      </CardContent>
    </Card>
  );
};

export default AttractionCardMobile;
