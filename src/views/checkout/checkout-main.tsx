'use client';

import React, { Fragment, useEffect } from 'react';
import CheckoutCard from './checkout-card';
import GoToPayment from './go-to-payment';
import WtpInfo from 'views/atraction/atraction-info';
import Modal from 'components/custom/modal';
import { useIsMobile } from 'hooks/use-mobile';
import { BASKET } from 'constants/api-endpoints';
import { useGet } from 'hooks/useGet';
import { FormProvider, useForm } from 'react-hook-form';
import CheckoutCardMobile from './checkout-mobile-card';

export default function CheckoutMain() {
  const isMobile = useIsMobile();
  const { data } = useGet<{ id: number; attractions: AtractionOffers[] }>(
    BASKET
  );
  const form = useForm<{ offers: AtractionOffers[] }>();

  useEffect(() => {
    if (data?.attractions) {
      form.reset({
        offers: data.attractions.map((offer) => ({
          ...offer,
          selected_transfer: {
            id: offer.transfer_option.id,
            is_discount: offer.transfer_option.is_discount,
            price: offer.transfer_option.price,
          },
          adult: offer.adult ?? 1,
          child: offer.child ?? 0,
          infant: offer.infant ?? 0,
        })),
      });
    }
  }, [data, form]);

  return (
    <FormProvider {...form}>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl mb-6">Cart</h1>
        <div className="flex flex-col gap-3 p-2 rounded-md bg-secondary">
          {data?.attractions?.map((item, index) => (
            <Fragment key={item.id}>
              {isMobile ? (
                <div className="w-full lg:hidden">
                  <CheckoutCardMobile key={index} data={item} index={index} />
                </div>
              ) : (
                <div className="hidden lg:flex w-full">
                  <CheckoutCard key={index} data={item} index={index} />
                </div>
              )}
            </Fragment>
          ))}
          <GoToPayment /> 
        </div>
        <Modal modalKey="more-info" className="max-w-xl">
          <WtpInfo />
        </Modal>
      </div>
    </FormProvider>
  );
}
