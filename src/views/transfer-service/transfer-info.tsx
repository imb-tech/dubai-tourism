import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/ui/card';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Global',
    description:
      'Wherever your journey leads, Transfeero ensures your comfort along the way.',
  },
  {
    id: 2,
    name: 'Professional drivers',
    description: 'Professional Drivers, Timely Rides, Relaxed Travel',
  },
  {
    id: 3,
    name: 'Global',
    description: 'Hire an hourly chauffeur for your business or leisure needs.',
  },
  {
    id: 4,
    name: 'Global',
    description: 'Explore the city anytime, anywhere—even long distances.',
  },
];

const TransferInfo = () => {
  return (
    <div className="w-full bg-[#F5F8FC] py-10 my-12">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="md:text-3xl text-2xl mb-5  font-semibold">
          Why M tours transfer service?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 items-center justify-between gap-3 md:gap-6">
          {data.map((item, index) => (
            <Card key={item.id} className="shadow-none border-none">
              <CardHeader className=" justify-center">
                <Image
                  src={`/transfer-info-${index + 1}.png`}
                  width={64}
                  height={64}
                  alt={item.name}
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>
                  <h3 className="text-xl">{item.name}</h3>
                </CardTitle>
                <CardDescription className="text-black">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferInfo;
