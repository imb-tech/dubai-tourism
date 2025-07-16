import { StarIcon, UserIcon } from 'components/icons';
import { useModal } from 'hooks/use-modal';
import { cn, formatMoney } from 'lib/utils';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';
import { format as formatter } from 'date-fns';
import { BASKET, BASKETDELETE } from 'constants/api-endpoints';
import { useDelete } from 'hooks/useDelete';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

export default function CheckoutCard({ data }: { data: AtractionGetBasket }) {
  const { openModal } = useModal('more-info');
  const querClinet = useQueryClient();
  const { mutate } = useDelete({
    onSuccess: () => {
      querClinet.refetchQueries({ queryKey: [BASKET] });
      toast.success("Muvaffaqiyatli o'chirildi.");
    },
  });

  return (
    <Fragment>
      <div className="hidden lg:flex gap-3 bg-white rounded-md px-4 justify-between py-2">
        <Image
          src={data?.image}
          alt="logo"
          className="size-[300px] rounded-md"
          width={100}
          height={100}
        />
        <div className="min-h-full flex flex-col gap-2 flex-[1]">
          <h2 className="text-2xl font-semibold">{data.name}</h2>
          <ul className="flex gap-3 py-1">
            <li className="flex items-center gap-2 text-primary">
              <UserIcon />
              <span className="text-black font-medium">Sharhlar</span>
            </li>
            <li className="flex items-center gap-2 text-primary">
              <StarIcon />
              <span className="text-black font-medium">{data?.rating}</span>
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
                {formatter(data?.tour_date, 'dd/MM/yyyy')}
              </p>
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Adult</h3>
              <p className="text-sm">{data?.adult}</p>
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Child</h3>
              <p className="text-sm">{data?.child}</p>
            </li>
            <li className="py-4 px-3 bg-secondary rounded-md">
              <h3 className="font-semibold">Infant</h3>
              <p className="text-sm">{data?.infant}</p>
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
            {data?.transfer_option?.is_discount ? (
              <>
                <h3
                  className={cn(
                    'font-semibold text-black/45 line-through absolute top-0 text-sm'
                  )}
                >
                  Price:{' '}
                  {formatMoney(
                    Number(data?.total_price) + Number(data?.discount)
                  )}{' '}
                  AED
                </h3>
                <h3 className={cn('text-xl font-semibold text-primary')}>
                  Price: {formatMoney(data?.total_price)} AED
                </h3>
              </>
            ) : (
              <h3 className={cn('text-xl font-semibold text-primary')}>
                Price: {formatMoney(data?.total_price)} AED
              </h3>
            )}
          </div>
        </div>
        <Trash2
          onClick={() => {
            mutate(`${BASKETDELETE}/${data?.id}`);
          }}
          className="text-rose-500 mt-3 cursor-pointer"
          size={20}
        />
      </div>
    </Fragment>
  );
}
