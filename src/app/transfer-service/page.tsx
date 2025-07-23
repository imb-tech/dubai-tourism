import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS, TRANSFERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import { cn } from 'lib/utils';
import Image from 'next/image';
import TransferForm from 'views/transfer-service/transfer-form';
import TransferInfo from 'views/transfer-service/transfer-info';

type Props = {
  searchParams: Record<string, string>;
};

const TransferService = async ({ searchParams }: Props) => {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'transfers' },
  });
 
  const {
    to_airport,
    from_airport,
    from_date,
    from_time,
    return_date,
    return_time,
    passengers,
  } = searchParams;

  const isReady =
    from_airport && to_airport && from_time && from_date && passengers;

  const transfers = isReady
    ? await fetchData<TransferList[]>(TRANSFERS, {
        params: {
          from_airport,
          to_airport,
          pickup_date: `${from_date}T${from_time}Z`,
          passengers,
          ...(return_date && { return_date: `${return_date}T${return_time}Z` }),
        },
      })
    : [];

  const hasTransfers = !!transfers?.length;

  return (
    <>
      <div className="container mx-auto px-3 lg:px-0">
        <SectionDetailsHeading title="Transfer Service" />
        {hasTransfers && <SliderComponents images={banners || []} />}

        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 mx-auto gap-3 md:gap-6 items-stretch',
            hasTransfers && 'md:grid-cols-1 my-8'
          )}
        >
          <div className="border  rounded-lg p-4">
            {!hasTransfers && (
              <div>
                <h1 className="font-semibold text-3xl">
                  Reliable Airport Transfers in Dubai - Comfort and Convenience
                </h1>
                <p className="font-semibold mb-5 text-gray-600 mt-2">
                  Choose Your Destination and Preferred Time
                </p>
              </div>
            )}
            <TransferForm />
          </div>

          {!hasTransfers && (
            <div className="rounded-lg overflow-hidden h-full">
              <Image
                className="w-full h-full "
                src="/transfer-form.png"
                width={800}
                height={800}
                alt="Image form"
              />
            </div>
          )}
        </div>
      </div>

      {hasTransfers ? (
        <div className="container mx-auto px-3 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {transfers?.map((transfer) => (
              <CarCard
                key={transfer.id}
                {...transfer}
                {...transfer.transfer}
                searchParams={searchParams}
              />
            ))}
          </div>
        </div>
      ) : (
        <TransferInfo />
      )}
      <div className="container mx-auto px-3 lg:px-0">
        <Questions title="Transfer Services Questions" service="transfers" />
      </div>
    </>
  );
};

export default TransferService;
