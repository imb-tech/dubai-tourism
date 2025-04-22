import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const data = [
  'Когда начинается бронирование отдыха в Турции на октябрь 2023?',
  'Здравствуйте, есть необходимость отменить тур на двоих в Турцию. Неужели больше 50% будет удержание от оплаты за тур?',
  'Здравствуйте. Как проверить, факт купленного тура через онлайн сайт 1001 тур',
  'Когда начинается бронирование отдыха в Турции на октябрь 2023?',
  'Когда начинается бронирование отдыха в Турции на октябрь 2023?',
  'Здравствуйте, есть необходимость отменить тур на двоих в Турцию. Неужели больше 50% будет удержание от оплаты за тур?',
];

function Questions() {
  return (
    <div className="container mx-auto lg:px-0 px-3 my-12">
      <h1 className="text-3xl my-5 font-semibold">Ko’p beriladigan savollar</h1>
      <Accordion
        type="single"
        collapsible
        className="grid md:grid-cols-2 grid-cols-1 gap-4 items-start"
      >
        {data.map((item, index) => (
          <AccordionItem className='w-full min-h-[85px]  px-5 rounded-2xl  ' key={index} value={index.toString()}>
            <AccordionTrigger >{item}</AccordionTrigger>
            <AccordionContent>
              Здравствуйте, есть необходимость отменить тур на двоих в Турцию.
              Неужели больше 50% будет удержание от оплаты за тур? Здравствуйте,
              есть необходимость отменить тур на двоих в Турцию. Неужели больше
              50% будет удержание от оплаты за тур? Здравствуйте, есть
              необходимость отменить тур на двоих в Турцию. Неужели больше 50%
              будет удержание от оплаты за тур?
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Questions;
