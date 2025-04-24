import { NotRateIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import React from 'react';

export default function WriteComment() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <p>Sizning reytingingiz:</p>
        <div className="flex items-center gap-2">
          <NotRateIcon />
          <NotRateIcon />
          <NotRateIcon />
          <NotRateIcon />
          <NotRateIcon />
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
