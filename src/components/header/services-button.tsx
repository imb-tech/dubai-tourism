'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from 'lib/utils';
import React, { useState } from 'react';
import {
  TouresIcon,
  ConciergeIcon,
  GroupIcon,
  RealIcon,
  RentaIcon,
  ShoppingIcon,
  TourIcon,
  TransfersIcon,
  ServicesIcon,
} from 'components/icons';
import { Button } from 'components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

function ServicesButton({ pathname }: { pathname: string | null }) {
  const pathnameBol = pathname === '/' ? true : false;
  const [open, setOpen] = useState(false);
  const data = [
    {
      id: 1,
      name: 'Tours and Activities',
      icon: TouresIcon,
      url: '/atraction',
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
      name: 'Rent a car',
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
              pathnameBol
                ? 'bg-[#FFFFFF1A] text-white '
                : 'bg-[#FFF3EC]  text-[#FF5533]',
            )}
          >
            <item.icon />
            <span className=" whitespace-nowrap text-sm">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="relative w-full lg:hidden">
        <Button
          onClick={() => setOpen(!open)}
          variant="outline"
          className={cn(
            'flex justify-between border-none shadow-none w-full h-10 transition-all duration-300',
            pathnameBol
              ? 'bg-[#FFFFFF1A] hover:bg-[#FFFFFF1A] hover:text-white text-white '
              : 'bg-[#FFF3EC] hover:bg-[#FFF3EC] hover:text-[#FF5533] text-[#FF5533]',
            open
              ? 'bg-[#FF5533] text-white hover:text-white hover:bg-[#FF5533]'
              : ''
          )}
        >
          <div className="flex items-center gap-2">
            <ServicesIcon />
            <span>Services catalogue</span>
          </div>
          <ChevronDown
            className={cn(
              'transition-all',
              pathnameBol ? '' : 'text-[#FF5533]',
              open ? 'rotate-180 text-white' : ''
            )}
          />
        </Button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'p-2 flex flex-col gap-2 absolute top-full mt-3 left-0 w-full rounded-md z-30',
                pathnameBol ? 'bg-white' : 'bg-[#FFDDD6]'
              )}
            >
              {data?.map((item) => (
                <Link
                  href={item.url}
                  onClick={() => setOpen(false)}
                  key={item.id}
                  className={cn(
                    'p-2 flex justify-center gap-2 cursor-pointer hover:shadow rounded-md !text-[#FF5533]',
                    pathnameBol ? 'border border-[#ecc3bb]' : 'bg-white'
                  )}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ServicesButton;
