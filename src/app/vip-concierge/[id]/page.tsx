import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import { Button } from 'components/ui/button';
import SectionDetailsHeading from 'components/ui/page-heading';
import { SliderComponents } from 'components/slider/page';
import { CONCIERGES } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import { PageProps } from 'app/shopping/[id]/page';
import { formatMoney } from 'lib/utils';
import Link from 'next/link';
import { PriceVIpIcon } from 'components/icons';

export default async function RentId({ params }: PageProps) {
  const { id } = await params;
  const data = await fetchData<VipConicerge>(`${CONCIERGES}/${id}`);
  const slides = data?.similar?.map((s) => <CarCard suffix='hr'  url="/vip-concierge"  key={s.id} {...s} />);

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

        <div className="space-y-4 border rounded-md p-4 mt-5 mb-12 bg-[#F5F8FC]">
          <h1 className=" lg:text-3xl  font-semibold text-2xl">{data?.name}</h1>
          <div className="flex items-center gap-3">
            {data?.category_name ? (
              <Link
                href={'#'}
                className="rounded-2xl bg-[#FFDDD6] text-orange-500 text-xs py-1 px-2"
              >
                #{data?.category_name}
              </Link>
            ) : null}
            {data?.best_seller ? (
              <div className="p-2 text-white text-xs font-medium rounded-sm bg-[#FF7043]">
                Best seller
              </div>
            ) : null}
          </div>
          <div>
            <div className="flex flex-col   gap-6">
              <p>{data?.description}</p>
              <div className="space-y-3">
                <h1 className=" lg:text-2xl  font-semibold text-xl">
                  Rental Price
                </h1>
                <div className="bg-white p-2 rounded-md flex items-center gap-3">
                  <div className="rounded-full p-3 bg-[#F5F8FC] inline-block">
                    <span className="text-primary">
                      {' '}
                      <PriceVIpIcon />
                    </span>
                  </div>
                  <div>
                    <h1 className="font-semibold text-lg">
                      AED {formatMoney(data?.price)} / hr
                    </h1>
                  </div>
                </div>
                <Button className="w-full mt-3">Leave a request</Button>
              </div>
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
        <Questions title="VIP Concierge Questions" service="concierges" />
      </div>
    </React.Fragment>
  );
}
