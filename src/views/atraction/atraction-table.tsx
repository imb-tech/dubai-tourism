'use client';
import { Tooltip } from 'components/custom/tooltip';
import SelectField from 'components/form/select';
import { Button } from 'components/ui/button';
import { Card, CardContent, CardHeader } from 'components/ui/card';
import { Checkbox } from 'components/ui/checkbox';
import { DatePicker } from 'components/ui/datepicker';
import { useModal } from 'hooks/use-modal';
import { cn, formatMoney } from 'lib/utils';
import { Info, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AttractionCardMobile from './attraction-card';

export default function WtpTable() {
  const { openModal } = useModal('more-info');
  const methods = useForm<{ name: number }>();

  return (
    <>
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus adipisci modi, nihil ratione maxime eaque commodi,
                    consequuntur inventore distinctio accusamus illum? Quam
                    aliquam, incidunt beatae temporibus sunt repudiandae
                    quaerat? Quod?
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus adipisci modi, nihil ratione maxime eaque commodi,
                    consequuntur inventore distinctio accusamus illum? Quam
                    aliquam, incidunt beatae temporibus sunt repudiandae
                    quaerat? Quod?
                  </div>
                }
              >
                <Info className="text-primary" size={18} />
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <span className="text-primary flex items-center">
                  <Checkbox />
                </span>
                <span>Desert Safari For UAE eresidents</span>
                <span
                  className="underline text-blue-500 ml-auto"
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
                name="name"
                options={[{ id: 1, name: '1' }]}
                wrapperClassName="w-auto"
                placeholder="1"
              />
            </td>
            <td>
              <SelectField
                methods={methods}
                name="name"
                options={[{ id: 1, name: '1' }]}
                wrapperClassName="w-auto"
                placeholder="1"
              />
            </td>
            <td>
              <SelectField
                methods={methods}
                name="name"
                options={[{ id: 1, name: '1' }]}
                wrapperClassName="w-auto"
                placeholder="1"
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
        </tbody>
      </table>
    </div>
      <AttractionCardMobile />
      <AttractionCardMobile />
    </>
  );
}
