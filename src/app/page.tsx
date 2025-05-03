import HeroPages from 'views/home/hero';
import Products from 'views/home/products';
import Services from 'views/home/services';
import Tours from 'views/home/tours';
import React from 'react';
import Questions from 'components/questions/questions';
import { childData, parentData } from 'services/data';

export default function Home() {
  return (
    <div className="space-y-12 mb-12">
      <HeroPages />
      <Services />
      <Products
        autoplayDelay={1500}
        data={products}
        title="Best Seller"
        className="bg-[#F5F8FC] py-14"
      />
      <Products autoplayDelay={1500} data={cars} title="Atraction tickets" />
      <Products
        autoplayDelay={2000}
        data={products}
        title="Rent a car"
        className="bg-[#F5F8FC] py-14"
      />
      <Products autoplayDelay={1800} data={cars} title="Shopping" />
      <Tours />
      <div className="container mx-auto lg:px-0 px-3">
        <Questions
          title="Frequently asked questions"
          parentData={parentData}
          childData={childData}
        />
      </div>
    </div>
  );
}

const products: Product[] = [
  {
    id: 1,
    name: 'Lambar gambar',
    image:
      'https://s3-alpha-sig.figma.com/img/0f7d/b948/24f139d6e8e95cda732725bf48af5e86?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aw2B8DstoCu7S77CiQ98SaRuThV3jBzo~LYjlGCCOu3IqglsQ-zDVrFBG0DVdrPrpIkn5biwmzyBgaC36SUVxhM5Ey3mDc06f8TKmwOGtCE8i3JUDoxNapJ7JlNEsEmkWR9GytgFkVMtRRStEK9pes2-QMSUbPHOk7wu7honzqLFvzCqNb3gOvwCNMrkV11BvjvyUeVw2Z8W4~DZU8lmfL4Z1yUnnQrVVRBdYKp~r~r9i4zDrZ8VKaFebj4WYoOlJQBroJVNsqYnQ0v-8Q1AkcF47Iq3qKd8J6jPMJC6~bBWAKZ~Nwb9nqYcIIojxtve1xRJl7PZiDuKuBSNpfwOmA__',
    distance: 260,
    suffix: 'day',
    horsepower: 600,
    discount: 350,
    price: 375,
    url: '/rent/1',
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'Sunset Cruiser',
    image:
      'https://s3-alpha-sig.figma.com/img/543d/5369/fdf229e6c8f73363083a5ecb593b7b01?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr6WdrCAfhNWDH1Y9P43aPRK-w2iT~HzfimwhU6IwCeGf0pGTGrErS8QjtOfYwuTErYYKI6RLbPCykYOKSarzqvz41QMT8~6HJPKnucwAHI6gU1~fVKyLTVhmw3YQ2mo0PDh59Wu0KHfWY5q7KJHK1i8y6z6bzz5QmOknF5lyExyVdqLne5W-bMDL8ybUAE~PuISFsGJipJIvLAcngVllySaDol71WoccACCUx~2ZXcy0JTZBIAlT1pFekYSzRPArKxiKIqRJxOm6VHs2KNnfwTXt7~OXZIdqy75T1QiqcO55FfM1fsyTZ9luna-Iy6rXs465o3VQ2enBVzF2rie7g__',
    distance: 300,
    horsepower: 550,
    transmission: 'Automatic',
    discount: 400,
    price: 420,
    suffix: 'day',
    url: '/rent/2',
  },
  {
    id: 3,
    name: 'Urban Thunder',
    image:
      'https://s3-alpha-sig.figma.com/img/25ad/3e81/3c3c731e62949ee48be600d299179abe?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3C8M8XZ-HeBKJLPOuRYrj-568Omh9SHAKVM2QRL7GCA8ZL8ALUqZF5~5kyDC5I4yl9MLwwmr94nULBza6DhxArD0mC9D3tQ80qJTNJeRH1RpLTOzhNEGXAT2p1vFhU1l2oEDy~eUr7nMTUbvQznfDHYwnTdvQHBUUSVa4JVBUEs2M~jopxFCA~Gn~z-zBn4T3DiB0EgejOddJ0UMrTQWiinP2Djgk4JeqIEMmiuwNqVyrnzOnCYo2vQgciPyGAVBYdFHk4fAmQmCfPVd0MXZbdxkK7kLy9DvzJZkHXYSp7s4pYO74sS~Fmb7S3njcF0KMvqHX9vxSQmuLq-RgclEQ__',
    distance: 280,
    horsepower: 620,
    transmission: 'Manual',
    discount: 370,
    price: 395,
    suffix: 'day',
    url: '/rent/3',
  },
  {
    id: 4,
    name: 'Silver Streak',
    image:
      'https://s3-alpha-sig.figma.com/img/6766/d07a/4355846de98f8dd83ea1e9f8c8380623?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXxaaQPvHSc2r4lflzMmOq9eDH5cT0aUlmEu8Dg7Kvvoc~f1ZJi~h2FGJg0KmkfReEUXCGDyuiDd9AMJxcyHU5nxlgLWEjw9v9dBTevMlAYJymQ8ndrkaVZSOEtVkLP~Cwz420SNnV08yYw9QX9cEJq50fr~OCXX60gVFnkOGDpBSzAUF-gHUHHGbGXl0mUlX0-5GGauedZTnOYOG~tIagbs2tIQeILH7iIkipeK1xm36Apkbq0pjcq3Rs-8BD4XRsQ-FxpOQZyALz5UClMm19wlBretr2LHqyLg8T0~TbtgUETooerVVFGi6FOtGyGa-f~gU9g6tzCdAO0ACXRxAA__',
    distance: 250,
    horsepower: 580,
    transmission: 'Automatic',
    discount: 390,
    price: 410,
    url: '/rent/4',
    suffix: 'day',
  },
];

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
