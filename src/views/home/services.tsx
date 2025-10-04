import ServicesCard from 'components/shared/services-card';
import SectionHeading from 'components/ui/section-heading';
import React from 'react';

const services: Service[] = [
  {
    name: 'Tours and Activities',
    image: '/services/activity.png',
    link: '/atraction',
  },
  {
    name: 'Transfers',
    image: '/services/transfer.png',
    link: '/transfer-service',
  },
  {
    name: 'Mice Groups',
    image: '/services/mice-group.png',
    link: '/mice-group',
  },
  {
    name: 'VIP Concierge',
    image: '/services/concierge.png',
    link: '/vip-concierge',
  },
  {
    name: 'Real Estate',
    image: '/services/real-estate.png',
    link: '/rent-apartment',
  },
  {
    name: 'Ranet a car',
    image: '/services/ranet-car.png',
    link: '/rent-cars',
  },
  {
    name: 'Shopping',
    image: '/services/shopping.png',
    link: '/shopping',
  },
  {
    name: 'Tour Packages',
    image: '/services/tour-package.png',
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
