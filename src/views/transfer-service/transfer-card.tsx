import { BagIcon, UserIcon } from 'components/icons';
import React from 'react';

export default function TransferCard() {
  return (
    <div className="bg-background rounded-md p-5">
      <img src="/images/car.png" alt="" />
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
      </div>
    </div>
  );
}
