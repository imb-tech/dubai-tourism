import HeroPages from 'views/home/hero';
import Products from 'views/home/products';
import Services from 'views/home/services';
import Tours from 'views/home/tours';
import React from 'react';
import Questions from 'components/questions/questions';
import {
  ATRACTIONS_HOME,
  BESTSELLER_HOME,
  CARS,
  POPULAR_QUESTIONS,
  RENT_A_CAR_HOME,
  SHOPPING_GOLD_HOME,
  TOURS_HOME,
} from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';

export default async function Home() {
  const atractions = await fetchData<AtractionData>(ATRACTIONS_HOME);
  const shopping = await fetchData<ShoppingData>(SHOPPING_GOLD_HOME);
  const tours = await fetchData<{results:{name:string, image:string}[]}>(TOURS_HOME);
  const rentACars = await fetchData(RENT_A_CAR_HOME);
  const best_seller = await fetchData(BESTSELLER_HOME);
  console.log(atractions);

  return (
    <div className="space-y-12 mb-12">
      <HeroPages />
      <Services />
      <Products
        autoplayDelay={1500}
        data={best_seller?.results ?? []}
        title="Best Seller"
        className="bg-[#F5F8FC] py-14"
      />
      <Products
        autoplayDelay={1500}
        data={atractions?.results ?? []}
        title="Atraction tickets"
        url="/atraction"
      />
      <Products
        autoplayDelay={2000}
        data={rentACars.results ?? []}
        title="Rent a car"
        className="bg-[#F5F8FC] py-14"
        url="rent"
      />
      <Products
        autoplayDelay={1800}
        data={shopping?.results ?? []}
        title="Shopping"
        url="/shopping"
      />
      <Tours tours={tours?.results ?? []} />
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Frequently asked questions" service="" />
      </div>
    </div>
  );
}
