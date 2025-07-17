import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/ui/card';
import Image from 'next/image';
import React, { Fragment } from 'react';
import SectionDetailsHeading from 'components/ui/page-heading';

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
    <Fragment>
      <h1 className="md:text-3xl text-2xl my-5 font-semibold">
        Why M tours transfer service?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 items-center justify-between gap-3 md:gap-6">
        {data?.map((item, index) => (
          <Card key={item?.id} className="">
            <CardHeader className=" justify-center">
              <Image
                src={`/transfer-info-${index + 1}.png`}
                width={64}
                height={64}
                alt={item?.name}
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle>
                <h3 className="text-xl">{item.name}</h3>
              </CardTitle>
              <CardDescription className="text-black">
                {item?.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default TransferInfo;
