import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Tours and Activities',
    image: '/services-icons/toures.png',
  },
  {
    id: 2,
    name: 'Transfers',
    image: '/services-icons/transfers.png',
  },
  {
    id: 3,
    name: 'MICE Groups',
    image: '/services-icons/group.png',
  },
  {
    id: 4,
    name: 'Real Estate',
    image: '/services-icons/real.png',
  },
  {
    id: 5,
    name: 'VIP Concierge',
    image: '/services-icons/concierge.png',
  },
  {
    id: 6,
    name: 'Tour Packages',
    image: '/services-icons/tour.png',
  },
  {
    id: 7,
    name: 'Renta car',
    image: '/services-icons/renta-car.png',
  },
  {
    id: 8,
    name: 'Shopping',
    image: '/services-icons/shopping.png',
  },
];

function ServicesButton() {
  return (
    <div className="flex justify-stretch w-full gap-2 items-center overflow-x-auto">
      {data?.map((item) => (
        <div key={item.id} className="flex bg-[#FFFFFF1A] first:min-w-44  items-center gap-2 p-2 rounded-[8px] justify-center w-full">
            <Image priority src={item.image} width={20} height={20} alt={item.name}  />
            <span className='text-white whitespace-nowrap text-sm'>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ServicesButton;
