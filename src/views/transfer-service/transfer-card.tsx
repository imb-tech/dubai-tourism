import { CalendarIcon, ClockIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { Plus } from 'lucide-react';
import { BagIcon, UserIcon } from 'components/icons';
import Image from 'next/image';
import React from 'react';

export default function TransferCard() {
  return (
    <div className="bg-background rounded-md p-5">
      <Image
        src="/images/car.png"
        alt="camara"
        width={300}
        height={300}
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
              <p className="flex items-center gap-1 text-sm font-semibold">
                <span className="block size-3 bg-black/40 rounded-full"></span>
                Rome Flumicino Airport(FCO),{' '}
                <span className="font-light">Rome, Italy</span>
              </p>
            </li>
            <li className="pl-[5px]">
              <span className="block h-3 border-l border-l-primary/80"></span>
            </li>
            <li>
              <p className="flex items-center gap-1 text-sm font-semibold">
                <span className="block size-3 bg-primary/80 rounded-full"></span>
                Dubai Airport(DBX), Dubai,{' '}
                <span className="font-light">United Arab Emirates</span>
              </p>
            </li>
          </ul>

          <p className="flex items-center gap-3 font-semibold mt-1">
            <span className="text-primary">
              <CalendarIcon size={16} />
            </span>
            <span className="text-sm">O3 May 2025</span>
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
          <Plus size={16} />
          Add return
        </Button>
      </div>
    </div>
  );
}
