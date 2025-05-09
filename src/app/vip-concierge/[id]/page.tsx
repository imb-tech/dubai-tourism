import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import { CreativeCommons } from 'lucide-react';
import { Button } from 'components/ui/button';
import SectionDetailsHeading from 'components/ui/page-heading';
import { SliderComponents } from 'components/slider/page';
import { BANNERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';


const cars: Product[] = [
  {
    id: 1,
    name: 'Lambar gambar',
    image:
      'https://s3-alpha-sig.figma.com/img/0f7d/b948/24f139d6e8e95cda732725bf48af5e86?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aw2B8DstoCu7S77CiQ98SaRuThV3jBzo~LYjlGCCOu3IqglsQ-zDVrFBG0DVdrPrpIkn5biwmzyBgaC36SUVxhM5Ey3mDc06f8TKmwOGtCE8i3JUDoxNapJ7JlNEsEmkWR9GytgFkVMtRRStEK9pes2-QMSUbPHOk7wu7honzqLFvzCqNb3gOvwCNMrkV11BvjvyUeVw2Z8W4~DZU8lmfL4Z1yUnnQrVVRBdYKp~r~r9i4zDrZ8VKaFebj4WYoOlJQBroJVNsqYnQ0v-8Q1AkcF47Iq3qKd8J6jPMJC6~bBWAKZ~Nwb9nqYcIIojxtve1xRJl7PZiDuKuBSNpfwOmA__',
    sale: true,
    discount: 350,
    price: 375,
    url: '/vip-concierge/1',
  },
  {
    id: 2,
    name: 'Sunset Cruiser',
    image:
      'https://s3-alpha-sig.figma.com/img/543d/5369/fdf229e6c8f73363083a5ecb593b7b01?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr6WdrCAfhNWDH1Y9P43aPRK-w2iT~HzfimwhU6IwCeGf0pGTGrErS8QjtOfYwuTErYYKI6RLbPCykYOKSarzqvz41QMT8~6HJPKnucwAHI6gU1~fVKyLTVhmw3YQ2mo0PDh59Wu0KHfWY5q7KJHK1i8y6z6bzz5QmOknF5lyExyVdqLne5W-bMDL8ybUAE~PuISFsGJipJIvLAcngVllySaDol71WoccACCUx~2ZXcy0JTZBIAlT1pFekYSzRPArKxiKIqRJxOm6VHs2KNnfwTXt7~OXZIdqy75T1QiqcO55FfM1fsyTZ9luna-Iy6rXs465o3VQ2enBVzF2rie7g__',
    price: 420,
    suffix: 'day',
    discount: 390,
    url: '/vip-concierge/2',
  },
  {
    id: 3,
    name: 'Urban Thunder',
    image:
      'https://s3-alpha-sig.figma.com/img/25ad/3e81/3c3c731e62949ee48be600d299179abe?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3C8M8XZ-HeBKJLPOuRYrj-568Omh9SHAKVM2QRL7GCA8ZL8ALUqZF5~5kyDC5I4yl9MLwwmr94nULBza6DhxArD0mC9D3tQ80qJTNJeRH1RpLTOzhNEGXAT2p1vFhU1l2oEDy~eUr7nMTUbvQznfDHYwnTdvQHBUUSVa4JVBUEs2M~jopxFCA~Gn~z-zBn4T3DiB0EgejOddJ0UMrTQWiinP2Djgk4JeqIEMmiuwNqVyrnzOnCYo2vQgciPyGAVBYdFHk4fAmQmCfPVd0MXZbdxkK7kLy9DvzJZkHXYSp7s4pYO74sS~Fmb7S3njcF0KMvqHX9vxSQmuLq-RgclEQ__',
    price: 395,
    suffix: 'day',
    discount: 390,
    url: '/vip-concierge/3',
  },
  {
    id: 4,
    name: 'Silver Streak',
    image:
      'https://s3-alpha-sig.figma.com/img/6766/d07a/4355846de98f8dd83ea1e9f8c8380623?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXxaaQPvHSc2r4lflzMmOq9eDH5cT0aUlmEu8Dg7Kvvoc~f1ZJi~h2FGJg0KmkfReEUXCGDyuiDd9AMJxcyHU5nxlgLWEjw9v9dBTevMlAYJymQ8ndrkaVZSOEtVkLP~Cwz420SNnV08yYw9QX9cEJq50fr~OCXX60gVFnkOGDpBSzAUF-gHUHHGbGXl0mUlX0-5GGauedZTnOYOG~tIagbs2tIQeILH7iIkipeK1xm36Apkbq0pjcq3Rs-8BD4XRsQ-FxpOQZyALz5UClMm19wlBretr2LHqyLg8T0~TbtgUETooerVVFGi6FOtGyGa-f~gU9g6tzCdAO0ACXRxAA__',
    sale: true,
    discount: 390,
    price: 410,
    url: '/vip-concierge/4',
    suffix: 'day',
  },
];

export default async function RentId() {
  const slides = cars.map((s) => <CarCard key={s.id} {...s} />);
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'concierges' },
  });

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="28ft luxury Yacht" />
        <div className="hidden lg:block">
          <DrawerImagesView images={banners || []} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={banners || []} showCout={true} />
        </div>

        <div className="space-y-4 border rounded-md p-4 mt-5 mb-12 bg-[#F5F8FC]">
          <h1 className=" lg:text-3xl  font-semibold text-2xl">
            28ft luxury Yacht
          </h1>
          <div>
            <div className="flex flex-col   gap-6">
              <p>
                The Ferrari SF90 boasts a turbocharged 3.9-liter V8 engine
                paired with three electric motors, generating a combined 986
                horsepower. This exotic Italian car is a masterpiece, combining
                cutting-edge hybrid technology with Ferrari’s legendary
                performance. The SF90 embodies Ferrari’s prestige, featuring an
                interior of exquisite luxury, complete with leather and advanced
                materials. Cruise by the palm trees and enjoy the thrill of
                driving one of the fastest cars in the world while soaking in
                the allure of Dubai.
              </p>
              <div className="space-y-3">
                <h1 className=" lg:text-2xl  font-semibold text-xl">
                  Rental Price
                </h1>
                <div className="bg-white p-2 rounded-md flex items-center gap-3">
                  <div className="rounded-full p-3 bg-[#F5F8FC] inline-block">
                    <CreativeCommons />
                  </div>
                  <div>
                    <del className="text-gray-400 text-sm">
                      Price: 2 000 AED
                    </del>
                    <h1 className="font-semibold text-lg">AED 450 /hr</h1>
                  </div>
                </div>
                <Button className="w-full mt-3">Leave a request</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F8FC] lg:py-10 py-4">
        <div className="container mx-auto lg:px-0 px-3">
          <h1 className="lg:text-3xl mb-5 text-2xl font-semibold">See more</h1>
          <div className="sm:grid grid-cols-1 hidden  sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slides}
          </div>
          <div className="sm:hidden">
            <CustomCarousel items={slides} />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="VIP Concierge Questions" service="concierges" />
      </div>
    </React.Fragment>
  );
}
