import { NotRateIcon, RateIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import React, { useState } from 'react';

export default function WriteComment() {
  const [state, setState] = useState<number>(-1);

  const handleClick = (i: number) => {
    setState(i);
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <p>Sizning reytingingiz:</p>
        <div className="flex items-center gap-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span
                className={state >= i ? 'text-[#FAAD14]' : ''}
                key={i}
                onClick={() => {
                  handleClick(i);
                }}
              >
                <NotRateIcon bg={state >= i ? 'text-[#FAAD14]' : ''} />
              </span>
            ))}
        </div>
      </div>
      <fieldset className="flex flex-col mt-3">
        <label htmlFor="comment">Izoh</label>
        <textarea
          id="comment"
          placeholder="Sizning izohingiz"
          rows={3}
          className="bg-secondary rounded-md ring-0 focus:ring-0 outline-none py-1 px-2 placeholder:text-black/20"
        />
      </fieldset>

      <Button className="w-full mt-2">Izoh qoldirish</Button>
    </div>
  );
}
