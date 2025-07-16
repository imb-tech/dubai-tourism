'use client';
import { PriceVIpIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';
import React from 'react';



function TourFnfo() {
  const { openModal } = useModal('tour_packages');
  return (
    <div className="w-full">
      <div className="space-y-4 border rounded-md p-4 mt-5 mb-12 bg-[#F5F8FC]">
        <h1 className=" lg:text-3xl  font-semibold text-2xl">Overview</h1>
        <div>
          <div className="flex flex-col   gap-6">
            <p>
              The Ferrari SF90 boasts a turbocharged 3.9-liter V8 engine
              Turkiye, a land where East meets West, is a captivating
              destination blending ancient heritage with modern allure.  From
              the iconic landmarks of Istanbul and the fairy-tale landscapes of
              Cappadocia to the pristine beaches of the Aegean and the rich
              culinary traditions, Türkiye offers a journey like no other. 
              Explore centuries-old architecture, bustling bazaars, and vibrant
              cities that showcase a seamless fusion of history, culture, and
              natural beauty.  Whether you're seeking adventure, relaxation, or
              a cultural escape, Turkiye promises unforgettable experiences at
              every turn.
            </p>
            <div className="space-y-3">
              <h1 className=" lg:text-2xl  font-semibold text-xl">Price</h1>
              <div className="bg-white p-2 rounded-md flex items-center gap-3">
                <div className="rounded-full p-3 bg-[#F5F8FC] inline-block">
                  <span className="text-primary">
                    {' '}
                    <PriceVIpIcon />
                  </span>
                </div>
                <div>
                  <del className="text-gray-400 text-sm">Price: 2 000 AED</del>
                  <h1 className="font-semibold text-lg">AED 450 /hr</h1>
                </div>
              </div>
              <Button onClick={openModal} className="w-full mt-3">Leave a request</Button>
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
            airport transfers. Comfortable transportation in an air-conditioned,
            non-smoking coach. City tax.
          </p>
        </div>
        <div className="space-y-3 border rounded-md p-4 ">
          <h1 className=" lg:text-2xl  font-semibold text-xl">Exclusion</h1>
          <p>
            Flight tickets (if option is not selected) Early check-in or late
            check-out charges. Personal expenses and optional excursions
            Entrance fees for Topkapi Palace Museum and Basilica Cistern Museum
            (payable at the site) Tips for guides and drivers Meals not
            specified in the itinerary
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourFnfo;
