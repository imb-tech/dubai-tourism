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
import { Button } from 'components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu';
import { LayoutList } from 'lucide-react';

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
      url: '/mice-group',
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
    <>
      <div className="lg:flex hidden  justify-stretch w-full gap-2 items-center overflow-x-auto">
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
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full lg:hidden" asChild>
          <Button
            variant="outline"
            className={cn(
              'flex justify-start border-none shadow-none',
              pathname === '/'
                ? 'bg-[#FFFFFF1A] hover:bg-[#FFFFFF1A] hover:text-white text-white '
                : 'bg-[#FFF3EC]  text-[#FF5533]'
            )}
          >
            <LayoutList size={18} /> <span>Servives catalogue</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" bg-[#FFDDD6] w-[320px] flex flex-col gap-2">
          {data?.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="p-2 bg-white flex justify-center  !text-[#FF5533]"
            >
              <div className="!text-[#FF5533]">
                <item.icon />
              </div>
              <span>{item.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default ServicesButton;
