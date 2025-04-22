import CarFeatures from 'views/rent/car-features';
import CarImages from 'views/rent/car-images';
import CarInfo from 'views/rent/car-info';
import React from 'react';

export default function RentId() {
  return (
    <div className="container mx-auto sm:px-10">
      <h1 className="text-center text-4xl my-8">Dubayda avtomobil ijarasi</h1>
      <CarImages />
      <CarInfo />
      <CarFeatures />
    </div>
  );
}
