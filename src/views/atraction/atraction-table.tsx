'use client';

import { Tooltip } from 'components/custom/tooltip';
import SelectField from 'components/form/select';
import { Checkbox } from 'components/ui/checkbox';
import { DatePicker } from 'components/ui/datepicker';
import { useModal } from 'hooks/use-modal';
import { cn, formatMoney } from 'lib/utils';
import { Info } from 'lucide-react';
import React, { useState } from 'react';
import AddToCartAttraction from './attraction-add';
import Select from 'components/ui/select';
import { useForm } from 'react-hook-form';
import { useAtractionStore } from 'store/atraction';

type RowData = Atraction & {
  checked: boolean;
  adult: number;
  child: number;
  infant: number;
};

export default function WtpTable({ data }: { data: Atraction[] }) {
  const { openModal } = useModal('more-info');
  const { atraction } = useAtractionStore();

  const methods = useForm<{
    name: number;
    infant: number;
    child: number;
    adult: number;
  }>();

  const [rows, setRows] = useState<RowData[]>(
    data.map((item) => ({
      ...item,
      checked: false,
      adult: 0,
      child: 0,
      infant: 0,
    }))
  );

  const optionsValues = Array.from({ length: 17 }, (_, i) => ({
    id: i,
    name: i.toString(),
  }));

  const toggleChecked = (id: string, checked: boolean) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, checked } : row))
    );
  };

  const updateQuantity = (
    id: string,
    key: 'adult' | 'child' | 'infant',
    value: number
  ) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );
  };

   console.log(rows);
   

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
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                <td>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={row.checked}
                      onCheckedChange={(checked) => {
                        console.log(checked);

                        if (typeof checked === 'boolean') {
                          toggleChecked(row.id, checked);
                        }
                      }}
                    />
                    <span>{row.tour_options}</span>
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
                    className="w-auto"
                    placeholder="Sharing Transfers"
                  />
                </td>
                <td>
                  <DatePicker />
                </td>
                <td>
                  <Select
                    options={optionsValues}
                    value={row.adult}
                    setValue={(val) =>
                      updateQuantity(row.id, 'adult', Number(val))
                    }
                    className="w-auto"
                  />
                </td>
                <td>
                  <Select
                    options={optionsValues}
                    value={row.child}
                    setValue={(val) =>
                      updateQuantity(row.id, 'child', Number(val))
                    }
                    className="w-auto"
                  />
                </td>
                <td>
                  <Select
                    options={optionsValues}
                    value={row.infant}
                    setValue={(val) =>
                      updateQuantity(row.id, 'infant', Number(val))
                    }
                    className="w-auto"
                  />
                </td>
                <td>
                  <div className={cn('relative pt-4')}>
                    <h3 className="font-semibold text-black/45 line-through absolute top-0 text-sm">
                      Price: {formatMoney(12000)}
                    </h3>
                    <h3 className="text-xl font-semibold text-primary">
                      Price: {formatMoney(1200)}
                    </h3>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <AddToCartAttraction data={rows.filter((row) => row.checked)} />
    </div>
  );
}
