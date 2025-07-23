'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Plus, Search, Users, X } from 'lucide-react';

import { Button } from 'components/ui/button';
import SearchSelect from 'components/ui/search-select';
import IconFormInput from 'components/ui/prefixy-input';
import IconFormDatePicker from 'components/ui/prefixy-date-picker';
import IconFormTimePicker from 'components/ui/prefixy-time-picker';

import { useGet } from 'hooks/useGet';
import { AIRPORTS } from 'constants/api-endpoints';
import { getTime30MinLater, toUtcISOString } from 'lib/utils';

type Airport = { id: number; name: string };

type Fields = {
  pick: {
    from: number;
    to: number;
    date: Date;
    time: string;
  };
  return?: {
    date?: Date;
    time?: string;
  };
  passagers: string;
};

export default function TransferForm() {
  const router = useRouter();
  const form = useForm<Fields>({
    defaultValues: {
      passagers: '2',
      pick: {
        date: new Date(),
        time: getTime30MinLater(),
      },
    },
  });

  const [isReturn, setIsReturn] = useState(false);
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');

  const { data: fromAirports = [] } = useGet<Airport[]>(AIRPORTS, {
    params: { search: fromSearch },
  });

  const { data: toAirports = [] } = useGet<Airport[]>(AIRPORTS, {
    params: { search: toSearch },
  });

  const onSubmit = (data: Fields) => {
    const { from, to, date, time } = data.pick;
    if (isReturn && data.return?.date && data.return?.time)
      console.log(toUtcISOString(data?.return?.date, data?.return?.time));

    const query = new URLSearchParams({
      from_airport: String(from),
      to_airport: String(to),
      pickup_date: toUtcISOString(date, time),
      passengers: data.passagers,
    });

    if (isReturn && data.return?.date && data.return?.time) {
      query.set(
        'return_date',
        toUtcISOString(data?.return?.date, data?.return?.time)
      );
    }

    router.push(`/transfer-service?${query.toString()}`);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <div className="grid md:grid-cols-2 gap-3">
        <SearchSelect
          required
          methods={form}
          name="pick.from"
          label="From"
          options={fromAirports}
          placeholder="Address, Airport, hotel..."
          getOptionLabel={(opt) => opt.name}
          getOptionValue={(opt) => String(opt.id)}
          onInputChange={setFromSearch}
        />

        <SearchSelect
          required
          methods={form}
          name="pick.to"
          label="To"
          options={toAirports}
          placeholder="Address, Airport, hotel..."
          getOptionLabel={(opt) => opt.name}
          getOptionValue={(opt) => String(opt.id)}
          onInputChange={setToSearch}
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

      {isReturn ? (
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
            className="absolute -right-1 -top-1 cursor-pointer border border-primary text-primary p-1 rounded-full"
            onClick={() => setIsReturn(false)}
          >
            <X size={12} />
          </span>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="w-full border-dashed text-primary"
          onClick={() => setIsReturn(true)}
        >
          <Plus size={18} className="mr-1" /> Add return
        </Button>
      )}

      <IconFormInput
        methods={form}
        name="passagers"
        label="Passengers"
        icon={<Users size={16} />}
        type="number"
        min={1}
      />

      <Button type="submit" className="h-11">
        <span className="text-base">Search</span>
        <Search size={20} className="ml-2" />
      </Button>
    </form>
  );
}
