'use client';
import { PriceVIpIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';
import { formatMoney } from 'lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: VipConicerge;
};

function VipInfo({ data }: Props) {
  const { openModal } = useModal('concierges');

  return (
    <div>
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
              <Button onClick={openModal} className="w-full mt-3">
                Leave a request
              </Button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default VipInfo;
