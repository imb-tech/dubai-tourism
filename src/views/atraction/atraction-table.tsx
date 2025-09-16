'use client';

import { Tooltip } from 'components/custom/tooltip';
import { Checkbox } from 'components/ui/checkbox';
import { DatePicker } from 'components/ui/datepicker';
import { useModal } from 'hooks/use-modal';
import { Info } from 'lucide-react';
import React, { useCallback, useEffect } from 'react';
import AddToCartAttraction from './attraction-add';
import Select from 'components/ui/select';
import { format } from 'date-fns';
import { useAtractionCustom } from './use-atraction-custom';
import { formatMoney } from 'lib/utils';

export default function WtpTable() {
  const { openModal } = useModal('more-info');
  const { updateRow, getOptions, renderPrice, fields, offers, today } =
    useAtractionCustom();

  const renderSelect = useCallback(
    (value: number, onChange: (val: number) => void, max_count: number = 5) => {
      const safeMax =
        Number.isFinite(max_count) && max_count > 0 ? max_count : 1;
      const options = getOptions(safeMax);

      return (
        <Select
          options={options}
          value={value}
          setValue={(val) => onChange(Number(val))}
          className="w-auto"
        />
      );
    },
    [getOptions]
  );
     

  useEffect(() => {
    if (offers.length > 0 && offers.every((row) => !row.checked)) {
      updateRow(0, { checked: true });
    }
  }, [offers, updateRow]);

  return (
    <div className=" border rounded-sm bg-white p-3 overflow-hidden">
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
            const watchedRow = offers[index] ?? {};

            return (
              <tr key={row.id}>
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
                      className="ml-auto text-blue-500 underline cursor-pointer"
                      onClick={openModal}
                    >
                      More info
                    </span>
                  </div>
                </td>
                <td>
                  <Select
                    options={row.transfer_options ?? []}
                    value={watchedRow.transfer_option?.id?.toString() ?? '1'}
                    returnVal="id"
                    className="w-auto"
                    setValue={(val) => {
                      const selected = row.transfer_options?.find(
                        (opt) => opt.id.toString() === val.toString()
                      );
                      updateRow(index, {
                        transfer_option: selected,
                      });
                    }}
                  />
                </td>
                <td>
                  <DatePicker
                    fromDate={new Date()}
                    defaultValue={watchedRow.tour_date ?? today}
                    onChange={(val) =>
                      updateRow(index, {
                        tour_date: val ? format(val, 'yyyy-MM-dd') : '',
                      })
                    }
                  />
                </td>
                <td>
                  {renderSelect(
                    watchedRow.adult ?? 1,
                    (val) => updateRow(index, { adult: val }),
                    row.max_adult
                  )}
                </td>
                <td>
                  {renderSelect(
                    watchedRow.child ?? 0,
                    (val) => updateRow(index, { child: val }),
                    row.max_child
                  )}
                </td>
                <td>
                  {renderSelect(
                    watchedRow.infant ?? 0,
                    (val) => updateRow(index, { infant: val }),
                    row.max_infant
                  )}
                </td>
                <td>
                  <div className="relative pt-4">
                    {row.transfer_option?.is_discount && (
                      <h3 className="absolute top-0 text-sm font-semibold text-black/45 line-through">
                        Price: {formatMoney(renderPrice(watchedRow).original)}
                      </h3>
                    )}
                    <h3 className="text-lg font-semibold text-black">
                      Price: {renderPrice(watchedRow).display} AED
                    </h3>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <AddToCartAttraction
        data={offers
          .filter((row) => row.checked)
          .map((row) => ({
            attraction_offer: row.attraction_offer ?? 0,
            tour_date: row.tour_date ?? today,
            transfer_option: row.transfer_option?.id ?? 0,
            adult: row.adult ?? 1,
            child: row.child ?? 0,
            infant: row.infant ?? 0,
          }))}
      />
    </div>
  );
}
