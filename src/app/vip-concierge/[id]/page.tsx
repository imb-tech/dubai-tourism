import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import SectionDetailsHeading from 'components/ui/page-heading';
import { SliderComponents } from 'components/slider/page';
import { CONCIERGES } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import VipInfo from 'views/vip-concierge/vip-info';
import Modal from 'components/custom/modal';
import ApplicationFormVIP from 'views/vip-concierge/application-form';

export default async function RentId({ params }: PageProps) {
  const { id } =  params;
  const data = await fetchData<VipConicerge>(`${CONCIERGES}/${id}`);
  const slides = data?.similar?.map((s) => (
    <CarCard  key={s.id} {...s} />
  ));

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title={data?.name || 'Vip Comicerge'} />
        <div className="hidden lg:block">
          <DrawerImagesView images={data?.images || []} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={data?.images || []} showCout={true} />
        </div>
        {data && <VipInfo data={data} />}
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
        <Questions title="VIP Concierge Questions" service="concierges" />
      </div>
      <Modal
        modalKey="concierges"
        title={'Submit an application'}
        titleClass="lg:text-3xl font-semibold text-2xl"
      >
        <ApplicationFormVIP />
      </Modal>
    </React.Fragment>
  );
}
