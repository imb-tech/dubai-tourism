import TourCard from 'components/shared/tour-card';
import React from 'react';

const tours: Tour[] = [
  {
    id: 1,
    image: '/tour-1.png',
    location: 'Maldiv, Island',
  },
  {
    id: 2,
    image: '/tour-1.png',
    location: 'Maldiv, Island',
  },
  {
    id: 3,
    image: '/tour-1.png',
    location: 'Maldiv, Island',
  },
  {
    id: 4,
    image: '/tour-1.png',
    location: 'Maldiv, Island',
  },
  {
    id: 5,
    image: '/tour-1.png',
    location: 'Maldiv, Island',
  },
  {
    id: 6,
    image: '/tour-1.png',
    location: 'Maldiv, Island',
  },
];

export default function Tours() {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <h2 className="text-3xl font-semibold mb-3">Tour packages</h2>
      <div className="grid grid-cols-4 gap-5">
        {tours.map((s, i) => (
          <TourCard key={s.id} index={i} {...s} />
        ))}
      </div>
    </div>
  );
}
