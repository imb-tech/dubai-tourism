import CarCard from 'components/shared/car-card';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const cars: Product[] = [
  {
    id: 1,
    name: 'Lambar gambar',
    image: '/car.png',
    price: 350,
  },
  {
    id: 2,
    name: 'Bugati',
    image: '/car.png',
    price: 350,
  },
  {
    id: 3,
    name: 'Mice group',
    image: '/car.png',
    price: 350,
  },
  {
    id: 4,
    name: 'VIP Concierge',
    image: '/car.png',
    price: 350,
  },
];

export default function Cars() {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <div className="flex items-center mb-3">
        <h2 className="text-3xl font-semibold">Rent a car</h2>
        <ChevronRight />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars.map((s) => (
          <CarCard key={s.id} {...s} />
        ))}
      </div>
    </div>
  );
}
