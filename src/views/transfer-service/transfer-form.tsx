'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // app router
import { Car2Icon, PlaneIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import IconFormDatePicker from 'components/ui/prefixy-date-picker';
import IconFormInput from 'components/ui/prefixy-input';
import IconFormTimePicker from 'components/ui/prefixy-time-picker';
import SearchSelect from 'components/ui/search-select';
import { Plus, Search, Users, X } from 'lucide-react';
import { useGet } from 'hooks/useGet';
import { usePost } from 'hooks/usePost';
import { AIRPORTS } from 'constants/api-endpoints';
import { formatDate, getTime30MinLater, normalizeDate } from 'lib/utils';
import { format } from 'date-fns';

type Airport = {
  id: number;
  name: string;
};

type PageProps = {
  hasTransfers: boolean;
};

type Fields = {
  pick: {
    from: number;
    to: number;
    date: string | Date;
    time: string;
  };
  return: {
    date?: string;
    time?: string;
  };
  passagers: string;
};

export default function TransferForm({ hasTransfers }: PageProps) {
  const router = useRouter();

  const [isReturn, setIsReturn] = useState(false);
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');

  const {} = usePost();

  const form = useForm<Fields>({
    defaultValues: {
      passagers: '2',
      pick: {
        date: new Date(),
        time: getTime30MinLater(),
      },
    },
  });

  const { data: fromAirports = [] } = useGet<Airport[]>(AIRPORTS, {
    params: { search: fromSearch },
  });

  const { data: toAirports = [] } = useGet<Airport[]>(AIRPORTS, {
    params: { search: toSearch },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: Fields) => {
    const { date, time, from, to } = data.pick;
    console.log(date);

    const queryParams = new URLSearchParams();

    queryParams.set('from_id', String(from));
    queryParams.set('to_id', String(to));
    queryParams.set('pickup_date', String(normalizeDate(date)));
    queryParams.set('pickup_time', String(time));
    queryParams.set('passengers', data.passagers);

    if (isReturn && data.return?.date && data.return?.time) {
      queryParams.set(
        'return_date',
        formatDate(normalizeDate(data.return.date), data.return.time)
      );
    }

    router.push(`/transfer-service?${queryParams.toString()}`);
  };

  return (
    <div className="md:p-2 my-8 p-3 border rounded-md shadow-[0px_4px_124px_0px_rgba(18,24,34,0.09)]">
      {!hasTransfers && (
        <div className="flex flex-col gap-3 items-start mb-3">
          <div className="flex md:hidden items-center bg-primary/20 rounded-lg py-2 px-1 pl-4 justify-center">
            <span className="text-primary">
              <Car2Icon size={22} />
            </span>
            <span className="text-primary/50">
              <PlaneIcon size={42} />
            </span>
          </div>
          <div>
            <h1 className="md:text-2xl text-lg font-semibold">
              Reliable Airport Transfers in Dubai – Comfort and Convenience
            </h1>
            <p className="text-black/50 font-semibold text-sm">
              Choose Your Destination and Preferred Time
            </p>
          </div>
        </div>
      )}
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          <SearchSelect
            required
            methods={form}
            name="pick.from"
            label="From"
            options={fromAirports}
            placeholder="Address, Airport, hotel,..."
            className="w-full"
            getOptionLabel={(opt) => opt.name}
            getOptionValue={(opt) => String(opt.id)}
            onInputChange={(input) => setFromSearch(input)}
          />

          <SearchSelect
            required
            methods={form}
            name="pick.to"
            label="To"
            options={toAirports}
            placeholder="Address, Airport, hotel,..."
            className="w-full"
            getOptionLabel={(opt) => opt.name}
            getOptionValue={(opt) => String(opt.id)}
            onInputChange={(input) => setToSearch(input)}
          />

          <IconFormDatePicker
            label="Pickup date"
            methods={form}
            name="pick.date"
          />
          <IconFormTimePicker
            label="Pickup time"
            methods={form}
            name="pick.time"
          />
        </div>

        {!isReturn && (
          <Button
            variant="outline"
            size="lg"
            className="border-dashed border-primary w-full text-primary font-semibold hover:text-primary text-base py-2 h-12"
            onClick={(e) => {
              e.preventDefault();
              setIsReturn(true);
            }}
          >
            <Plus size={18} /> Add return
          </Button>
        )}

        {isReturn && (
          <div className="grid grid-cols-2 gap-3 relative">
            <IconFormDatePicker
              label="Return date"
              methods={form}
              name="return.date"
            />
            <IconFormTimePicker
              label="Return time"
              methods={form}
              name="return.time"
            />
            <span
              className="absolute -right-1 -top-1 bg-background text-primary border border-primary rounded-full p-1 cursor-pointer"
              onClick={() => setIsReturn(false)}
            >
              <X size={12} />
            </span>
          </div>
        )}

        <IconFormInput
          methods={form}
          name="passagers"
          label="Passagers"
          icon={<Users size={16} />}
          type="number"
          min={1}
        />

        <Button type="submit" className="h-11">
          <span className="text-base">Search</span>
          <Search size={20} />
        </Button>
      </form>
    </div>
  );
}
