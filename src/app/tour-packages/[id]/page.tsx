import React from 'react';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { fetchData } from 'lib/fetchData';
import Modal from 'components/custom/modal';
import TourFnfo from 'views/tour-packages/tour-info';
import ApplicationFormTourPackages from 'views/tour-packages/application-form';

export default async function RentId({ params }: PageProps) {
  const { id } =  params;
  const tour = await fetchData<TourResults>(`services/tour/similar/${id}`);
  const tourInfo = await fetchData<Tour>(`services/tour/${id}`);

  const slides = tour?.results?.map((s) => <CarCard key={s.id} {...s} />);

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title={tourInfo?.name || ''} />
        <SliderComponents images={tourInfo?.images || []} />

        <TourFnfo data={tourInfo} />
      </div>
      {!!tour?.results.length ? (
        <div className="bg-[#F5F8FC] lg:py-10 py-4">
          <div className="container mx-auto lg:px-0 px-3">
            <h1 className="lg:text-3xl mb-5 text-2xl font-semibold">
              See more
            </h1>
            <div className="sm:grid grid-cols-1 hidden  sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {slides}
            </div>
            <div className="sm:hidden">
              <CustomCarousel items={slides || []} />
            </div>
          </div>
        </div>
      ) : null}
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Tour Packages Questions" service="tour_packages" />
      </div>
      <Modal
        modalKey="tour_packages"
        title={'Submit an application'}
        titleClass="lg:text-3xl font-semibold text-2xl"
      >
        <ApplicationFormTourPackages />
      </Modal>
    </React.Fragment>
  );
}
