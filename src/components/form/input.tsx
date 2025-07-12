'use client';
import ErrorMessage from 'components/ui/error-message';
import { Input, InputProps } from 'components/ui/input';
import { Label } from 'components/ui/label';
import { cn } from 'lib/utils';
import { useEffect } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { ClassNameValue } from 'tailwind-merge';

interface IProps<IForm extends FieldValues> {
  methods: UseFormReturn<IForm>;
  name: Path<IForm>;
  label?: string;
  wrapperClassName?: ClassNameValue;
  hideError?: boolean;
  required?: boolean;
  message?: string;
}

export default function FormInput<IForm extends FieldValues>({
  methods,
  name,
  label,
  type = 'text',
  wrapperClassName,
  hideError = false,
  required = false,
  message = '',
  ...props
}: IProps<IForm> & InputProps) {
  const {
    register,
    formState: { errors },
  } = methods;

  const reg = register(name, {
    required: required
      ? {
          value: true,
          message: message || `${label || 'This field'} is required`,
        }
      : false,
    ...(type === 'email' && {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address',
      },
    }),
  });
  useEffect(() => {
    register(name);
  }, [name, register]);

  return (
    <fieldset className={cn('flex flex-col gap-1 w-full ', wrapperClassName)}>
      {label && (
        <Label
          htmlFor={name}
          className={cn(!!errors?.[name] && 'text-destructive')}
          required={required}
        >
          {label}
        </Label>
      )}
      <Input
        type={type}
        placeholder={label}
        id={name}
        fullWidth
        autoComplete="off"
        {...reg}
        {...props}
      />
      {!hideError && errors[name] && (
        <ErrorMessage>
          {(errors[name]?.message as string) || errors.root?.[name]?.message}
        </ErrorMessage>
      )}
    </fieldset>
  );
}
