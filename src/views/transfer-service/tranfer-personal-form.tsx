'use client';

import { useForm } from 'react-hook-form';

import FormInput from 'components/form/input';
import PhoneField from 'components/form/phone-field';
import { Button } from 'components/ui/button';

export default function TransferPersonalForm() {
  const form = useForm();

  return (
    <div className="bg-background rounded-md p-4 shadow">
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">
        Lead pacssenger
      </h2>
      <div className="flex flex-col gap-5">
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
        <PhoneField
          methods={form}
          name="phone"
          className="h-11 has-[input:focus]:ring-0 has-[input:focus]:ring-offset-0 !outline-none"
        />

        <FormInput
          methods={form}
          name="test"
          placeholder="Meeting with a name sign. Enter the name you want written on the sign"
          variant="clean"
          label="Meet & Greed"
          required
        />
      </div>
      <p className="text-sm my-2">
        Meeting with a name sign. Enter the name you want written on the sign
      </p>
      <div className="flex items-center justify-between md:justify-end gap-2 pt-3">
        <Button variant="secondary" className="shadow-none w-full md:w-auto">
          Back
        </Button>
        <Button className='w-full md:w-auto'>Continue</Button>
      </div>
    </div>
  );
}
