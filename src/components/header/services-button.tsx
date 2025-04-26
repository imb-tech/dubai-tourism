import { cn } from 'lib/utils';
import Link from 'next/link';
import React from 'react';
import {
  TouresIcon,
  ConciergeIcon,
  GroupIcon,
  RealIcon,
  RentaIcon,
  ShoppingIcon,
  TourIcon,
  TransfersIcon,
} from 'components/icons';

function ServicesButton({ pathname }: { pathname: string | null }) {
  const data = [
    {
      id: 1,
      name: 'Tours and Activities',
      icon: TouresIcon,
      url: '/',
    },
    {
      id: 2,
      name: 'Transfers',
      icon: TransfersIcon,
      url: '/transfer-service',
    },
    {
      id: 3,
      name: 'MICE Groups',
      icon: GroupIcon,
      url: '/atraction',
    },
    {
      id: 4,
      name: 'Real Estate',
      icon: RealIcon,
      url: '/rent-apartment',
    },
    {
      id: 5,
      name: 'VIP Concierge',
      icon: ConciergeIcon,
      url: '/vip-concierge',
    },
    {
      id: 6,
      name: 'Tour Packages',
      icon: TourIcon,
      url: '/tour-packages',
    },
    {
      id: 7,
      name: 'Renta car',
      icon: RentaIcon,
      url: '/rent',
    },
    {
      id: 8,
      name: 'Shopping',
      icon: ShoppingIcon,
      url: '/shopping',
    },
  ];

  return (
    <div className="flex justify-stretch w-full gap-2 items-center overflow-x-auto">
      {data?.map((item) => (
        <Link
          href={item.url}
          key={item.id}
          className={cn(
            'flex first:min-w-44  items-center gap-2 p-2 rounded-[8px] justify-center w-full',
            pathname === '/'
              ? 'bg-[#FFFFFF1A] text-white '
              : 'bg-[#FFF3EC]  text-[#FF5533]'
          )}
        >
          <item.icon />
          <span className=" whitespace-nowrap text-sm">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default ServicesButton;
