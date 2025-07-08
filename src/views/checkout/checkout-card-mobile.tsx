import SelectField from 'components/form/select';
import { Button } from 'components/ui/button';
import { Card, CardContent, CardHeader } from 'components/ui/card';
import { DatePicker } from 'components/ui/datepicker';
import { useModal } from 'hooks/use-modal';
import { formatMoney } from 'lib/utils';
import { Minus, Plus, Trash2, User } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAtractionStore } from 'store/atraction';

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

const CheckoutCardMobile = ({ item }: { item: Atraction }) => {
  const methods = useForm<{ name: number }>();
  const { openModal } = useModal('more-info');
  const { removeAtraction } = useAtractionStore();

  const [agesQuantity, setAgesQuantity] = useState<{ [key: string]: number }>({
    adult: item.adult,
    child: item.child,
    infant: item.infant,
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
      <div className="flex gap-4 items-center">
        <Trash2
          onClick={() => {
            removeAtraction(item.id);
          }}
          className="text-rose-500"
          size={20}
        />
        <span>Remove from cart</span>
      </div>
      <Image
        src="https://s3-alpha-sig.figma.com/img/498f/3c16/0ac401abded78d7605a4908270b35998?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W4knZCf6OK1S62n6oX8KrGtj1YqH3Gp473tWlJme3TbY9BonyjlFFT-6JWsasCzpCUptj8SMhNr9KT8C8zGc3zI5r6W~gQl0h4XRKPxpV82kPOKMy-E-swtHAXKivaw7C9tTkpBmpTCeZo5XNqE~fXZNLWOc2JMzLFhpSyHrPzVquR0q7TCqQHLADw2HdYTmCpN5OgRNzeQupE6hBJ4c-3OlpNXZMSPP4kyWQnQhLKR6fAoND-0EwKn3vx33K46JNanoa4tWmPHCqbz82MzNNpy1S0-OZGJOZEqkM69~53tmxqUx8X84yEmpuzsa3zmMkn8ev4ok67wlikAkc-O9wg__"
        alt="logo"
        className="size-[100px] rounded-md"
        width={100}
        height={100}
      />
      <CardHeader>
        <span>{item.tour_options}</span>
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
      </CardContent>
    </Card>
  );
};

export default CheckoutCardMobile;
