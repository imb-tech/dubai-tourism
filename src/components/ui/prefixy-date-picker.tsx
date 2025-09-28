import { cn } from 'lib/utils';
import {
  Controller,
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from 'react-hook-form';
import { ClassNameValue } from 'tailwind-merge';
import ErrorMessage from '../ui/error-message';
import { Label } from '../ui/label';
import { CalendarProps } from 'components/ui/calendar';
import { DatePicker } from 'components/ui/date-picker';
import { Location2Icon } from 'components/icons';

interface IProps<IForm extends FieldValues> {
  methods: UseFormReturn<IForm>;
  name: Path<IForm>;
  label?: string;
  wrapperClassName?: ClassNameValue;
  hideError?: boolean;
  disabled?: boolean;
  format?: string;
  placeholder?: string;
  required?: boolean;
  message?: string;
}

export default function IconFormDatePicker<IForm extends FieldValues>({
  methods,
  name,
  label,
  hideError = false,
  disabled,
  format,
  placeholder,
  required = false,
  wrapperClassName,
  message = '',
  ...calendarProps
}: IProps<IForm> & CalendarProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control: methods.control,
    rules: {
      required: {
        value: required,
        message: message,
      },
    },
  });

   
  return (
    <fieldset
      className={cn(
        'flex flex-col gap-1 bg-secondary p-3 pb-2 rounded-md',
        wrapperClassName
      )}
    >
      {label && (
        <Label
          htmlFor={name}
          className={cn(!!error && 'text-destructive')}
          required={required}
        >
          {label}
        </Label>
      )}
      <div className="w-full flex items-center relative">
        <span className="text-primary absolute left-2 z-10">
          <Location2Icon />
        </span>
        <Controller
          name={name}
          control={methods.control}
          render={() => (
            <DatePicker
              date={field.value}
              setDate={field.onChange}
              format={format}
              placeholder={placeholder || label}
              disabled={field.disabled || disabled}
              fullWidth
              {...calendarProps}
              defaultMonth={field.value}
              style={{
                pointerEvents: field.disabled || disabled ? 'none' : 'auto',
              }}
              className="border-none [&_.lucide-calendar]:hidden pl-10"
            />
          )}
        />
      </div>
      {!!error && !hideError && (
        <ErrorMessage>{error.message || error.root?.message}</ErrorMessage>
      )}
    </fieldset>
  );
}
