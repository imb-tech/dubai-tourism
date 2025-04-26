import ServicesCard from 'components/shared/services-card';
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
      <h2 className="sm:text-3xl text-2xl font-semibold mb-5">Bizning xizmatlarimiz</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <ServicesCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
