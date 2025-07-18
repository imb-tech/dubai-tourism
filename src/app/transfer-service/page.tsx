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

  const transfers = await fetchData<TransferList[]>(TRANSFERS, {
    params: {
      from_airport: 1,
      to_airport: 2,
      pickup_date: '2025-07-18T08:07:50Z',
      // return_date: '',
      passengers: 2,
    },
  });

  console.log(transfers);

  const hasTransfers = transfers !== null && Array.isArray(transfers);

  return (
    <div className="container mx-auto px-3 lg:px-0">
      <SectionDetailsHeading title="Transfer Service" />

      {hasTransfers && <SliderComponents images={banners || []} />}

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3 md:gap-6">
        <div className={`${hasTransfers && 'w-full'}`}>
          <TransferForm hasTransfers={hasTransfers} />
        </div>

        {!hasTransfers && (
          <div className="rounded-2xl overflow-hidden">
            <Image
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
