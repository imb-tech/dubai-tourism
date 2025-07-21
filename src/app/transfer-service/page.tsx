import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS, TRANSFERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
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

  const { to_airport, from_airport, pickup_date, passengers, return_date } =
    searchParams;

  const isReady = from_airport && to_airport && pickup_date && passengers;

  const transfers = isReady
    ? await fetchData<TransferList[]>(TRANSFERS, {
        params: {
          from_airport,
          to_airport,
          pickup_date,
          passengers,
          ...(return_date && { return_date }),
        },
      })
    : null;

  const hasTransfers = transfers !== null && Array.isArray(transfers);

  return (
    <div className="container mx-auto px-3 lg:px-0">
      <SectionDetailsHeading title="Transfer Service" />

      {hasTransfers && <SliderComponents images={banners || []} />}

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-3 md:gap-6 items-center">
        <TransferForm />

        {!hasTransfers && (
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full"
              src="/transfer-form.png"
              width={570}
              height={570}
              alt="Image form"
            />
          </div>
        )}
      </div>

      {hasTransfers ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {transfers?.map((transfer) => (
            <CarCard
              key={transfer.id}
              {...transfer}
              {...transfer.transfer}
              url="transfer-service"
            />
          ))}
        </div>
      ) : (
        <TransferInfo />
      )}

      <Questions title="Transfer Services Questions" service="transfers" />
    </div>
  );
};

export default TransferService;
