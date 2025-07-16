import FormInput from 'components/form/input';
import SelectField from 'components/form/select';
import FormTextarea from 'components/form/textarea';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { Label } from 'components/ui/label';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

type Fields = {
  code: string;
  comment: string;
  child_seat: number;
};

export default function TransferNotesForm() {
  const form = useForm<Fields>();
  return (
    <div className="bg-background rounded-md p-4 shadow">
      <h2 className="text-2xl font-semibold mb-5">Extras and notes</h2>
      <form className="flex flex-col gap-8">
        <FormInput
          methods={form}
          name="code"
          variant="clean"
          label="Flight & Train number"
          required
          placeholder="Example: L9673"
          size="lg"
        />

        <fieldset className="flex items-center flex-row-reverse justify-end gap-2">
          <Label
            htmlFor="trtr"
            className="text-sm sm:text-xl whitespace-normal"
          >
            Do you need a child seat or booster seat?
          </Label>
          <Checkbox
            defaultChecked
            id="trtr"
            className="sm:size-6 shadow-none checked:bg-primary/40"
          />
        </fieldset>

        <ul className="flex flex-col gap-6">
          <li className="flex flex-col md:flex-row md:items-center gap-5 px-1">
            <Image
              src="/images/seat.png"
              alt="Image"
              height={60}
              width={60}
              priority
            />
            <div className="flex-1">
              <h3 className="font-semibold">
                Child seat
                <span className="text-green-400 ml-2 border-[0.5px] border-green-400 px-1 py-1 rounded-xl text-xs">
                  Free
                </span>
              </h3>
              <p>
                Suitable for toddlers weighing 0-18 kg (approx 0 to 4 years).
              </p>
            </div>

            <SelectField
              methods={form}
              name="child_seat"
              isSearchable={false}
              isClearable={false}
              options={[
                { id: 1, name: 'No' },
                { id: 2, name: 'Yes' },
              ]}
              wrapperClassName="w-auto"
              placeholder="No"
            />
          </li>
          <li className="flex flex-col md:flex-row md:items-center gap-5 px-1">
            <Image
              src="/images/seat.png"
              alt="Image"
              height={60}
              width={60}
              priority
            />
            <div className="flex-1">
              <h3 className="font-semibold">
                Booster seat
                <span className="text-green-400 ml-2 border-[0.5px] border-green-400 px-1 py-1 rounded-xl text-xs">
                  Free
                </span>
              </h3>
              <p>
                Suitable for children weighing 15-36 kg (approx 4 to 10 years).
              </p>
            </div>

            <SelectField
              methods={form}
              name="child_seat"
              isSearchable={false}
              isClearable={false}
              options={[
                { id: 1, name: 'No' },
                { id: 2, name: 'Yes' },
              ]}
              wrapperClassName="w-auto"
              placeholder="No"
            />
          </li>
        </ul>

        <FormTextarea
          methods={form}
          name="comment"
          label="Notes for the chauffeur (Outward)"
          placeholder="Sizning xabaringiz"
          className="bg-secondary border-none focus-visible:ring-0"
        />
        <div className="flex items-center md:justify-end gap-2 pt-3cou">
          <Button className="w-full md:w-auto">Continue</Button>
        </div>
      </form>
    </div>
  );
}
