'use client';

import React, { Fragment } from 'react';
import CarCard from 'components/shared/car-card';
import { useTextApartmentStore } from 'store/rent-apartment';
import dynamic from 'next/dynamic';

const MapApartment = dynamic(() => import('./peoperty-map'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

type Props = {
  apartments: RentCarResults | null;
};

const ListAndMapApartment = ({ apartments }: Props) => {
  const { text } = useTextApartmentStore();

  return (
    <Fragment>
      {text === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {apartments?.results?.map((s) => (
            <CarCard key={s.id} {...s} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:order-1 order-2">
            {apartments?.results?.slice(0, 4).map((s) => (
              <CarCard key={s.id} {...s} />
            ))}
          </div>

          <div className="lg:order-2 order-1">
            <MapApartment apartments={apartments?.results} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ListAndMapApartment;
