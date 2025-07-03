import {
  CartIcon,
  CheckIcon,
  ClockIcon,
  UserIcon,
  WhatsappIcon,
} from 'components/icons';
import { Button } from 'components/ui/button';
import React from 'react';
import WtpTable from './atraction-table';
import Modal from 'components/custom/modal';
import WtpInfo from './atraction-info';

export default function WtpForm() {
  return (
    <div className="lg:px-6 py-6 px-3 rounded-lg bg-secondary mt-14">
      <h2 className="text-xl lg:text-2xl font-semibold">Atlantis Aquaventure Waterpark</h2>
      <ul className="grid lg:grid-cols-3 grid-cols-1  gap-2 mt-3">
        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <ClockIcon size={36} />
          </div>
          <div className="flex flex-col">
            <span>Operating Hours</span>
            <span>2024</span>
          </div>
        </li>

        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <UserIcon size={36} />
          </div>
          <div className="flex flex-col">
            <span>Children </span>
            <span>Yes</span>
          </div>
        </li>

        <li className="flex items-center gap-2 bg-white font-semibold p-3 rounded-md">
          <div className="text-primary">
            <CheckIcon size={36} />
          </div>
          <div className="flex flex-col">
            <span>Insurance</span>
            <span>Full</span>
          </div>
        </li>
      </ul>

      <h2 className="text-xl lg:text-2xl font-semibold mt-10 mb-3">
        Atlantis Aquaventure Waterpark offers
      </h2>
      <WtpTable />

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
        <Button size="lg">
          <CartIcon />
          Savatchaga qo'shish
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="bg-[#52C41A] hover:bg-white text-white  hover:text-primary gap-1"
        >
          <WhatsappIcon size={25} />
          <span>Whatsapp</span>
        </Button>
      </div>

      <Modal modalKey='more-info' className='max-w-xl'>
        <WtpInfo />
      </Modal>
    </div>
  );
}
