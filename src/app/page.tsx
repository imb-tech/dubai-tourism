import HeroPages from 'pages/home/hero';
import Products from 'pages/home/products';
import Services from 'pages/home/services';
import React from 'react';

export default function Home() {
  return (
    <div className='space-y-12'>
      <HeroPages />
      <Services />
      <Products />
    </div>
  );
}
