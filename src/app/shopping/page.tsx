import { SliderComponents } from 'components/slider/page';
import React from 'react';
import { images } from 'services/data';
import ShoppingCard from 'views/shopping/shopping-card';
import SHoppingFilter from 'views/shopping/shopping-filter';

const Shopping = () => {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <h1 className="text-center text-4xl my-8">
        Atlantis Aquaventure Waterpark
      </h1>

      <SliderComponents images={images} />
      <div className="my-5">
        <SHoppingFilter />
      </div>
      <h1 className="font-semibold lg:text-3xl  text-2xl">Best seller</h1>
      <div className="grid lg:grid-cols-4 mt-5 mb-8 md:grid-cols-3 grid-cols-3 gap-5">
        {dataShoppping.map((item) => (
          <ShoppingCard key={item.id} item={item} />
        ))}
      </div>
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
