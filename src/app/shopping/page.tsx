import Questions from 'components/questions/questions';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import ShoppingCard from 'views/shopping/shopping-card';
import SHoppingFilter from 'views/shopping/shopping-filter';

const Shopping = async () => {
  const banners = await fetchData(BANNERS, {
    params: { service: 'shopping' },
  });

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Atlantis Aquaventure Waterpark" />

      <SliderComponents images={banners} />
      <div className="my-5">
        <SHoppingFilter />
      </div>
      <h1 className="font-semibold lg:text-3xl  text-2xl">Best seller</h1>
      <div className="grid lg:grid-cols-4 mt-5 mb-8 md:grid-cols-2 grid-cols-1 gap-5">
        {dataShoppping.map((item) => (
          <ShoppingCard key={item.id} item={item} />
        ))}
      </div>
      <Questions title="Shopping Questions" service="shopping" />
    </div>
  );
};

export default Shopping;

const dataShoppping = [
  {
    id: 1,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 2,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 3,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 4,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 5,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 6,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 7,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 8,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 9,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 10,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 11,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 12,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
];
