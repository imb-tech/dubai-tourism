'use client';

import { useFormContext } from 'react-hook-form';

import FormInput from 'components/form/input';

export default function PaymentForm() {
  const form = useFormContext();

  return (
    <div className="bg-background rounded-md p-6">
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">
        Personal info
      </h2>
      <div className="space-y-4">
        <FormInput
          methods={form}
          name="name"
          placeholder="Kiriting"
          variant="clean"
          label="Ism"
          required
        />
        <FormInput
          methods={form}
          name="name"
          placeholder="Kiriting"
          variant="clean"
          label="Familiya"
          required
        />
        <FormInput
          methods={form}
          name="name"
          placeholder="your_email@example.com"
          variant="clean"
          label="Email"
          required
        />
      </div>
    </div>
  );
}
