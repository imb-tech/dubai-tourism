export const dynamic = 'force-dynamic';
import EmptyBox from 'components/custom/empty-box';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS, CONCIERGES } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import VipConciergeFilter from 'views/vip-concierge/vip-concierge';

const VipConcierge = async ({ searchParams }: PageProps) => {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'concierges' },
  });
  const data = await fetchData<VipConicergeResults>(CONCIERGES, {
    params: searchParams,
  });

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="VIP Concierge" />
      <SliderComponents images={banners || []} />
      <div className="my-5">
        <VipConciergeFilter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.results?.map((s) => (
          <CarCard key={s.id} {...s} />
        ))}
      </div>
      {data?.results.length === 0 && <EmptyBox />}
      <Questions title="VIP Concierge Questions" service="concierges" />
    </div>
  );
};

export default VipConcierge;
