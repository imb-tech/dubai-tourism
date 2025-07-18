import FormInput from 'components/form/input';
import SelectField from 'components/form/select';
import FormTextarea from 'components/form/textarea';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { Label } from 'components/ui/label';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

type Fields = {
  flight_number: string;
  driver_notes: string;
  child_seat: number;
  booster_seat: number;
};

type Props = {
  transfer: Transfer;
  allData: TransferOrderCreate;
  setAllData: React.Dispatch<React.SetStateAction<TransferOrderCreate>>;
};

export default function TransferNotesForm({
  transfer,
  allData,
  setAllData,
}: Props) {
  const form = useForm<Fields>();

  const childSeatOptions = useMemo(
    () =>
      Array.from({ length: transfer?.available_child_seat }, (_, i) => ({
        id: i + 1,
        name: `${i + 1}`,
      })),
    [transfer]
  );
  const boasterSeatOptions = useMemo(
    () =>
      Array.from({ length: transfer?.available_booster_seat }, (_, i) => ({
        id: i + 1,
        name: `${i + 1}`,
      })),
    [transfer]
  );

  const { handleSubmit } = form;

  const onSubmit = (data: Fields) => {
    setAllData({ ...allData, transfer={...data} });
  };

  return (
    <div className="bg-background rounded-md p-4 shadow">
      <h2 className="text-2xl font-semibold mb-5">Extras and notes</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <FormInput
          methods={form}
          name="flight_number"
          variant="clean"
          label="Flight & Train number"
          required
          placeholder="Example: L9673"
          size="lg"
          wrapperClassName="gap-3"
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
              src="/child-seat.png"
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
              options={
                transfer?.available_child_seat
                  ? childSeatOptions
                  : [{ id: 0, name: 'No' }]
              }
              wrapperClassName="w-auto"
              placeholder="No"
            />
          </li>
          <li className="flex flex-col md:flex-row md:items-center gap-5 px-1">
            <Image
              src="/boaster-seat.png"
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
              name="booster_seat"
              isSearchable={false}
              isClearable={false}
              options={
                transfer?.available_booster_seat
                  ? boasterSeatOptions
                  : [{ id: 0, name: 'No' }]
              }
              wrapperClassName="w-auto"
              placeholder="No"
            />
          </li>
        </ul>

        <FormTextarea
          methods={form}
          name="driver_notes"
          label="Notes for the chauffeur (Outward)"
          placeholder="Sizning xabaringiz"
          className="bg-secondary border-none focus-visible:ring-0"
        />
        <div className="flex items-center md:justify-end gap-2 pt-3cou">
          <Button type="submit" className="w-full md:w-auto">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
