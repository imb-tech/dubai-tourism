import { RectangleCheckIcon } from 'components/icons';
import React from 'react';

export default function WtpFeatures() {
  return (
    <div className="p-6 rounded-lg border mt-5">
      <h2 className="md:text-3xl text-2xl font-semibold m-0">Features</h2>
      <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 mt-3">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <li
              className="flex flex-col items-center gap-1 bg-primary/10 font-semibold p-3 py-5 rounded-md"
              key={i}
            >
              <div className="text-primary">
                <RectangleCheckIcon size={36} />
              </div>
              <span className="text-black/60 font-light text-lg text-center">
                It’s one of the region’s largest water parks.
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
