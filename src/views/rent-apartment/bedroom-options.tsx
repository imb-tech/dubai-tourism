'use client';
import { BagIconCar, BathIcon, LocationIcon, RoomIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';

type Props={
  apartments:Product | null
}

export default function BedroomOptions({apartments}:Props) {
  const { openModal } = useModal('apartments');
  const options = [
    { icon: <LocationIcon size={30} />, title: `${apartments?.address} bedrooms` },
    { icon: <RoomIcon size={24} />, title: `${apartments?.bedrooms} bedrooms` },
    { icon:  <BathIcon size={24} />, title: `${apartments?.bathrooms} bathroom` },
    { icon: <BagIconCar size={24} />, title: `${apartments?.area} sqFt` },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-6">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg "
          >
            <div className="bg-blue-50 p-2 rounded-full text-blue-500 mb-2">
              {option.icon}
            </div>
            <p className="text-sm font-medium text-center">{option.title}</p>
          </div>
        ))}
      </div>
      <Button onClick={openModal} className="w-full shadow-none">
        Leave a request
      </Button>

    </>
  );
}
