import CarFeatures from 'views/rent/car-features';
import CarInfo from 'views/rent/car-info';
import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import { childData } from 'services/data';
import CarCard from 'components/shared/car-card';

const images = [
  {
    id: 1,
    url: 'https://s3-alpha-sig.figma.com/img/e3ac/2e9d/74a9eec1b28c60891cb0e2ee8102fdab?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oDq4WO5fPw3Lzl3cctqgbgB4cOUPjLMK~CUNBf~r-wDlc~q1FUntMPAtFkIPT89g9TtfU6P4z5Aa1wzj-pL8jARp6FxcFnFkN9L7uwjpUazvTrDMYDrF4fvyYHCDBZqIjEZfOYdtjCqvp261q1UoDYdV2c9-Ke50f7pfEPDBk3BSu-E0Mi1brSOTw92ES2CtCvRuFnltQi-ER~W0pD8ePeqdsldtzrts01ZNshnVhMv~3flzUKfluQV~dS3W8XVx2VNEj3nzulkI2adk9jESRa~6Uk8g9uCzpTu9ngJl-y75vw9DfhFxqJeRTd4TtgHxjmWApGmRHIA7wHiEgARw8Q__',
  },
  {
    id: 2,
    url: 'https://s3-alpha-sig.figma.com/img/4f1c/1d82/d42557eba54a3467cb9f0fb487c1210c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oGk-5QDQ93kBxDmgcRl3YMILfEyxTSkfg3G~-rlS3gpUd5n8nZW4uC7Q9DQ2IYeWp6y85LGPC8wGNsGlTBzGSzMYAWEfsgIoR0FMGoyf5DTzDbb8e1YoNYHe2I-XvBabjSAiZjXi8EWxSyiIq67DdlTEcr1Gf1dOkYIWCp3x9SKvUCxis5C058~eQ~YEjAZz7eaau49qvCLqtijtOFa~zQJdeSPI2CVt1oO7Fi7~DFuc2Yq-fvqfBrdzJuAkIN5gY9TwQlCUZWm7l~NcX2UrS2PriFSEfJjXHHpyPttFn3Rr1IjXmqATOOUGyoqoDj4lWD2~kdhonCiYeU36IbpP5g__',
  },
  {
    id: 3,
    url: 'https://s3-alpha-sig.figma.com/img/6e71/0bfa/8b9e0e7fe31cc2441eed08354d363a35?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CV4iFGPg7dNjnHR3~53He-UsUx9ibGTBLdqO0gafjHJC2F-FQsIoN68NSHxaFUWs3rkRMRyUOGuJDD4FcDiD3AglTnWFlkJWiavG-IF3osCCD8Lfb7aKdPGuAMkfBrrlB3tF2JZA2ao3VHXUQAymq0CTUIZjJW0DpWA~dvOvaeOkVxDyUHya1ARw0HdIWQ08zPwXfA7oePYHVQOv5W4fvfpDHKF8Q6nhWWxylXHJ2f9aZ12EOcp96ux1wgRviZRdua2ErqYZhTmnG0PeAVeo06EX-hmdVrv2FLsLHCqe7boMSmIKUcLco6y-YdLWKgw3mKUWFOGr7YpWYepYQ~gdUA__',
  },
  {
    id: 4,
    url: 'https://s3-alpha-sig.figma.com/img/70ab/841e/f8dbf9a504d1fc7f9b49d0943c18fb3f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KqmtsbGefmU-YMvVR2vzwg83Ay0pfRWTt8F9qkSdpMEF4EtjEPLhgr8QakFfEH-CQ43V~255QJ5DRD7IWT8p1DUr5Ee8ms4jute6~PhF3gPqNWuDrUtc-6Y6H2lQTkSNSYySAdgzpfhfUJsiKs0sI2Vprkmt6bCs~iJXoKXypvUyN1oa4G9P21fkDudGQCRfSkvcaQBiVSIIild1dEO-Nr0D1uE3SWjbvS~Zjx0wUB8qThJoOKgmoL-yd~EZqnDy4B2m6M8ksw3YkeGu5nOFEv~0s2gGbYxtvKB0dq1q-0~6oxwjIn5h9fGCgQJ5K8ulZohnGH~z3l3a2CPUAHxKrg__',
  },
  {
    id: 5,
    url: 'https://s3-alpha-sig.figma.com/img/099a/c60e/3ce715eca4255884cfca87493fc3a60f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HJgX8YZsxzyciYd-KbT4dvLy2OKcPV~o5l91tu4BLZ2YAhw0~HcFU8WOspr1URhfnEFUdw3uEyxVFkRt1aFRua3OeMTYQM4x5AwIH9hNRx0tg519LKhMFiGm0U4VzYlAUrxPSsgVSS4zKQyN4e0j4yjZiMKV~jcylvk6V36C4wDHunr1xi01i66plISgOq-lkzjn0snyjFU9SANTMiQjsRgTcOgJ~nirXSNFg0UcBXWvs43P53VxAfV73sI2ZXaNDIJnrekJLd8pXdAdbhR09~CnM~StoPQXr1-yq7X74Cju5g~z~tnmIQJsolHHDNZDYvvW9zxS0RJX3Gu3tQ~2eg__',
  },
];

const cars: Product[] = [
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

export default function RentId() {
  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <h1 className="text-center lg:text-4xl my-8 text-2xl">
          Dubayda avtomobil ijarasi
        </h1>
        <DrawerImagesView images={images} />
        <CarInfo />
        <CarFeatures />
        <div className="space-y-4 border rounded-md p-4 mt-5 mb-12">
          <h1 className=" lg:text-3xl  font-semibold text-2xl">
            Rent Ferrari SF90 in Dubai
          </h1>
          <div>
            <div className="flex items-center gap-6">
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
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto lg:px-0 px-3">
          <h1 className="lg:text-3xl my-5 text-2xl font-semibold">
            See more
          </h1>
          <div className="grid grid-cols-1 lg:px-0 px-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cars.map((s) => (
              <CarCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </div>
      <Questions
        title="Frequently asked questions"
        parentData={['Renta a Car Questions']}
        childData={childData}
      />
    </React.Fragment>
  );
}
