import { StarIcon, UserIcon } from 'components/icons';
import { formatters } from 'date-fns';
import { useModal } from 'hooks/use-modal';
import { cn, formatMoney } from 'lib/utils';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';
import { useAtractionStore } from 'store/atraction';
import { format as formatter } from 'date-fns';
import { fetchData } from 'lib/fetchData';
import { BASKET } from 'constants/api-endpoints';

export default function CheckoutCard({ item }: { item: AtractionStore }) {
  const { removeAtraction } = useAtractionStore();
  const { openModal } = useModal('more-info');

  const data = fetchData(BASKET);

  console.log(data);

  return (
    <Fragment>
      <div className="hidden lg:flex gap-3 bg-white rounded-md px-4 justify-between py-2">
        {/* <div className="min-h-full flex items-center">
        <Checkbox className="size-7" defaultChecked />
      </div> */}
        <Image
          src="https://s3-alpha-sig.figma.com/img/498f/3c16/0ac401abded78d7605a4908270b35998?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W4knZCf6OK1S62n6oX8KrGtj1YqH3Gp473tWlJme3TbY9BonyjlFFT-6JWsasCzpCUptj8SMhNr9KT8C8zGc3zI5r6W~gQl0h4XRKPxpV82kPOKMy-E-swtHAXKivaw7C9tTkpBmpTCeZo5XNqE~fXZNLWOc2JMzLFhpSyHrPzVquR0q7TCqQHLADw2HdYTmCpN5OgRNzeQupE6hBJ4c-3OlpNXZMSPP4kyWQnQhLKR6fAoND-0EwKn3vx33K46JNanoa4tWmPHCqbz82MzNNpy1S0-OZGJOZEqkM69~53tmxqUx8X84yEmpuzsa3zmMkn8ev4ok67wlikAkc-O9wg__"
          alt="logo"
          className="size-[300px] rounded-md"
          width={100}
          height={100}
        />
        <div className="min-h-full flex flex-col gap-2 flex-[1]">
          <h2 className="text-2xl font-semibold">{item.name}</h2>
          <ul className="flex gap-3 py-1">
            <li className="flex items-center gap-2 text-primary">
              <UserIcon />
              <span className="text-black font-medium">Sharhlar</span>
            </li>
            <li className="flex items-center gap-2 text-primary">
              <StarIcon />
              <span className="text-black font-medium">4.5</span>
            </li>
          </ul>

          <ul className="grid grid-cols-5 gap-2 w-full">
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Transfer Option</h3>
              {/* <p className="text-sm">{item.transfer_option}</p> */}
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Tour Date</h3>
              <p className="text-sm">
                {formatter('dd/MM/yyyy', item.tour_date)}
              </p>
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Adult</h3>
              <p className="text-sm">{item.adult}</p>
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Child</h3>
              <p className="text-sm">{item.child}</p>
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Infant</h3>
              <p className="text-sm">{item.infant}</p>
            </li>
          </ul>

          <span
            onClick={openModal}
            className="underline text-blue-500 cursor-pointer"
          >
            More info
          </span>
          <span className="font-medium">Total amount</span>
          <div className={cn('relative pt-4')}>
            <h3
              className={cn(
                'font-semibold text-black/45 line-through absolute top-0 text-sm'
              )}
            >
              Price: {formatMoney(12000)}
            </h3>
            <h3 className={cn('text-xl font-semibold text-primary')}>
              Price: {formatMoney(1200)}
            </h3>
          </div>
        </div>
        <Trash2
          onClick={() => {
            removeAtraction(item.id);
          }}
          className="text-rose-500 mt-3"
          size={20}
        />
      </div>
    </Fragment>
  );
}
