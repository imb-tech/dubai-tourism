import { cn } from 'lib/utils';
import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from 'react-hook-form';
import { ClassNameValue } from 'tailwind-merge';
import { Label } from '../ui/label';
import { InputProps } from './input';
import FormInput from 'components/form/input';

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
  icon: any;
}

export default function IconFormInput<IForm extends FieldValues>({
  methods,
  name,
  label,
  hideError = false,
  disabled,
  placeholder,
  required = false,
  wrapperClassName,
  message = '',
  icon,
  ...props
}: IProps<IForm> & InputProps) {
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
        wrapperClassName,
        !!error && 'border border-destructive'
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
        <span className="text-primary absolute left-2 z-10">{icon}</span>
        <FormInput
          required={required}
          methods={methods}
          name={name}
          hideError={true}
          type="text"
          variant="clean"
          placeholder={placeholder || label}
          disabled={field.disabled || disabled}
          fullWidth
          style={{
            pointerEvents: field.disabled || disabled ? 'none' : 'auto',
          }}
          className="border-none [&_.lucide-calendar]:hidden pl-10 appearance-none [&::-webkit-calendar-picker-indicator]:bg-none focus-visible:!shadow-none"
          {...props}
        />
      </div>
    </fieldset>
  );
}
