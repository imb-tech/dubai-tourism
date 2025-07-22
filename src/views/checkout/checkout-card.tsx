'use client';
import { StarIcon, UserIcon } from 'components/icons';
import { useModal } from 'hooks/use-modal';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';
import { BASKET, BASKETDELETE } from 'constants/api-endpoints';
import { useDelete } from 'hooks/useDelete';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { usePost } from 'hooks/usePost';
import { useAtractionCustom } from 'views/atraction/use-atraction-custom';
import Select from 'components/ui/select';
import { DatePicker } from 'components/ui/datepicker';
import { agesTypes } from 'views/atraction/attraction-card';
import { Button } from 'components/ui/button';
import { format } from 'date-fns';
import { formatMoney } from 'lib/utils';

export default function CheckoutCard({
  data,
  index,
}: {
  data: AtractionOffers;
  index: number;
}) {
  const { openModal } = useModal('more-info');
  const querClinet = useQueryClient();
  const { updateRow, renderPrice, offers, today } = useAtractionCustom();

  const { mutate: mutateCreate } = usePost();

  const watchedRow = offers?.[index] ?? {};

  const handleAdd = (type: 'adult' | 'child' | 'infant') => {
    const currentValue = watchedRow[type] ?? 0;
    const maxCount = data[`max_${type}`];
    if (currentValue < maxCount) {
      const updated = { [type]: currentValue + 1 };
      updateRow(index, updated);
      mutateCreate('payment/basket/update', {
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
      mutateCreate('payment/basket/update', {
        ...updated,
        basket_attraction_id: watchedRow.basket_attraction_id,
      });
    }
  };

  const { mutate } = useDelete({
    onSuccess: () => {
      querClinet.refetchQueries({ queryKey: [BASKET] });
      toast.success("Muvaffaqiyatli o'chirildi.");
    },
  });

  return (
    <Fragment>
      <div className="flex gap-3 bg-white rounded-md p-4 justify-between  w-full">
        <Image
          src={data?.image}
          alt="logo"
          className="size-[300px] rounded-md"
          width={100}
          height={100}
        />
        <div className="min-h-full flex flex-col justify-between gap-2 flex-[1]">
          <div className="flex justify-between items-center gap-3 w-full">
            <h2 className="text-2xl font-semibold">{data.name}</h2>
            <div className="flex items-center  gap-2">
              <span className="text-rose-500">Remove from cart</span>
              <Trash2
                onClick={() => {
                  mutate(`${BASKETDELETE}/${data?.id}`);
                }}
                className="text-rose-500 cursor-pointer"
                size={20}
              />
            </div>
          </div>
          <ul className="flex gap-3 py-1">
            <li className="flex items-center gap-2 text-primary">
              <UserIcon />
              <span className="text-black font-medium">
                {data.comment_count}
              </span>
              <span className="text-black font-medium">Sharhlar</span>
            </li>
            <li className="flex items-center gap-2 text-primary">
              <StarIcon />
              <span className="text-black font-medium">{data?.rating}</span>
            </li>
          </ul>

          <ul className="grid grid-cols-5 gap-2 w-full">
            <li className="py-4 px-3 bg-secondary rounded-md space-y-2">
              <h3 className="font-semibold">Transfer Option</h3>
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
                  mutateCreate('payment/basket/update', {
                    transfer_option_id: updated.selected_transfer.id,
                    basket_attraction_id: watchedRow.basket_attraction_id,
                  });
                }}
                className="w-full bg-secondary"
              />
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md space-y-2">
              <h3 className="font-semibold">Tour Date</h3>
              <DatePicker
                className="w-full mb-2"
                defaultValue={watchedRow.tour_date ?? today}
                onChange={(val) => {
                  const updated = {
                    tour_date: val ? format(val, 'yyyy-MM-dd') : '',
                  };
                  updateRow(index, updated);
                  mutateCreate('payment/basket/update', {
                    tour_date: updated.tour_date,
                    basket_attraction_id: watchedRow.basket_attraction_id,
                  });
                }}
              />
            </li>

            {agesTypes.map((item) => (
              <li
                key={item.id}
                className="py-4 px-3 bg-secondary space-y-2.5 rounded-md"
              >
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex justify-around items-center gap-3">
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
              </li>
            ))}
          </ul>
          <div className="w-full flex justify-between items-end gap-3">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Total amount</span>
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
            </div>
            <span
              onClick={openModal}
              className="underline text-blue-500 cursor-pointer"
            >
              More info
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
