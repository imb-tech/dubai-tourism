import ServicesCard from 'components/shared/services-card';
import SectionHeading from 'components/ui/section-heading';
import React from 'react';

const services: Service[] = [
  {
    name: 'Tours and Activities',
    image: '/activity.png',
    link: '/atraction',
  },
  {
    name: 'Transfers',
    image: '/transfer.png',
    link: '/transfer-service',
  },
  {
    name: 'Mice Groups',
    image: '/Mice group.png',
    link: '/mice-group',
  },
  {
    name: 'VIP Concierge',
    image: '/concierge.png',
    link: '/vip-concierge',
  },
  {
    name: 'Real Estate',
    image: '/real estate.png',
    link: '/rent-apartment',
  },
  {
    name: 'Ranet a car',
    image: '/ranet-car.png',
    link: '/rent-cars',
  },
  {
    name: 'Shopping',
    image: '/shopping.png',
    link: '/shopping',
  },
  {
    name: 'Tour Packages',
    image: '/tour package.png',
    link: '/tour-packages',
  },
];

export default function Services() {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionHeading title={'Our services'} className="mb-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <ServicesCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
