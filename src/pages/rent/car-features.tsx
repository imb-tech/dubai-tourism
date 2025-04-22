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

export default function CarFeatures() {
  const data = [
    {
      icon: <CarIcon size={32} />,
      label: 'mark',
      value: 'Ferrari',
    },
    {
      icon: <ColorIcon size={32} />,
      label: 'Color',
      value: 'Yellow',
    },
    {
      icon: <BagIcon size={32} />,
      label: 'Luggas',
      value: '2',
    },

    {
      icon: <User2Icon size={32} />,
      label: 'GCC',
      value: 'Yes',
    },
    {
      icon: <SafetIcon size={32} />,
      label: 'Safety',
      value: 'Yes',
    },
    {
      icon: <GearIcon size={32} />,
      label: 'Gear',
      value: 'Auto',
    },
    {
      icon: <SeatsIcon size={32} />,
      label: 'Seats',
      value: 'Auto',
    },
    {
      icon: <SensorsIcon size={32} />,
      label: 'Sensors',
      value: 'Yes',
    },
    {
      icon: <CameraIcon size={32} />,
      label: 'Camera',
      value: 'Yes',
    },
    {
      icon: <Engine2Icon size={32} />,
      label: 'Engine',
      value: 'V12',
    },
    {
      icon: <DoorIcon size={32} />,
      label: 'Doors',
      value: '2',
    },
    {
      icon: <BluetoohIcon size={32} />,
      label: 'Bluetooh',
      value: 'Yes',
    },
    {
      icon: <ScreenIcon size={32} />,
      label: 'LCD',
      value: 'Yes',
    },
    {
      icon: <MusicIcon size={32} />,
      label: 'Mp3/CD',
      value: 'Yes',
    },
    {
      icon: <RadioIcon size={32} />,
      label: 'Radio',
      value: 'Yes',
    },
  ];
  return (
    <div className="p-6 rounded-lg border mt-5">
      <h2 className="text-3xl font-semibold m-0">Cart Features</h2>
      <ul className="grid grid-cols-8 gap-2 mt-3">
        {data.map((el) => (
          <li
            className="flex flex-col items-center gap-1 bg-primary/10 font-semibold p-3 py-5 rounded-md"
            key={el.label}
          >
            <div className="text-primary">{el.icon}</div>
            <span className="text-black/60 font-light text-sm">{el.label}</span>
            <span>{el.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
