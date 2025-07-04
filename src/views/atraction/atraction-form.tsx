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
import AttractionCardMobile from './attraction-card';

const dataAtraction = [
  {
    id: '1',
    tour_options: 'Amerika',
    transfer_option: 'Birinchisi',
    date: '2024-12-15',
    adult: 0,
    child: 0,
    infant: 0,
  },
  {
    id: '2',
    tour_options: 'Hindiston',
    transfer_option: 'Ikkinchisi',
    date: '2024-12-15',
    adult: 0,
    child: 0,
    infant: 0,
  },
  {
    id: '3',
    tour_options: 'Dubai',
    transfer_option: 'Uchinchisi',
    date: '2024-12-15',
    adult: 0,
    child: 0,
    infant: 0,
  },
  {
    id: '4',
    tour_options: 'Toshkent',
    transfer_option: "To'rtinchisi",
    date: '2024-12-15',
    adult: 0,
    child: 0,
    infant: 0,
  },
];

const onSubmit = () => {};

export default function WtpForm() {
  return (
    <div className="lg:px-6 py-6 px-3 rounded-lg bg-secondary mt-14">
      <h2 className="text-xl lg:text-2xl font-semibold">
        Atlantis Aquaventure Waterpark
      </h2>
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
      <WtpTable data={dataAtraction} />
      {dataAtraction.map((item, index) => (
        <AttractionCardMobile key={index} data={item} />
      ))}
      <Modal modalKey="more-info" className="max-w-xl">
        <WtpInfo />
      </Modal>
    </div>
  );
}
