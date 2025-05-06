'use client';
import React from 'react';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import FeaturesCard from 'views/mice-group/features-card';
import BookingForm from 'views/mice-group/bron-form';
import { SliderComponents } from 'components/slider/page';

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

export default function RentId() {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Personal concierge" />
      <div className="space-y-5  mb-12">
        <div className="hidden lg:block">
          <DrawerImagesView images={images} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={images} showCout={true} />
        </div>
        <div className="space-y-4 border rounded-md p-4  bg-[#F5F8FC]">
          <h1 className=" lg:text-2xl  font-semibold text-xl">
            About Personal concierge
          </h1>
          <div className="flex flex-col   gap-6">
            <p>
              Experience the convenience and luxury of personalized concierge
              services with VIP Platinum. Let us elevate your lifestyle and
              handle the details so you can enjoy life to the fullest. Contact
              us today to discuss how we can tailor our services to suit your
              needs.
            </p>
          </div>
        </div>
        <div className="space-y-4 border rounded-md p-4  ">
          <h1 className=" lg:text-2xl  font-semibold text-xl">Features</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <FeaturesCard key={index} />
            ))}
          </div>
        </div>
        <div className="space-y-4 border rounded-md p-4  mb-12 ">
          <h1 className=" lg:text-2xl  font-semibold text-xl">
            Booking information
          </h1>
          <BookingForm />
        </div>
      </div>
      <Questions title="MICE Group  questions" service="mice_services" />
    </div>
  );
}
