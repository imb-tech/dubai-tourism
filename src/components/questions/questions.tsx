import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';


type Props = {
  title: string;
  parentData: string[];
  childData: string[];
};

function Questions({ title ="", parentData=[], childData=[] }: Props) {
  return (
    <div className="container mx-auto lg:px-0 px-3 mb-12">
      <h1 className="md:text-3xl text-2xl my-5 font-semibold">{title}</h1>
      <Accordion
        type="single"
        collapsible
        defaultValue="0"
        className="grid grid-cols-1 gap-2 items-start"
      >
        {parentData.map((item, index) => (
          <AccordionItem
            className="w-full bg-[#F5F8FC] border-none px-4 rounded-lg"
            key={index}
            value={index.toString()}
          >
            <AccordionTrigger className="font-semibold text-lg lg:text-xl">
              {item}
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="grid gap-2 mt-3">
                {childData.map((subItem, subIndex) => (
                  <AccordionItem
                    key={subIndex}
                    value={`sub-${index}-${subIndex}`}
                    className="bg-white border-none rounded-md px-4"
                  >
                    <AccordionTrigger className="text-base font-medium">
                      {subItem}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600">
                      This is the answer for {subItem.toLowerCase()} inside{' '}
                      {item}.
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
