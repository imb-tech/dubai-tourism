'use client';

import { Tooltip } from 'components/custom/tooltip';
import { Checkbox } from 'components/ui/checkbox';
import { DatePicker } from 'components/ui/datepicker';
import { useModal } from 'hooks/use-modal';
import { cn, formatMoney } from 'lib/utils';
import { Info } from 'lucide-react';
import React, { useMemo, useCallback, useEffect } from 'react';
import AddToCartAttraction from './attraction-add';
import Select from 'components/ui/select';
import { useFieldArray, useFormContext } from 'react-hook-form';

export default function WtpTable() {
  const { openModal } = useModal('more-info');
  const form = useFormContext<AtractionDetail>();
  const { fields, update } = useFieldArray({
    control: form.control,
    name: 'offers',
    keyName: 'key',
  });

  const watchedOffers = useMemo(() => form.watch('offers') ?? [], [form]);

  const optionsValues = useMemo(
    () => Array.from({ length: 5 }, (_, i) => ({ id: i, name: i })),
    []
  );

  const updateRow = useCallback(
    (index: number, data: Partial<AtractionOffers>) => {
      update(index, { ...fields[index], ...data });
    },
    [fields, update]
  );

  const renderSelect = (
    value: number,
    onChange: (val: number | string) => void
  ) => (
    <Select
      options={optionsValues}
      value={value}
      setValue={(val) => onChange(Number(val))}
      className="w-auto"
    />
  );

  const renderPrice = (row: any) => {
    const {
      adult = 1,
      child = 0,
      infant = 0,
      adult_price = 0,
      child_price = 0,
      infant_price = 0,
      discount_adults = 0,
      discount_child = 0,
      discount_infant = 0,
      selected_transfer,
    } = row;

    const transferPrice = Number(selected_transfer?.price ?? 0);
    const isDiscount = selected_transfer?.is_discount;

    const originalPrice =
      adult * adult_price +
      child * child_price +
      infant * infant_price +
      transferPrice;

    const discountedPrice =
      adult * discount_adults +
      child * discount_child +
      infant * discount_infant +
      transferPrice;

    return (
      <div className={cn('relative pt-4')}>
        {isDiscount && (
          <h3 className="font-semibold text-black/45 line-through absolute top-0 text-sm">
            Price: {formatMoney(originalPrice)}
          </h3>
        )}
        <h3 className="text-xl font-semibold text-black">
          Price: {formatMoney(isDiscount ? discountedPrice : originalPrice)} AED
        </h3>
      </div>
    );
  };

  useEffect(() => {
    watchedOffers.forEach((row, index) => {
      const transferOptions = fields[index]?.transfer_options;
      const currentTransfer = row.selected_transfer;

      if (!currentTransfer && transferOptions?.length > 0) {
        const firstOption = transferOptions[0];

        update(index, {
          ...fields[index],
          selected_transfer: {
            id: firstOption.id,
            price: firstOption.price,
            is_discount: firstOption.is_discount,
          },
        });
      }
    });
  }, [fields, watchedOffers, update]);

  const today = new Date().toLocaleDateString('en-CA');

  return (
    <div className="border lg:block hidden rounded-sm bg-white overflow-hidden p-3">
      <table className="table w-full [&_th]:text-start [&_th]:p-2 [&_td]:px-2 [&_td]:py-2">
        <thead className="bg-secondary">
          <tr>
            <th>Tour Options</th>
            <th>Transfer Option</th>
            <th className="flex gap-2 items-center">
              Tour Date
              <Tooltip
                indicatorClassName="bg-white fill-white"
                content={
                  <div className="w-[200px] text-primary">
                    Bu yerda tur haqida batafsil ma'lumot bo'ladi.
                  </div>
                }
              >
                <Info className="text-primary" size={18} />
              </Tooltip>
            </th>
            <th>Adult</th>
            <th>Child</th>
            <th>Infant</th>
            <th className="flex gap-2 items-center">
              Total amount
              <Tooltip
                indicatorClassName="bg-white fill-white"
                content={
                  <div className="w-[200px] text-primary">
                    Narx hisoblash bo'yicha batafsil ma'lumot.
                  </div>
                }
              >
                <Info className="text-primary" size={18} />
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((row, index) => {
            const watchedRow = watchedOffers[index] ?? {};

            return (
              <tr key={row.key}>
                <td>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={watchedRow.checked ?? false}
                      onCheckedChange={(checked) =>
                        updateRow(index, { checked: checked === true })
                      }
                    />
                    <span>{row.name}</span>
                    <span
                      className="underline text-blue-500 ml-auto cursor-pointer"
                      onClick={openModal}
                    >
                      More info
                    </span>
                  </div>
                </td>
                <td>
                  <Select
                    options={row.transfer_options ?? []}
                    value={watchedRow.selected_transfer?.id?.toString() ?? '1'}
                    returnVal="id"
                    className="w-auto"
                    setValue={(val: string | number) => {
                      const selected = row.transfer_options?.find(
                        (opt) => opt.id.toString() === val.toString()
                      );
                      updateRow(index, {
                        selected_transfer: {
                          price: selected?.price ?? 0,
                          is_discount: selected?.is_discount ?? false,
                          id: selected?.id ?? 0,
                        },
                      });
                    }}
                  />
                </td>
                <td>
                  <DatePicker
                    defaultValue={watchedRow.tour_date ?? today}
                    onChange={(val) =>
                      updateRow(index, {
                        tour_date: val?.toLocaleDateString('en-CA') ?? '',
                      })
                    }
                  />
                </td>
                <td>
                  {renderSelect(watchedRow.adult ?? 1, (v) =>
                    updateRow(index, { adult: Number(v ?? 1) })
                  )}
                </td>
                <td>
                  {renderSelect(watchedRow.child ?? 0, (v) =>
                    updateRow(index, { child: Number(v ?? 0) })
                  )}
                </td>
                <td>
                  {renderSelect(watchedRow.infant ?? 0, (v) =>
                    updateRow(index, { infant: Number(v ?? 0) })
                  )}
                </td>
                <td>{renderPrice(watchedRow)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <AddToCartAttraction
        data={watchedOffers
          .filter((row) => row.checked)
          .map((row) => ({
            attraction_offer: row.id ?? 0,
            tour_date: row.tour_date ?? today,
            transfer_option: row.selected_transfer?.id ?? 0,
            adult: row.adult ?? 1,
            child: row.child ?? 0,
            infant: row.infant ?? 0,
          }))}
      />
    </div>
  );
}
