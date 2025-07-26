import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import SectionDetailsHeading from 'components/ui/page-heading';
import { SliderComponents } from 'components/slider/page';
import FloorPlans from 'views/rent-apartment/floor-plans';
import Amenities from 'views/rent-apartment/amenities';
import PaymentPlan from 'views/rent-apartment/payment-plan';
import PropertyMap from 'views/rent-apartment/peoperty-map';
import BedroomOptions from 'views/rent-apartment/bedroom-options';
import PropertyDetails from 'views/rent-apartment/property-details';
import AboutProject from 'views/rent-apartment/about';
import PropertyHeader from 'views/rent-apartment/property-header';
import { APARTMENTS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import Modal from 'components/custom/modal';
import ApplicationFormApartment from 'views/rent-apartment/application-form';

export default async function RentId({ params }: PageProps) {
  const { id } =  params;
  const cars = await fetchData<RentCarResults>(APARTMENTS);
  const slides = cars?.results?.map((s) => <CarCard key={s.id} {...s} />);

  const apartments = await fetchData<RentCar>(`${APARTMENTS}/${id}`);

  console.log(apartments);

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="Duplex Full Floor apartment" />
        <div className="hidden lg:block">
          <DrawerImagesView images={apartments?.images || []} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={apartments?.images || []} showCout={true} />
        </div>
        
        <div className="space-y-5 mb-8">
          <PropertyHeader
            price="23,270,000 AED"
            startingPrice="9,556 ft (6,520,063)"
            paymentPlan="50/50"
            handover="Q2 2027"
          />
          <div className="bg-[#F5F8FC] p-4 border rounded-md grid lg:grid-cols-2 grid-cols-1 gap-6">
            <AboutProject />
            <PropertyDetails
              developer="H&H"
              propertyType="Villa"
              handover="Q2 2027"
              paymentPlan="50/50"
              areaName="Dubai Hills"
            />
            <div className="lg:col-span-2 col-span-1">
              <BedroomOptions apartments={apartments} />
            </div>
          </div>

          <PropertyMap />

          <PaymentPlan />

          <Amenities />

          <FloorPlans />
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
        <Questions title="Renta Apartment Questions" service="apartments" />
      </div>

      <Modal
        modalKey="apartments"
        title={'Submit an application'}
        titleClass="lg:text-3xl font-semibold text-2xl"
      >
        <ApplicationFormApartment />
      </Modal>
    </React.Fragment>
  );
}
