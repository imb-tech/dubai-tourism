'use client';

import { Car2Icon, PlaneIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import IconFormDatePicker from 'components/ui/prefixy-date-picker';
import IconFormInput from 'components/ui/prefixy-input';
import IconFormTimePicker from 'components/ui/prefixy-time-picker';
import SearchSelect from 'components/ui/search-select';
import { cn } from 'lib/utils';
import { Plus, Search, Users, X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type Fields = {
  pick: {
    from: string;
    to: string;
    date: string;
    time: string;
  };
  return: {
    date: string;
    time: string;
  };
  passagers: string;
};

export default function TransferForm() {
  const form = useForm<Fields>({
    defaultValues: {
      passagers: '2',
    },
  });
  const [isReturn, setIsReturn] = useState<boolean>(false);

  return (
    <div className="md:p-2 my-8 p-3 border rounded-md shadow-[0px_4px_124px_0px_rgba(18,24,34,0.09)]">
      <form className="flex flex-col gap-3">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          <SearchSelect
            methods={form}
            options={[
              {
                id: 1,
                name: 'Doniyor',
              },
            ]}
            name="pick.from"
            label="From"
            className="w-full"
            placeholder="Adress, Airport, hotel,..."
          />
          <SearchSelect
            methods={form}
            name="pick.from"
            label="To"
            className="w-full"
            placeholder="Adress, Airport, hotel,..."
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
        <Button
          variant="outline"
          className={cn(
            'border-dashed border-primary w-full text-primary font-semibold hover:text-primary text-base py-2 h-12',
            isReturn ? 'hidden' : ''
          )}
          size="lg"
          onClick={() => setIsReturn(true)}
        >
          <Plus size={18} />
          Add return
        </Button>
        <div
          className={cn(
            'grid grid-cols-2 gap-3 relative',
            isReturn ? '' : 'hidden'
          )}
        >
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
        <IconFormInput
          methods={form}
          name="passagers"
          label="Passagers"
          icon={<Users size={16} />}
          type="number"
          min={1}
        />
        <Button className='h-11'>
         <span className='text-base'>Search</span>
          <Search size={20} />
        </Button>
      </form>
    </div>
  );
}
