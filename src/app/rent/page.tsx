import CarCard from 'components/shared/car-card';
import RentFilter from 'views/rent/rent-filter';
import React from 'react';
import { SliderComponents } from 'components/slider/page';
import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import { fetchData } from 'lib/fetchData';
import { BANNERS, CARS } from 'constants/api-endpoints';

export default async function page() {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'cars' },
  });
  const cars = await fetchData<RentCarResults>(CARS);

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Rent a car" />
      <SliderComponents images={banners || []} />
      <div className="py-3" />
      <RentFilter />
      <div className="grid grid-cols-1 lg:px-0 px-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars?.results?.map((s) => (
          <CarCard key={s.id} {...s}/>
        ))}
      </div>
      <Questions title="Renta a Car Questions" service="cars" />
    </div>
  );
}
