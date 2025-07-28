import CarFeatures from 'views/rent/car-features';
import CarInfo from 'views/rent/car-info';
import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import SectionDetailsHeading from 'components/ui/page-heading';
import { SliderComponents } from 'components/slider/page';
import { CARS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';

export default async function RentId({ params }: PageProps) {
  const { id } =  params;
  const cars = await fetchData<RentCar>(`${CARS}/${id}`);

  const slides = cars?.similar?.map((s) => (
    <CarCard key={s.id} {...s} />
  ));
 
  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title={cars?.name || 'Rent a car'} />
        <div className="hidden lg:block">
          <DrawerImagesView images={cars?.images || []} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={cars?.images || []} showCout={true} />
        </div>
        <CarInfo cars={cars} />
        <CarFeatures cars={cars} />
        <div className="space-y-4 border rounded-md p-4 mt-5 mb-12">
          <h1 className=" lg:text-3xl  font-semibold text-2xl">
            {cars?.name || 'Rent a car'}
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <p>{cars?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F8FC] lg:py-10 py-4">
        <div className="container mx-auto lg:px-0 px-3">
          <h1 className="lg:text-3xl mb-5 text-2xl font-semibold">See more</h1>
          <div className="sm:grid grid-cols-1 hidden  sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slides}
          </div>
          <div className="sm:hidden">
            <CustomCarousel items={slides || []} />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Renta a Car Questions" service="cars" />
      </div>
    </React.Fragment>
  );
}
