'use client';

import { useForm } from 'react-hook-form';

import FormInput from 'components/form/input';
import PhoneField from 'components/form/phone-field';
import { Button } from 'components/ui/button';

type Fields = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  meet_sign: string;
};

type Props = {
  allData: TransferOrderCreate;
  setAllData: React.Dispatch<React.SetStateAction<TransferOrderCreate>>;
  setStep: (v: number) => void;
  _setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function TransferPersonalForm({
  allData,
  setAllData,
  setStep,
  _setActive,
}: Props) {
  const form = useForm<Fields>();

  const { handleSubmit } = form;

  const onSubmit = (data: Fields) => {
    setAllData({ ...allData, ...data });
    setStep(3);
    _setActive(3);
  };

  return (
    <div className="bg-background rounded-md p-4 shadow">
      <h2 className="md:text-3xl text-2xl font-semibold m-0 mb-4">
        Lead pacssenger
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <FormInput
            methods={form}
            name="first_name"
            placeholder="Kiriting"
            variant="clean"
            label="Ism"
            required
          />
          <FormInput
            methods={form}
            name="last_name"
            placeholder="Kiriting"
            variant="clean"
            label="Familiya"
            required
          />
          <FormInput
            methods={form}
            name="email"
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
            name="meet_sign"
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
          <Button
            variant="secondary"
            className="shadow-none w-full md:w-auto"
            onClick={() => {
              _setActive(1);
              setStep(1);
            }}
          >
            Back
          </Button>
          <Button className="w-full md:w-auto" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
