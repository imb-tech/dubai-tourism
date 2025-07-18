'use client';

import * as React from 'react';
import { format as formatter } from 'date-fns';

import { cn } from 'lib/utils';
import { Button } from 'components/ui/button';
import { Calendar } from 'components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from 'components/ui/popover';
import { CalendarIcon } from 'components/icons';
import { ClassNameValue } from 'tailwind-merge';
type DatePickerProps = {
  defaultValue?: string;
  className?: ClassNameValue;
  format?: string;
  onChange?: (val: Date | undefined) => void;
};

export function DatePicker({
  defaultValue,
  className,
  format = 'dd/MM/yyyy',
  onChange,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (defaultValue) {
      const parsedDate = new Date(defaultValue);
      if (!isNaN(parsedDate.getTime())) {
        setDate(parsedDate);
      }
    }
  }, [defaultValue]);

  const handleDateChange = (selected: Date | undefined) => {
    setDate(selected);
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'justify-center text-left font-normal shadow-none bg-secondary hover:bg-primary/5 border-none rounded-sm',
            !date && 'text-muted-foreground',
            className
          )}
        >
          {date ? formatter(date, format) : <span>Pick a date</span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
