import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import FeaturesCard from 'views/mice-group/features-card';
import BookingForm from 'views/mice-group/bron-form';
import { SliderComponents } from 'components/slider/page';
import { BANNERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';

export default async function RentId() {
  const banners = await fetchData(BANNERS, { params: { service: 'mice_services' } });
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Personal concierge" />
      <div className="space-y-5  mb-12">
        <div className="hidden lg:block">
          <DrawerImagesView images={banners} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={banners} showCout={true} />
        </div>
        <div className="space-y-4 border rounded-md p-4  bg-[#F5F8FC]">
          <h1 className=" lg:text-2xl  font-semibold text-xl">
            About Personal concierge
          </h1>
          <div className="flex flex-col   gap-6">
            <p>
              Experience the convenience and luxury of personalized concierge
              services with VIP Platinum. Let us elevate your lifestyle and
              handle the details so you can enjoy life to the fullest. Contact
              us today to discuss how we can tailor our services to suit your
              needs.
            </p>
          </div>
        </div>
        <div className="space-y-4 border rounded-md p-4  ">
          <h1 className=" lg:text-2xl  font-semibold text-xl">Features</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <FeaturesCard key={index} />
            ))}
          </div>
        </div>
        <div className="space-y-4 border rounded-md p-4  mb-12 ">
          <h1 className=" lg:text-2xl  font-semibold text-xl">
            Booking information
          </h1>
          <BookingForm />
        </div>
      </div>
      <Questions title="MICE Group  questions" service="mice_services" />
    </div>
  );
}
