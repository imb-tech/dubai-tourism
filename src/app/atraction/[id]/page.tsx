import WtpComments from 'views/atraction/atraction-comments';
import WtpFeatures from 'views/atraction/atraction-features';
import WtpForm from 'views/atraction/atraction-form';
import WtpMap from 'views/atraction/atraction-map';
import React from 'react';
import { SliderComponents } from 'components/slider/page';
import { childData, images } from 'services/data';
import Questions from 'components/questions/questions';
import CarCard from 'components/shared/car-card';
import { CustomCarousel } from 'components/custom/carousel';
import SectionDetailsHeading from 'components/ui/page-heading';

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
    url: '/atraction/1',
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
    url: '/atraction/2',
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
    url: '/atraction/3',
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
    url: '/atraction/4',
  },
];

export default function wtp() {
  const slides = cars.map((s) => <CarCard key={s.id} {...s} />);

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="Atlantis Aquaventure Waterpark" />
        <SliderComponents images={images} />
        <WtpForm />
        <WtpMap />
        <WtpFeatures />
        <div className="space-y-4 border rounded-md p-4 mt-5 mb-12">
          <h1 className=" lg:text-3xl  font-semibold text-2xl">About</h1>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <p>
                A visit to Atlantis Aquaventure in the heart of the imposing
                Atlantis, The Palm Resort promises you experiences beyond any
                waterpark you’ve ever been to. From heart-racing slides to the
                lazy river and private beach relaxations, this premier water
                park in Dubai has everything to make your holiday both thrilling
                and memorable.
              </p>
              <p>
                Fantastic Water Experiences for Every Preference Atlantis
                Aquaventure is packed to brim with attractions and experiences
                ideal for adrenaline-seekers, marine enthusiasts, families, and
                little ones alike. Besides endless access to its rides, slides
                and Shark lagoon experiences, you can learn about marine biology
                and enjoy complimentary entry to the resort’s top attractions
                such as the 700-meter-long Adventure Beach and Surf's Up – the
                ultimate wave rider attraction.
              </p>
            </div>
          </div>
        </div>
        <WtpComments />
      </div>

      <div className="bg-[#F5F8FC] lg:py-10 py-4 my-5">
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
        <Questions
          title="Frequently asked questions"
          parentData={['Atraction Questions']}
          childData={childData}
        />
      </div>
    </React.Fragment>
  );
}
