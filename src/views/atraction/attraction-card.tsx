'use client';
import { Button } from 'components/ui/button';
import { Card, CardContent, CardHeader } from 'components/ui/card';
import { DatePicker } from 'components/ui/datepicker';
import Select from 'components/ui/select';
import { useModal } from 'hooks/use-modal';
import { Minus, Plus, User } from 'lucide-react';
import AddToCartAttraction from './attraction-add';
import { formatMoney } from 'lib/utils';
import { useAtractionCustom } from './use-atraction-custom';
import { format } from 'date-fns';

export const agesTypes = [
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

const AttractionCardMobile = ({
  data,
  index,
}: {
  data: AtractionOffers;
  index: number;
}) => {
  const { openModal } = useModal('more-info');
  const { updateRow, renderPrice, offers, today } = useAtractionCustom();

  const watchedRow = offers?.[index] ?? {};

  const handleAdd = (type: 'adult' | 'child' | 'infant') => {
    const currentValue = watchedRow[type] ?? 0;
    const maxCount = data[`max_${type}`];
    if (currentValue < maxCount) {
      updateRow(index, { [type]: currentValue + 1 });
    }
  };

  const handleDelete = (type: 'adult' | 'child' | 'infant') => {
    const currentValue = watchedRow[type] ?? 0;
    if (currentValue > 0) {
      updateRow(index, { [type]: currentValue - 1 });
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="px-4">
        <span>{data.name}</span>
        <span
          className="underline text-blue-500 mr-auto cursor-pointer"
          onClick={openModal}
        >
          More info
        </span>
      </CardHeader>
      <CardContent className="px-4">
        <div className="mb-2">
          <Select
            options={data.transfer_options ?? []}
            value={watchedRow.transfer_option?.id?.toString() ?? '1'}
            returnVal="id"
            setValue={(val) => {
              const selected = data.transfer_options?.find(
                (opt) => opt.id.toString() === val.toString()
              );
              updateRow(index, {
                transfer_option: selected,
              });
            }}
            className="w-full bg-secondary"
          />
        </div>

        <DatePicker
          fromDate={new Date()}
          className="w-full mb-2"
          defaultValue={watchedRow.tour_date ?? today}
          onChange={(val) =>
            updateRow(index, {
              tour_date: val ? format(val, 'yyyy-MM-dd') : '',
            })
          }
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
                    className="w-8 h-8 rounded-full p-0 bg-white hover:bg-secondary shadow-none"
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
                    className="w-8 h-8 rounded-full p-0 bg-white hover:bg-secondary shadow-none"
                  >
                    <Plus className="w-4 p-0 text-black" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-[12px] text-primary">
                <span>
                  <User className="w-4 h-4" />
                </span>
                <span className="">
                  {' '}
                  +{formatMoney(data.price ?? 0)} per {item.id}
                </span>{' '}
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4 h-0.5" />
        <div className="relative pt-4">
          {data.transfer_option?.is_discount && (
            <h3 className="absolute top-0 text-sm font-semibold text-black/45 line-through">
              Price: {formatMoney(renderPrice(watchedRow).original)}
            </h3>
          )}
          <h3 className="text-lg font-semibold text-black">
            Price: {renderPrice(watchedRow).display} AED
          </h3>
        </div>
        <AddToCartAttraction
          data={[
            {
              attraction_offer: watchedRow.attraction_offer ?? 0,
              tour_date: watchedRow.tour_date ?? today,
              transfer_option: watchedRow.transfer_option?.id ?? 0,
              adult: watchedRow.adult ?? 1,
              child: watchedRow.child ?? 0,
              infant: watchedRow.infant ?? 0,
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default AttractionCardMobile;
