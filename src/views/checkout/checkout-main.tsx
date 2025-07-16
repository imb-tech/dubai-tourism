'use client';

import React, { Fragment } from 'react';
import CheckoutCard from './checkout-card';
import GoToPayment from './go-to-payment';
import WtpInfo from 'views/atraction/atraction-info';
import Modal from 'components/custom/modal';
import { useIsMobile } from 'hooks/use-mobile';
import { BASKET } from 'constants/api-endpoints';
import { useGet } from 'hooks/useGet';

export default function CheckoutMain() {
  const isMobile = useIsMobile();

  const { data } = useGet<{ id: number; attractions: AtractionGetBasket[] }>(
    BASKET
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl mb-6">Cart</h1>
      <div className="flex flex-col gap-3 p-2 rounded-md bg-secondary">
        {data?.attractions?.map((item) => (
          <Fragment key={item.id}>
            {isMobile ? (
              <> {/* <CheckoutCardMobile data={item} /> */}</>
            ) : (
              <CheckoutCard data={item} />
            )}
          </Fragment>
        ))}
        <GoToPayment totalAmount={0} />
      </div>
      <Modal modalKey="more-info" className="max-w-xl">
        <WtpInfo />
      </Modal>
    </div>
  );
}
