import EmptyBox from 'components/custom/empty-box';
import { User2Icon } from 'components/icons';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS, TOUR } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import TourPackagesFilter from 'views/tour-packages/tour-packages';

const ToursPackages = async ({ searchParams }: PageProps) => {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'tour_packages' },
  });
  const tour = await fetchData<RentCarResults>(TOUR, {params:searchParams});

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Tour packages" />
      <SliderComponents images={banners || []} />
      <div className="my-5">
        <TourPackagesFilter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tour?.results?.map((s) => (
          <CarCard key={s.id} {...s} />
        ))}
      </div>
      {tour?.results.length === 0 && <EmptyBox />}
      <Questions title="Tour Packages Questions" service="tour_packages" />
    </div>
  );
};

export default ToursPackages;
