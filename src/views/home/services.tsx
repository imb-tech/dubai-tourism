import ServicesCard from 'components/shared/services-card';
import SectionHeading from 'components/ui/section-heading';
import React from 'react';

const services: Service[] = [
  {
    name: 'Atraction ticketlar',
    image: '/atroksion.png',
    link: '/atraction',
  },
  {
    name: 'Transfers xizmati',
    image: '/atroksion.png',
    link: '/transfer-service',
  },
  {
    name: 'Mice group',
    image: '/atroksion.png',
    link: '/atraction',
  },
  {
    name: 'VIP Concierge',
    image: '/atroksion.png',
    link: '/vip-oncierge',
  },
  {
    name: 'Real estate',
    image: '/atroksion.png',
    link: '/rent-apartment',
  },
  {
    name: 'Dubayda avtomobil ijarasi',
    image: '/atroksion.png',
    link: '/rent',
  },
  {
    name: 'Shopping xizmati',
    image: '/atroksion.png',
    link: '/shopping',
  },
  {
    name: 'Tur paketlar',
    image: '/atroksion.png',
    link: '/tour-packages',
  },
];

export default function Services() {
  return (
    <div className='container mx-auto lg:px-0 px-3'>
      <SectionHeading title={"Bizning xizmatlarimiz"} className='mb-5' />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <ServicesCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
