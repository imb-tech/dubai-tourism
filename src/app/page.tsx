import Cars from 'pages/home/cars';
import HeroPages from 'pages/home/hero';
import Products from 'pages/home/products';
import Services from 'pages/home/services';
import Tours from 'pages/home/tours';
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
