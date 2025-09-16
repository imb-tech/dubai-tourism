import WtpComments from 'views/atraction/atraction-comments';
import WtpForm from 'views/atraction';
import WtpMap from 'views/atraction/atraction-map';
import React from 'react';
import { SliderComponents } from 'components/slider/page';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import SectionDetailsHeading from 'components/ui/page-heading';
import { ATRACTIONS, ATRACTIONSSIMILAR } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';

export default async function wtp({ params }: PageProps) {
  const { id } = params;
  const data = await fetchData<AtractionDetail>(`${ATRACTIONS}/${id}`);

  const atractions = await fetchData<AtractionData>(
    `${ATRACTIONSSIMILAR}/${id}?page_size=4`
  );

  const slides = atractions?.results.map((i) => (
    <CarCard key={i.slug} {...i} />
  ));

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3 space-y-4 mb-12">
        <SectionDetailsHeading title={data?.name || ''} />
        <SliderComponents images={data?.images || []} showCout={true} />

        {data && <WtpForm data={data} />}
        <WtpMap location={data?.location || ''} name={data?.name || ''} />

        {data?.description && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">{data.name} Overview</h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{ __html: data?.description as string }}
            />
          </div>
        )}

        {data?.useful_info && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">
              {data.name} {'Highlights'}
            </h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{ __html: data?.useful_info as string }}
            />
          </div>
        )}

        {data?.inclusion && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">{data.name} Inclusions</h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{ __html: data?.inclusion as string }}
            />
          </div>
        )}

        {data?.imp_info && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">
              {data.name} Important Information
            </h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{ __html: data?.imp_info as string }}
            />
          </div>
        )}

        {data?.terms && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">{data.name} Terms</h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{ __html: data?.terms as string }}
            />
          </div>
        )}

        {data?.cancellation_policy_description && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">
              {data.name} Cancellation Policy Description
            </h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{
                __html: data?.cancellation_policy_description as string,
              }}
            />
          </div>
        )}

        {data?.child_cancellation && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">
              {data.name} Child Cancellation
            </h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{
                __html: data?.child_cancellation as string,
              }}
            />
          </div>
        )}

        {data?.itenarary && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">{data.name} Itenarary</h1>
            <div
              className="!list-disc"
              dangerouslySetInnerHTML={{
                __html: data?.itenarary as string,
              }}
            />
          </div>
        )}

        <WtpComments slug={id} />
      </div>

      <div className="bg-[#F5F8FC] lg:py-10 py-4">
        <div className="container mx-auto lg:px-0 px-3">
          <h1 className="b-5 text-2xl font-semibold">See more</h1>
          <div className="sm:grid grid-cols-1 hidden  sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slides}
          </div>
          <div className="sm:hidden">
            <CustomCarousel items={slides || []} />
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Atraction Questions" service="attractions" />
      </div>
    </React.Fragment>
  );
}
