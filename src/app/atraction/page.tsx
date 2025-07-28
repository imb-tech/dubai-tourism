import EmptyBox from 'components/custom/empty-box';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { ATRACTIONS, BANNERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import AtractionFilter from 'views/atraction/atraction-filter';

const AtractionPage = async ({ searchParams }: PageProps) => {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'attractions' },
  });

  const data = await fetchData<AtractionData>(ATRACTIONS, {
    params: searchParams,
  });

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Atraction tickets" />
      <SliderComponents images={banners || []} />
      <div className="my-5">
        <AtractionFilter />
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1  lg:grid-cols-4 gap-4">
        {data?.results.map((s) => (
          <CarCard key={s.slug} {...s} />
        ))}

      </div>
        {data?.results.length === 0 && <EmptyBox />}
      <Questions title="Atraction Questions" service="attractions" />
    </div>
  );
};

export default AtractionPage;
