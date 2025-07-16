import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS, TRANSFERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import TransferForm from 'views/transfer-service/transfer-form';

const TransferService = async () => {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'transfers' },
  });

  const transfers = await fetchData<TransfersData>(TRANSFERS);

  console.log(transfers);

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Transfer Service" />

      <SliderComponents images={banners || []} />

      <TransferForm />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {transfers?.results.map((s) => (
          <CarCard key={s.id} {...s} url="transfer-service" />
        ))}
      </div>
      <Questions title="Transfer Services Questions" service="transfers" />
    </div>
  );
};

export default TransferService;
