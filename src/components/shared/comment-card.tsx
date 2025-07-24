import { RateIcon, User2Icon } from 'components/icons';
import React from 'react';

type Props = {
  item: { text: string; rating: number; full_name: string };
};

export default function CommentCard({ item }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center md:items-start bg-[#F5F8FC] p-5 rounded-md">
      <div className="min-w-1/4 flex flex-col gap-2 items-center mb-3">
        <span className="bg-primary/20 rounded-full  p-2 text-primary">
          <User2Icon size={40} />
        </span>
        <h4 className='text-center'>{item.full_name}</h4>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <p>{item.rating}</p>
          {Array.from({ length: item.rating }).map((_, index) => (
            <RateIcon key={index} />
          ))}
        </div>
        <p>{item.text}</p>
      </div>
    </div>
  );
}
