import {
  BagIcon,
  BluetoohIcon,
  CameraIcon,
  CarIcon,
  ColorIcon,
  DoorIcon,
  Engine2Icon,
  GearIcon,
  MusicIcon,
  RadioIcon,
  SafetIcon,
  ScreenIcon,
  SeatsIcon,
  SensorsIcon,
  User2Icon,
} from 'components/icons';
import React from 'react';

export default function CarFeatures({ cars }: { cars: RentCar | null }) {
  const data = [
    {
      icon: <CarIcon size={32} />,
      label: 'mark',
      value: cars?.brand,
    },
    {
      icon: <ColorIcon size={32} />,
      label: 'Color',
      value: cars?.color,
    },
    {
      icon: <BagIcon size={32} />,
      label: 'Luggas',
      value: cars?.luggage,
    },

    {
      icon: <User2Icon size={32} />,
      label: 'GCC',
      value: cars?.gcc ? 'Yes' : 'No',
    },
    {
      icon: <SafetIcon size={32} />,
      label: 'Safety',
      value: cars?.safety ? 'Yes' : 'No',
    },
    {
      icon: <GearIcon size={32} />,
      label: 'Gear',
      value: cars?.gear,
    },
    {
      icon: <SeatsIcon size={32} />,
      label: 'Seats',
      value: cars?.seats,
    },
    {
      icon: <SensorsIcon size={32} />,
      label: 'Sensors',
      value: cars?.sensors ? 'Yes' : 'No',
    },
    {
      icon: <CameraIcon size={32} />,
      label: 'Camera',
      value: cars?.camera ? 'Yes' : 'No',
    },
    {
      icon: <Engine2Icon size={32} />,
      label: 'Engine',
      value: cars?.engine,
    },
    {
      icon: <DoorIcon size={32} />,
      label: 'Doors',
      value: cars?.doors,
    },
    {
      icon: <BluetoohIcon size={32} />,
      label: 'Bluetooh',
      value: cars?.bluetooth ? 'Yes' : 'No',
    },
    {
      icon: <ScreenIcon size={32} />,
      label: 'LCD',
      value: cars?.lcd ? 'Yes' : 'No',
    },
    {
      icon: <MusicIcon size={32} />,
      label: 'Mp3/CD',
      value: cars?.player ? 'Yes' : 'No',
    },
    {
      icon: <RadioIcon size={32} />,
      label: 'Radio',
      value: cars?.radio ? 'Yes' : 'No',
    },
  ];

  return (
    <div className="lg:p-6 p-3 rounded-lg border mt-5">
      <h1 className="md:text-3xl text-2xl font-semibold m-0">Cart Features</h1>
      <ul className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-2 mt-3">
        {data.map((el) => (
          <li
            className="flex flex-col items-center gap-1 bg-primary/10 font-semibold p-3 py-5 rounded-md"
            key={el.label}
          >
            <div className="text-primary">{el.icon}</div>
            <span className="text-black/60 font-light text-sm">{el.label}</span>
            <span className="capitalize">{el.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
