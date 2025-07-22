'use client';
import { PriceVIpIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';
import { formatMoney } from 'lib/utils';
import React from 'react';

type Props = {
  data: Tour | null;
};

function TourFnfo({ data }: Props) {
  const { openModal } = useModal('tour_packages');
  return (
    <div className="w-full">
      <div className="space-y-4 border rounded-md p-4 mt-5 mb-12 bg-[#F5F8FC]">
        <h1 className=" lg:text-3xl  font-semibold text-2xl">Overview</h1>
        <div>
          <div className="flex flex-col   gap-6">
            <p>{data?.description}</p>
            <div className="space-y-3">
              <h1 className=" lg:text-2xl  font-semibold text-xl">Price</h1>
              <div className="bg-white p-2 rounded-md flex items-center gap-3">
                <div className="rounded-full p-3 bg-[#F5F8FC] inline-block">
                  <span className="text-primary">
                    {' '}
                    <PriceVIpIcon />
                  </span>
                </div>
                <div>
                  <del className="text-gray-400 text-sm">
                    Price:{' '}
                    {formatMoney(
                      Number(data?.price) +
                        Number(data?.price) * Number(data?.discount)
                    )}{' '}
                    AED
                  </del>
                  <h1 className="font-semibold text-lg">
                    Starts from AED {formatMoney(data?.price)} / per person
                  </h1>
                </div>
              </div>
              <Button onClick={openModal} className="w-full mt-3">
                Leave a request
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-3 grid-cols-1 lg:mb-8 mb-5">
        {data?.inclusion && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">Inclusion</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.inclusion as string,
              }}
            />
          </div>
        )}
        {data?.exclusion && (
          <div className="space-y-4 border rounded-md p-4 ">
            <h1 className=" font-semibold text-2xl">Exclusion</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.exclusion as string,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TourFnfo;
