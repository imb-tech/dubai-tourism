import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';
import { fetchData } from 'lib/fetchData';
import { POPULAR_QUESTIONS } from 'constants/api-endpoints';

type Props = {
  title: string;
  service: string;
};
async function Questions({ title = '', service }: Props) {
  const questions = await fetchData<ServicesData[]>(POPULAR_QUESTIONS, {
    params: { service },
  });

  const parentTitle: { [key: string]: string } = {
    real: 'Tours and activities',
    transfers: 'Transfers',
    mice_services: 'MICE Groups',
    apartments: 'Real Estate',
    concierges: 'VIP Concierge',
    tour: 'Tour Packages',
    cars: 'Rent a car',
    shopping: 'Shopping',
  };

  return (
    <div className=" mb-12">
      <h1 className="md:text-3xl text-2xl my-5 font-semibold">{title}</h1>
      <Accordion
        type="single"
        collapsible
        defaultValue="0"
        className="grid grid-cols-1 gap-2 items-start"
      >
        {questions?.map((item, index) => (
          <AccordionItem
            className="w-full bg-[#F5F8FC] border-none px-4 rounded-lg"
            key={index}
            value={index.toString()}
          >
            <AccordionTrigger className="font-semibold text-lg lg:text-xl">
              {parentTitle[item.service]}
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="grid gap-2 mt-3">
                {item?.questions.map((el, subIndex) => (
                  <AccordionItem
                    key={subIndex}
                    value={`sub-${index}-${subIndex}`}
                    className="bg-white border-none rounded-md px-4"
                  >
                    <AccordionTrigger className="text-base font-medium">
                      {el.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600">
                      {el.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Questions;
