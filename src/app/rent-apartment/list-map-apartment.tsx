import React, { Fragment } from 'react';
import CarCard from 'components/shared/car-card';

const ListAndMapApartment = () => {
  return (
    <Fragment>
      {'list' === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cars.map((s) => (
            <CarCard key={s.id} {...s} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:order-1 order-2">
            {cars.slice(0, 4).map((s) => (
              <CarCard key={s.id} {...s} />
            ))}
          </div>

          <div className="lg:order-2 order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d321.98712541444945!2d69.23603555442904!3d41.20093632800717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1745214332280!5m2!1suz!2s"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md lg:h-[900px]"
            ></iframe>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ListAndMapApartment;

const cars: Product[] = [
  {
    id: 1,
    name: 'Lambar gambar',
    image:
      'https://s3-alpha-sig.figma.com/img/0f7d/b948/24f139d6e8e95cda732725bf48af5e86?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aw2B8DstoCu7S77CiQ98SaRuThV3jBzo~LYjlGCCOu3IqglsQ-zDVrFBG0DVdrPrpIkn5biwmzyBgaC36SUVxhM5Ey3mDc06f8TKmwOGtCE8i3JUDoxNapJ7JlNEsEmkWR9GytgFkVMtRRStEK9pes2-QMSUbPHOk7wu7honzqLFvzCqNb3gOvwCNMrkV11BvjvyUeVw2Z8W4~DZU8lmfL4Z1yUnnQrVVRBdYKp~r~r9i4zDrZ8VKaFebj4WYoOlJQBroJVNsqYnQ0v-8Q1AkcF47Iq3qKd8J6jPMJC6~bBWAKZ~Nwb9nqYcIIojxtve1xRJl7PZiDuKuBSNpfwOmA__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 350,
    price: 375,
    url: '/rent-apartment/1',
  },
  {
    id: 2,
    name: 'Sunset Cruiser',
    image:
      'https://s3-alpha-sig.figma.com/img/543d/5369/fdf229e6c8f73363083a5ecb593b7b01?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr6WdrCAfhNWDH1Y9P43aPRK-w2iT~HzfimwhU6IwCeGf0pGTGrErS8QjtOfYwuTErYYKI6RLbPCykYOKSarzqvz41QMT8~6HJPKnucwAHI6gU1~fVKyLTVhmw3YQ2mo0PDh59Wu0KHfWY5q7KJHK1i8y6z6bzz5QmOknF5lyExyVdqLne5W-bMDL8ybUAE~PuISFsGJipJIvLAcngVllySaDol71WoccACCUx~2ZXcy0JTZBIAlT1pFekYSzRPArKxiKIqRJxOm6VHs2KNnfwTXt7~OXZIdqy75T1QiqcO55FfM1fsyTZ9luna-Iy6rXs465o3VQ2enBVzF2rie7g__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 400,
    price: 420,
    suffix: 'day',
    url: '/rent-apartment/2',
  },
  {
    id: 3,
    name: 'Urban Thunder',
    image:
      'https://s3-alpha-sig.figma.com/img/25ad/3e81/3c3c731e62949ee48be600d299179abe?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3C8M8XZ-HeBKJLPOuRYrj-568Omh9SHAKVM2QRL7GCA8ZL8ALUqZF5~5kyDC5I4yl9MLwwmr94nULBza6DhxArD0mC9D3tQ80qJTNJeRH1RpLTOzhNEGXAT2p1vFhU1l2oEDy~eUr7nMTUbvQznfDHYwnTdvQHBUUSVa4JVBUEs2M~jopxFCA~Gn~z-zBn4T3DiB0EgejOddJ0UMrTQWiinP2Djgk4JeqIEMmiuwNqVyrnzOnCYo2vQgciPyGAVBYdFHk4fAmQmCfPVd0MXZbdxkK7kLy9DvzJZkHXYSp7s4pYO74sS~Fmb7S3njcF0KMvqHX9vxSQmuLq-RgclEQ__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 370,
    price: 395,
    suffix: 'day',
    url: '/rent-apartment/3',
  },
  {
    id: 4,
    name: 'Silver Streak',
    image:
      'https://s3-alpha-sig.figma.com/img/6766/d07a/4355846de98f8dd83ea1e9f8c8380623?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXxaaQPvHSc2r4lflzMmOq9eDH5cT0aUlmEu8Dg7Kvvoc~f1ZJi~h2FGJg0KmkfReEUXCGDyuiDd9AMJxcyHU5nxlgLWEjw9v9dBTevMlAYJymQ8ndrkaVZSOEtVkLP~Cwz420SNnV08yYw9QX9cEJq50fr~OCXX60gVFnkOGDpBSzAUF-gHUHHGbGXl0mUlX0-5GGauedZTnOYOG~tIagbs2tIQeILH7iIkipeK1xm36Apkbq0pjcq3Rs-8BD4XRsQ-FxpOQZyALz5UClMm19wlBretr2LHqyLg8T0~TbtgUETooerVVFGi6FOtGyGa-f~gU9g6tzCdAO0ACXRxAA__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 390,
    price: 410,
    url: '/rent-apartment/4',
    suffix: 'day',
  },
  {
    id: 5,
    name: 'Lambar gambar',
    image:
      'https://s3-alpha-sig.figma.com/img/0f7d/b948/24f139d6e8e95cda732725bf48af5e86?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aw2B8DstoCu7S77CiQ98SaRuThV3jBzo~LYjlGCCOu3IqglsQ-zDVrFBG0DVdrPrpIkn5biwmzyBgaC36SUVxhM5Ey3mDc06f8TKmwOGtCE8i3JUDoxNapJ7JlNEsEmkWR9GytgFkVMtRRStEK9pes2-QMSUbPHOk7wu7honzqLFvzCqNb3gOvwCNMrkV11BvjvyUeVw2Z8W4~DZU8lmfL4Z1yUnnQrVVRBdYKp~r~r9i4zDrZ8VKaFebj4WYoOlJQBroJVNsqYnQ0v-8Q1AkcF47Iq3qKd8J6jPMJC6~bBWAKZ~Nwb9nqYcIIojxtve1xRJl7PZiDuKuBSNpfwOmA__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 350,
    price: 375,
    url: '/rent-apartment/5',
  },
  {
    id: 6,
    name: 'Sunset Cruiser',
    image:
      'https://s3-alpha-sig.figma.com/img/543d/5369/fdf229e6c8f73363083a5ecb593b7b01?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr6WdrCAfhNWDH1Y9P43aPRK-w2iT~HzfimwhU6IwCeGf0pGTGrErS8QjtOfYwuTErYYKI6RLbPCykYOKSarzqvz41QMT8~6HJPKnucwAHI6gU1~fVKyLTVhmw3YQ2mo0PDh59Wu0KHfWY5q7KJHK1i8y6z6bzz5QmOknF5lyExyVdqLne5W-bMDL8ybUAE~PuISFsGJipJIvLAcngVllySaDol71WoccACCUx~2ZXcy0JTZBIAlT1pFekYSzRPArKxiKIqRJxOm6VHs2KNnfwTXt7~OXZIdqy75T1QiqcO55FfM1fsyTZ9luna-Iy6rXs465o3VQ2enBVzF2rie7g__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 400,
    suffix: 'day',
    price: 420,
    url: '/rent-apartment/6',
  },
  {
    id: 7,
    name: 'Urban Thunder',
    image:
      'https://s3-alpha-sig.figma.com/img/25ad/3e81/3c3c731e62949ee48be600d299179abe?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3C8M8XZ-HeBKJLPOuRYrj-568Omh9SHAKVM2QRL7GCA8ZL8ALUqZF5~5kyDC5I4yl9MLwwmr94nULBza6DhxArD0mC9D3tQ80qJTNJeRH1RpLTOzhNEGXAT2p1vFhU1l2oEDy~eUr7nMTUbvQznfDHYwnTdvQHBUUSVa4JVBUEs2M~jopxFCA~Gn~z-zBn4T3DiB0EgejOddJ0UMrTQWiinP2Djgk4JeqIEMmiuwNqVyrnzOnCYo2vQgciPyGAVBYdFHk4fAmQmCfPVd0MXZbdxkK7kLy9DvzJZkHXYSp7s4pYO74sS~Fmb7S3njcF0KMvqHX9vxSQmuLq-RgclEQ__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 370,
    price: 395,
    url: '/rent-apartment/7',
  },
  {
    id: 8,
    name: 'Silver Streak',
    image:
      'https://s3-alpha-sig.figma.com/img/6766/d07a/4355846de98f8dd83ea1e9f8c8380623?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXxaaQPvHSc2r4lflzMmOq9eDH5cT0aUlmEu8Dg7Kvvoc~f1ZJi~h2FGJg0KmkfReEUXCGDyuiDd9AMJxcyHU5nxlgLWEjw9v9dBTevMlAYJymQ8ndrkaVZSOEtVkLP~Cwz420SNnV08yYw9QX9cEJq50fr~OCXX60gVFnkOGDpBSzAUF-gHUHHGbGXl0mUlX0-5GGauedZTnOYOG~tIagbs2tIQeILH7iIkipeK1xm36Apkbq0pjcq3Rs-8BD4XRsQ-FxpOQZyALz5UClMm19wlBretr2LHqyLg8T0~TbtgUETooerVVFGi6FOtGyGa-f~gU9g6tzCdAO0ACXRxAA__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 390,
    price: 410,
    url: '/rent-apartment/8',
  },
  {
    id: 9,
    name: 'Lambar gambar',
    image:
      'https://s3-alpha-sig.figma.com/img/0f7d/b948/24f139d6e8e95cda732725bf48af5e86?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aw2B8DstoCu7S77CiQ98SaRuThV3jBzo~LYjlGCCOu3IqglsQ-zDVrFBG0DVdrPrpIkn5biwmzyBgaC36SUVxhM5Ey3mDc06f8TKmwOGtCE8i3JUDoxNapJ7JlNEsEmkWR9GytgFkVMtRRStEK9pes2-QMSUbPHOk7wu7honzqLFvzCqNb3gOvwCNMrkV11BvjvyUeVw2Z8W4~DZU8lmfL4Z1yUnnQrVVRBdYKp~r~r9i4zDrZ8VKaFebj4WYoOlJQBroJVNsqYnQ0v-8Q1AkcF47Iq3qKd8J6jPMJC6~bBWAKZ~Nwb9nqYcIIojxtve1xRJl7PZiDuKuBSNpfwOmA__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 350,
    price: 375,
    url: '/rent-apartment/9',
  },
  {
    id: 10,
    name: 'Sunset Cruiser',
    image:
      'https://s3-alpha-sig.figma.com/img/543d/5369/fdf229e6c8f73363083a5ecb593b7b01?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr6WdrCAfhNWDH1Y9P43aPRK-w2iT~HzfimwhU6IwCeGf0pGTGrErS8QjtOfYwuTErYYKI6RLbPCykYOKSarzqvz41QMT8~6HJPKnucwAHI6gU1~fVKyLTVhmw3YQ2mo0PDh59Wu0KHfWY5q7KJHK1i8y6z6bzz5QmOknF5lyExyVdqLne5W-bMDL8ybUAE~PuISFsGJipJIvLAcngVllySaDol71WoccACCUx~2ZXcy0JTZBIAlT1pFekYSzRPArKxiKIqRJxOm6VHs2KNnfwTXt7~OXZIdqy75T1QiqcO55FfM1fsyTZ9luna-Iy6rXs465o3VQ2enBVzF2rie7g__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 400,
    price: 420,
    suffix: 'day',
    url: '/rent-apartment/10',
  },
  {
    id: 11,
    name: 'Urban Thunder',
    image:
      'https://s3-alpha-sig.figma.com/img/25ad/3e81/3c3c731e62949ee48be600d299179abe?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3C8M8XZ-HeBKJLPOuRYrj-568Omh9SHAKVM2QRL7GCA8ZL8ALUqZF5~5kyDC5I4yl9MLwwmr94nULBza6DhxArD0mC9D3tQ80qJTNJeRH1RpLTOzhNEGXAT2p1vFhU1l2oEDy~eUr7nMTUbvQznfDHYwnTdvQHBUUSVa4JVBUEs2M~jopxFCA~Gn~z-zBn4T3DiB0EgejOddJ0UMrTQWiinP2Djgk4JeqIEMmiuwNqVyrnzOnCYo2vQgciPyGAVBYdFHk4fAmQmCfPVd0MXZbdxkK7kLy9DvzJZkHXYSp7s4pYO74sS~Fmb7S3njcF0KMvqHX9vxSQmuLq-RgclEQ__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 370,
    price: 395,
    url: '/rent-apartment/11',
  },
  {
    id: 12,
    name: 'Silver Streak',
    image:
      'https://s3-alpha-sig.figma.com/img/6766/d07a/4355846de98f8dd83ea1e9f8c8380623?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXxaaQPvHSc2r4lflzMmOq9eDH5cT0aUlmEu8Dg7Kvvoc~f1ZJi~h2FGJg0KmkfReEUXCGDyuiDd9AMJxcyHU5nxlgLWEjw9v9dBTevMlAYJymQ8ndrkaVZSOEtVkLP~Cwz420SNnV08yYw9QX9cEJq50fr~OCXX60gVFnkOGDpBSzAUF-gHUHHGbGXl0mUlX0-5GGauedZTnOYOG~tIagbs2tIQeILH7iIkipeK1xm36Apkbq0pjcq3Rs-8BD4XRsQ-FxpOQZyALz5UClMm19wlBretr2LHqyLg8T0~TbtgUETooerVVFGi6FOtGyGa-f~gU9g6tzCdAO0ACXRxAA__',
    location: 'Business Bay, 12 A',
    sale: true,
    areaSqFt: 16123,
    beds: 2,
    baths: 1,
    discount: 390,
    price: 410,
    url: '/rent-apartment/12',
  },
];
