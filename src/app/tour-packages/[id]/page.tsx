import React from 'react';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import { CreativeCommons } from 'lucide-react';
import { Button } from 'components/ui/button';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';

const cars: Product[] = [
    {
      id: 1,
      name: 'Lambar gambar',
      image:
        'https://s3-alpha-sig.figma.com/img/0f7d/b948/24f139d6e8e95cda732725bf48af5e86?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aw2B8DstoCu7S77CiQ98SaRuThV3jBzo~LYjlGCCOu3IqglsQ-zDVrFBG0DVdrPrpIkn5biwmzyBgaC36SUVxhM5Ey3mDc06f8TKmwOGtCE8i3JUDoxNapJ7JlNEsEmkWR9GytgFkVMtRRStEK9pes2-QMSUbPHOk7wu7honzqLFvzCqNb3gOvwCNMrkV11BvjvyUeVw2Z8W4~DZU8lmfL4Z1yUnnQrVVRBdYKp~r~r9i4zDrZ8VKaFebj4WYoOlJQBroJVNsqYnQ0v-8Q1AkcF47Iq3qKd8J6jPMJC6~bBWAKZ~Nwb9nqYcIIojxtve1xRJl7PZiDuKuBSNpfwOmA__',
      suffix: '1',
      reviewsCount: 12,
      rating: 4.5,
      discount: 350,
      price: 375,
      url: '/tour-packages/1',
    },
    {
      id: 2,
      name: 'Sunset Cruiser',
      image:
        'https://s3-alpha-sig.figma.com/img/543d/5369/fdf229e6c8f73363083a5ecb593b7b01?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr6WdrCAfhNWDH1Y9P43aPRK-w2iT~HzfimwhU6IwCeGf0pGTGrErS8QjtOfYwuTErYYKI6RLbPCykYOKSarzqvz41QMT8~6HJPKnucwAHI6gU1~fVKyLTVhmw3YQ2mo0PDh59Wu0KHfWY5q7KJHK1i8y6z6bzz5QmOknF5lyExyVdqLne5W-bMDL8ybUAE~PuISFsGJipJIvLAcngVllySaDol71WoccACCUx~2ZXcy0JTZBIAlT1pFekYSzRPArKxiKIqRJxOm6VHs2KNnfwTXt7~OXZIdqy75T1QiqcO55FfM1fsyTZ9luna-Iy6rXs465o3VQ2enBVzF2rie7g__',
      reviewsCount: 12,
      rating: 4.5,
      suffix: '2',
      discount: 400,
      price: 420,
      url: '/tour-packages/2',
    },
    {
      id: 3,
      name: 'Urban Thunder',
      image:
        'https://s3-alpha-sig.figma.com/img/25ad/3e81/3c3c731e62949ee48be600d299179abe?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3C8M8XZ-HeBKJLPOuRYrj-568Omh9SHAKVM2QRL7GCA8ZL8ALUqZF5~5kyDC5I4yl9MLwwmr94nULBza6DhxArD0mC9D3tQ80qJTNJeRH1RpLTOzhNEGXAT2p1vFhU1l2oEDy~eUr7nMTUbvQznfDHYwnTdvQHBUUSVa4JVBUEs2M~jopxFCA~Gn~z-zBn4T3DiB0EgejOddJ0UMrTQWiinP2Djgk4JeqIEMmiuwNqVyrnzOnCYo2vQgciPyGAVBYdFHk4fAmQmCfPVd0MXZbdxkK7kLy9DvzJZkHXYSp7s4pYO74sS~Fmb7S3njcF0KMvqHX9vxSQmuLq-RgclEQ__',
      reviewsCount: 12,
      rating: 4.5,
      suffix: '3',
      discount: 370,
      price: 395,
      url: '/tour-packages/3',
    },
    {
      id: 4,
      name: 'Silver Streak',
      image:
        'https://s3-alpha-sig.figma.com/img/6766/d07a/4355846de98f8dd83ea1e9f8c8380623?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXxaaQPvHSc2r4lflzMmOq9eDH5cT0aUlmEu8Dg7Kvvoc~f1ZJi~h2FGJg0KmkfReEUXCGDyuiDd9AMJxcyHU5nxlgLWEjw9v9dBTevMlAYJymQ8ndrkaVZSOEtVkLP~Cwz420SNnV08yYw9QX9cEJq50fr~OCXX60gVFnkOGDpBSzAUF-gHUHHGbGXl0mUlX0-5GGauedZTnOYOG~tIagbs2tIQeILH7iIkipeK1xm36Apkbq0pjcq3Rs-8BD4XRsQ-FxpOQZyALz5UClMm19wlBretr2LHqyLg8T0~TbtgUETooerVVFGi6FOtGyGa-f~gU9g6tzCdAO0ACXRxAA__',
      reviewsCount: 12,
      rating: 4.5,
      suffix: '4',
      discount: 390,
      price: 410,
      url: '/tour-packages/4',
    },
  ];



export default async function RentId() {
  const slides = cars.map((s) => <CarCard key={s.id} {...s} />);
   const banners = await fetchData<Banner[]>(BANNERS, {
      params: { service: 'tour_packages' },
    });

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="28ft luxury Yacht" />
        <SliderComponents images={banners || []} />

        <div className="space-y-4 border rounded-md p-4 mt-5 mb-12 bg-[#F5F8FC]">
          <h1 className=" lg:text-3xl  font-semibold text-2xl">Overview</h1>
          <div>
            <div className="flex flex-col   gap-6">
              <p>
                The Ferrari SF90 boasts a turbocharged 3.9-liter V8 engine
                Turkiye, a land where East meets West, is a captivating
                destination blending ancient heritage with modern allure.  From
                the iconic landmarks of Istanbul and the fairy-tale landscapes
                of Cappadocia to the pristine beaches of the Aegean and the rich
                culinary traditions, Türkiye offers a journey like no other. 
                Explore centuries-old architecture, bustling bazaars, and
                vibrant cities that showcase a seamless fusion of history,
                culture, and natural beauty.  Whether you're seeking adventure,
                relaxation, or a cultural escape, Turkiye promises unforgettable
                experiences at every turn.
              </p>
              <div className="space-y-3">
                <h1 className=" lg:text-2xl  font-semibold text-xl">Price</h1>
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

        <div className="grid lg:grid-cols-2 gap-3 grid-cols-1 lg:mb-8 mb-5">
          <div className="space-y-3 border rounded-md p-4 ">
            <h1 className=" lg:text-2xl  font-semibold text-xl">Inclusion</h1>
            <p>
              3 nights hotel accommodation in Istanbul. Daily open buffet
              breakfasts. Guided Istanbul City Tour. Guided Bosphorus Cruise and
              Shopping Tour. All entrance fees mentioned in the itinerary.
              Professional English-speaking tour guides. Arrival and departure
              airport transfers. Comfortable transportation in an
              air-conditioned, non-smoking coach. City tax.
            </p>
          </div>
          <div className="space-y-3 border rounded-md p-4 ">
            <h1 className=" lg:text-2xl  font-semibold text-xl">Exclusion</h1>
            <p>
              Flight tickets (if option is not selected) Early check-in or late
              check-out charges. Personal expenses and optional excursions
              Entrance fees for Topkapi Palace Museum and Basilica Cistern
              Museum (payable at the site) Tips for guides and drivers Meals not
              specified in the itinerary
            </p>
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
      <Questions title="Tour Packages Questions" service="tour_packages" />
      </div>
    </React.Fragment>
  );
}
