import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import FeaturesCard from 'views/mice-group/features-card';
import BookingForm from 'views/mice-group/bron-form';
import { SliderComponents } from 'components/slider/page';
import { MICE_SERVICES } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import { PageProps } from 'app/shopping/[id]/page';

export default async function RentId({ params }: PageProps) {
  const { id } = await params;
  const data = await fetchData<MiceGroup>(`${MICE_SERVICES}/${id}`);

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title={data?.title || 'MICE Group'} />
      <div className="space-y-5  mb-12">
        <div className="hidden lg:block">
          <DrawerImagesView images={data?.images || []} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={data?.images || []} showCout={true} />
        </div>
        <div className="space-y-4 border rounded-md p-4  bg-[#F5F8FC]">
          <h1 className=" lg:text-2xl  font-semibold text-xl">{data?.title}</h1>
          <div className="flex flex-col   gap-6">
            <p>{data?.description}</p>
          </div>
        </div>
        <div className="space-y-4 border rounded-md p-4  ">
          <h1 className=" lg:text-2xl  font-semibold text-xl">Features</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            {data?.features?.map((item, index) => (
              <FeaturesCard
                name={item.name}
                description={item.description}
                key={index}
              />
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
