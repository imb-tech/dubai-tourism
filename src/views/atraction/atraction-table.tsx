'use client';

import { Tooltip } from 'components/custom/tooltip';
import SelectField from 'components/form/select';
import { Checkbox } from 'components/ui/checkbox';
import { DatePicker } from 'components/ui/datepicker';
import { useModal } from 'hooks/use-modal';
import { cn, formatMoney } from 'lib/utils';
import { Info } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddToCartAttraction from './attraction-add';

export default function WtpTable({ data }: { data: Atraction[] }) {
  const { openModal } = useModal('more-info');

  const [selectedItems, setSelectedItems] = useState<Atraction[]>([]);

  const methods = useForm<{
    name: number;
    infant: number;
    child: number;
    adult: number;
  }>();

  const changeSelected = (item: Atraction) => {
    // setSelectedItems([item]);
    setSelectedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const optionsValues = Array.from({ length: 17 }, (_, i) => ({
    id: i,
    name: i.toString(),
  }));

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
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-2">
                  <span className="text-primary flex items-center">
                    <Checkbox
                      checked={selectedItems.some((i) => i.id === item.id)}
                      onCheckedChange={() => changeSelected(item)}
                    />
                  </span>
                  <span>{item.tour_options}</span>
                  <span
                    className="underline text-blue-500 ml-auto cursor-pointer"
                    onClick={openModal}
                  >
                    More info
                  </span>
                </div>
              </td>
              <td>
                <SelectField
                  methods={methods}
                  name="name"
                  options={[{ id: 1, name: 'Doniyor' }]}
                  wrapperClassName="w-auto"
                  placeholder="Sharing Transfers"
                />
              </td>
              <td>
                <DatePicker />
              </td>
              <td>
                <SelectField
                  methods={methods}
                  name="adult"
                  options={optionsValues}
                  wrapperClassName="w-auto"
                  placeholder="0"
                />
              </td>
              <td>
                <SelectField
                  methods={methods}
                  name="child"
                  options={optionsValues}
                  wrapperClassName="w-auto"
                  placeholder="0"
                />
              </td>
              <td>
                <SelectField
                  methods={methods}
                  name="infant"
                  options={optionsValues}
                  wrapperClassName="w-auto"
                  placeholder="0"
                />
              </td>
              <td>
                <div className={cn('relative pt-4')}>
                  <h3
                    className={cn(
                      'font-semibold text-black/45 line-through absolute top-0 text-sm'
                    )}
                  >
                    Price: {formatMoney(12000)}
                  </h3>
                  <h3 className={cn('text-xl font-semibold text-primary')}>
                    Price: {formatMoney(1200)}
                  </h3>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddToCartAttraction data={selectedItems} />
    </div>
  );
}
