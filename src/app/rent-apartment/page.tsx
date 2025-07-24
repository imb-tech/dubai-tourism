import Questions from 'components/questions/questions';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { APARTMENTS, BANNERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import ApartmentFilter from 'views/rent-apartment/apartment-filter';
import ListAndMapApartment from 'views/rent-apartment/list-map-apartment';

const RentApartment = async () => {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'apartments' },
  });
  const apartments = await fetchData<RentCarResults>(APARTMENTS);


  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Rent an apartment" />

      <SliderComponents images={banners || []} />
      <div className="my-5">
        <ApartmentFilter />
      </div>

      <ListAndMapApartment  apartments={apartments} />

      <div className="mt-8">
        <Questions title="Renta Apartment Questions" service="apartments" />
      </div>
    </div>
  );
};

export default RentApartment;
