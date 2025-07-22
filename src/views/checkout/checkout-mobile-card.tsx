'use client';
import { Button } from 'components/ui/button';
import { Card, CardContent } from 'components/ui/card';
import { DatePicker } from 'components/ui/datepicker';
import Select from 'components/ui/select';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useAtractionCustom } from 'views/atraction/use-atraction-custom';
import Image from 'next/image';
import { StarIcon, UserIcon } from 'components/icons';
import { agesTypes } from 'views/atraction/attraction-card';
import { usePost } from 'hooks/usePost';
import { useDelete } from 'hooks/useDelete';
import { useModal } from 'hooks/use-modal';
import { useQueryClient } from '@tanstack/react-query';
import { BASKET, BASKETDELETE } from 'constants/api-endpoints';
import { toast } from 'sonner';
import { formatMoney } from 'lib/utils';

const CheckoutCardMobile = ({
  data,
  index,
}: {
  data: AtractionOffers;
  index: number;
}) => {
  const { mutate } = usePost();
  const { updateRow, renderPrice, offers, today } = useAtractionCustom();
  const { openModal } = useModal('more-info');
  const querClinet = useQueryClient();

  const { mutate: mutateDelete } = useDelete({
    onSuccess: () => {
      querClinet.refetchQueries({ queryKey: [BASKET] });
      toast.success("Muvaffaqiyatli o'chirildi.");
    },
  });

  const watchedRow = offers?.[index] ?? {};

  const handleAdd = (type: 'adult' | 'child' | 'infant') => {
    const currentValue = watchedRow[type] ?? 0;
    const maxCount = data[`max_${type}`];
    if (currentValue < maxCount) {
      const updated = { [type]: currentValue + 1 };
      updateRow(index, updated);
      mutate('payment/basket/update', {
        ...updated,
        basket_attraction_id: watchedRow.basket_attraction_id,
      });
    }
  };

  const handleDelete = (type: 'adult' | 'child' | 'infant') => {
    const currentValue = watchedRow[type] ?? 0;
    if (currentValue > 0) {
      const updated = { [type]: currentValue - 1 };
      updateRow(index, updated);
      mutate('payment/basket/update', {
        ...updated,
        basket_attraction_id: watchedRow.basket_attraction_id,
      });
    }
  };

  return (
    <Card className="mb-2 max-w-3xl pt-4">
      <CardContent className="px-4 ">
        <div className="flex items-center  gap-2 mb-2">
          <Trash2
            onClick={() => {
              mutateDelete(`${BASKETDELETE}/${data?.id}`);
            }}
            className="text-rose-500 cursor-pointer"
            size={20}
          />
          <span className="text-rose-500">Remove from cart</span>
        </div>
        <div className="mb-4">
          <Image
            src={data?.image}
            alt="logo"
            className="w-full h-full rounded-md"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <div className="w-full flex mb-2 items-center gap-3 justify-between">
          <ul className="flex gap-3 py-1 ">
            <li className="flex items-center gap-2 text-primary">
              <UserIcon />
              <span className="text-black font-medium">
                {data?.comment_count}
              </span>
              <span className="text-black font-medium">Sharhlar</span>
            </li>
            <li className="flex items-center gap-2 text-primary">
              <StarIcon />
              <span className="text-black font-medium">{data?.rating}</span>
            </li>
          </ul>
          <span
            onClick={openModal}
            className="underline text-blue-500 cursor-pointer"
          >
            More info
          </span>
        </div>
        <div className="mb-2">
          <Select
            options={data.transfer_options ?? []}
            value={watchedRow.selected_transfer?.id?.toString() ?? '1'}
            returnVal="id"
            setValue={(val) => {
              const selected = data.transfer_options?.find(
                (opt) => opt.id.toString() === val.toString()
              );
              const updated = {
                selected_transfer: {
                  id: selected?.id ?? 0,
                  price: selected?.price ?? 0,
                  is_discount: selected?.is_discount ?? false,
                },
              };
              updateRow(index, updated);
              mutate('payment/basket/update', {
                transfer_option_id: updated.selected_transfer.id,
                basket_attraction_id: watchedRow.basket_attraction_id,
              });
            }}
            className="w-full bg-secondary border-none"
          />
        </div>

        <DatePicker
          className="w-full mb-2"
          defaultValue={watchedRow.tour_date ?? today}
          onChange={(val) => {
            const updated = {
              tour_date: val ? format(val, 'yyyy-MM-dd') : '',
            };
            updateRow(index, updated);
            mutate('payment/basket/update', {
              tour_date: updated.tour_date,
              basket_attraction_id: watchedRow.basket_attraction_id,
            });
          }}
        />
        <div className="space-y-3">
          {agesTypes.map((item) => (
            <div
              key={item.id}
              className="p-2 mb-2 bg-secondary rounded-sm text-sm"
            >
              <div className="grid grid-cols-2 items-center">
                <p className="font-normal">{item.name}</p>
                <div className="grid grid-cols-3 gap-1 items-center ml-auto">
                  <Button
                    onClick={() => {
                      handleDelete(item.id as 'adult' | 'child' | 'infant');
                    }}
                    className="w-8 h-8 rounded-full p-0 bg-white hover:bg-primary/10 shadow-none"
                  >
                    <Minus className="w-4 p-0 text-black" />
                  </Button>
                  <p className="text-center font-normal">
                    {String(watchedRow[item.id as keyof AtractionOffers] ?? 0)}
                  </p>
                  <Button
                    onClick={() => {
                      handleAdd(item.id as 'adult' | 'child' | 'infant');
                    }}
                    className="w-8 h-8 rounded-full p-0 bg-white hover:bg-primary/10 shadow-none"
                  >
                    <Plus className="w-4 p-0 text-black" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-3 h-0.5" />
        <div className="relative pt-4">
          {data.selected_transfer?.is_discount && (
            <h3 className="absolute top-0 text-sm font-semibold text-black/45 line-through">
              Price: {formatMoney(renderPrice(watchedRow).original)}
            </h3>
          )}
          <h3 className="text-lg font-semibold text-black">
            Price: {renderPrice(watchedRow).display} AED
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckoutCardMobile;
