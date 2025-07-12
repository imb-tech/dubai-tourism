import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { CalendarIcon, ClockIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { BagIcon, UserIcon } from 'components/icons';
import { Badge } from 'components/ui/badge';

export default function TransferCard({
  image,
  name,
  location,
  rating,
  areaSqFt,
  gear,
  baths,
  price,
  discount,
  reviewsCount,
  km_per_day,
  slug,
  tag,
  year,
  beds,
  best_seller,
  suffix,
}: Product) {
  return (
    <div className="bg-background rounded-md p-4 relative  shadow">
      {best_seller && (
        <Badge className="absolute bg-[#FF5533] top-0 left-0 p-2 text-white text-xs font-medium rounded-none rounded-tl-lg rounded-br-lg">
          Best seller
        </Badge>
      )}
      <Image
        src="/images/car.png"
        alt="camara"
        width={450}
        height={450}
        priority
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">Scoda octavia</h3>

        <ul className="flex items-center gap-5 py-1 w-full">
          <li className="flex items-center gap-1 text-[#74AEF8]">
            <UserIcon size={18} />
            <span className="text-black font-semibold md:text-sm text-sm">
              3 passengers
            </span>
          </li>
          <li className="flex items-center gap-1 text-[#74AEF8]">
            <BagIcon size={18} />
            <span className="text-black font-semibold md:text-sm text-sm">
              2 luggages
            </span>
          </li>
        </ul>

        <span className="border-t h-1 w-full my-2"></span>

        <div>
          <p className="font-semibold">Outward Journey</p>

          <ul className="py-2">
            <li>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <span className="block size-3 bg-black/40 rounded-full"></span>
                <span className="flex flex-col">
                  <span className="text-base">
                    Rome Flumicino Airport(FCO),
                  </span>
                  <span className="font-light">Rome, Italy</span>
                </span>
              </p>
            </li>
            <li className="pl-[5px]">
              <span className="block h-3 border-l border-l-primary/80"></span>
            </li>
            <li>
              <p className="flex items-center gap-1 text-sm font-semibold">
                <span className="block size-3 bg-primary/80 rounded-full"></span>
                <span className="flex flex-col">
                  <span className="text-base"> Dubai Airport(DBX), Dubai,</span>
                  <span className="font-light">United Arab Emirates</span>
                </span>
              </p>
            </li>
          </ul>

          <p className="flex items-center gap-3 font-semibold mt-1">
            <span className="text-primary">
              <CalendarIcon size={16} />
            </span>
            <span className="text-sm">03 May 2025</span>
          </p>

          <p className="flex items-center gap-3 font-semibold mt-3">
            <span className="text-primary">
              <ClockIcon size={16} />
            </span>
            <span className="text-sm">12:35(1:35 pm)</span>
          </p>
        </div>

        <span className="border-t h-1 w-full my-2"></span>

        <Button>
          <Plus size={20} />
          Add return
        </Button>
        <span className="border-t h-1 w-full my-2"></span>
        <ul className="flex flex-col gap-4 ">
          <li className="flex items-center gap-2 text-[#74AEF8]">
            <UserIcon size={20} />
            <span className="text-black font-semibold md:text-sm text-sm">
              2 passengers
            </span>
          </li>
          <li className="flex items-center gap-2 text-[#74AEF8]">
            <UserIcon size={20} />
            <span className="text-black font-semibold md:text-sm text-sm">
              6113 km/3966 miles
            </span>
          </li>
          <li className="flex items-center gap-2 text-[#74AEF8]">
            <span className="text-primary">
              <ClockIcon size={20} />
            </span>
            <span className="text-black font-semibold md:text-sm text-sm">
              15h 20m
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
