import Cars from 'views/home/cars';
import HeroPages from 'views/home/hero';
import Products from 'views/home/products';
import Services from 'views/home/services';
import Tours from 'views/home/tours';
import React from 'react';

export default function Home() {
  return (
    <div className='space-y-12 mb-12'>
      <HeroPages />
      <Services />
      <Products />
      <Cars/>
      <Tours/>
    </div>
  );
}
