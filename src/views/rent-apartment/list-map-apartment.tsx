'use client';

import React, { Fragment } from 'react';
import CarCard from 'components/shared/car-card';
import { useTextApartmentStore } from 'store/rent-apartment';

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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d321.98712541444945!2d69.23603555442904!3d41.20093632800717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1745214332280!5m2!1suz!2s"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md lg:h-[900px]"
            ></iframe>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ListAndMapApartment;


