'use client';

import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Plus, Search, Users, X } from 'lucide-react';
import { Button } from 'components/ui/button';
import SearchSelect from 'components/ui/search-select';
import IconFormInput from 'components/ui/prefixy-input';
import IconFormDatePicker from 'components/ui/prefixy-date-picker';
import IconFormTimePicker from 'components/ui/prefixy-time-picker';
import { useGet } from 'hooks/useGet';
import { AIRPORTS } from 'constants/api-endpoints';
import { getTimeMinLater } from 'lib/utils';
import { format } from 'date-fns';



type Airport = { id: number; name: string };

type Fields = {
  from_airport: string | number;
  to_airport: string | number;
  from_date: string;
  from_time: string;
  return_date?: string;
  return_time?: string;
  passengers: string;
};

export default function TransferForm() {
  const params = useSearchParams();

  const router = useRouter();
  const form = useForm<Fields>();
  const { setValue, reset } = form;

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
    const {
      from_airport,
      from_date,
      from_time,
      passengers,
      to_airport,
      return_date,
      return_time,
    } = data;

    const query = new URLSearchParams({
      from_airport: String(from_airport),
      to_airport: String(to_airport),
      from_date: format(from_date, 'yyyy-MM-dd'),
      from_time,
      passengers: passengers,
    });

    if (isReturn && return_date && return_time) {
      query.set('return_date', format(String(return_date), 'yyyy-MM-dd'));
      query.set('return_time', return_time);
    }

    router.push(`/transfer-service?${query}`, {scroll:false});
  };

  useEffect(() => {
    const from_airport = Number(params.get('from_airport')) || undefined;
    const to_airport = Number(params.get('to_airport')) || undefined;
    const from_date = params.get('from_date') || format(new Date(), 'yyyy-MM-dd');
    const from_time = params.get('from_time') || getTimeMinLater();
    const return_date = params.get('return_date') || undefined;
    const return_time = params.get('return_time') || undefined;
    const passengers = params.get('passengers') || '1';

    reset({
      from_airport,
      to_airport,
      from_date,
      from_time,
      ...(return_date && { return_date }),
      ...(return_time && { return_time }),
      passengers,
    });

    if (return_date && return_time) {
      setIsReturn(true);
    }
  }, [params, reset]);


  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <div className="grid md:grid-cols-2 gap-3">
        <SearchSelect
          required
          hideError={true}
          methods={form}
          name="from_airport"
          label="From"
          options={fromAirports}
          placeholder="Address, Airport, hotel..."
          getOptionLabel={(opt) => opt.name}
          getOptionValue={(opt) => String(opt.id)}
          onInputChange={setFromSearch}
        />

        <SearchSelect
          required
          hideError={true}
          methods={form}
          name="to_airport"
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
          name="from_date"
          fromDate={new Date()}
        />

        <IconFormTimePicker
          label="Pickup time"
          methods={form}
          name="from_time"
        />
      </div>

      {isReturn ? (
        <div className="grid grid-cols-2 gap-3 relative">
          <IconFormDatePicker
            required
            label="Return date"
            methods={form}
            name="return_date"
            fromDate={new Date()}
          />
          <IconFormTimePicker
            required
            label="Return time"
            methods={form}
            name="return_time"
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
          className="w-full h-11 border-dashed hover:text-primary text-primary bg-secondary shadow-none"
          onClick={() => {
            setIsReturn(true);
            setValue('return_time', getTimeMinLater());
          }}
        >
          <Plus size={18} />
          Add return
        </Button>
      )}

      <IconFormInput
        required={true}
        methods={form}
        name="passengers"
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
