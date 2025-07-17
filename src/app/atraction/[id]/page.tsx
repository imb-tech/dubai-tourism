import WtpComments from 'views/atraction/atraction-comments';
import WtpFeatures from 'views/atraction/atraction-features';
import WtpForm from 'views/atraction/atraction-form';
import WtpMap from 'views/atraction/atraction-map';
import React from 'react';
import { SliderComponents } from 'components/slider/page';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import SectionDetailsHeading from 'components/ui/page-heading';
import {
  ATRACTIONS,
  ATRACTIONSSIMILAR,
  BANNERS,
} from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';

export type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function wtp({ params }: PageProps) {
  const { id } = await params;

  const data = await fetchData<AtractionDetail>(`${ATRACTIONS}/${id}`);

  const atractions = await fetchData<AtractionData>(
    `${ATRACTIONSSIMILAR}/${id}`
  );

  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'attractions' },
  });

  const slides = atractions?.results.map((i) => (
    <CarCard key={i.slug} {...i} />
  ));

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title={data?.name || ''} />
        <SliderComponents images={banners || []} showCout={true} />
        {data && <WtpForm data={data} />}
        <WtpMap />
        {data && <WtpFeatures features={data?.feature} />}

        <div className="space-y-4 border rounded-md p-4 mt-5 mb-12">
          <h1 className=" lg:text-3xl  font-semibold text-2xl">About</h1>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <p>{data?.description}</p>
            </div>
          </div>
        </div>

        <WtpComments />
      </div>

      <div className="bg-[#F5F8FC] lg:py-10 py-4 my-5">
        <div className="container mx-auto lg:px-0 px-3">
          <h1 className="lg:text-3xl mb-5 text-2xl font-semibold">See more</h1>
          <div className="sm:grid grid-cols-1 hidden  sm:grid-cols-2 lg:grid-cols-4 gap-4"></div>
          <div className="sm:hidden">
            {<CustomCarousel items={slides || []} />}
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Atraction Questions" service="attractions" />
      </div>
    </React.Fragment>
  );
}
