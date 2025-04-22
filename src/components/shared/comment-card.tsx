import { RateIcon } from 'components/icons';
import React from 'react';

export default function CommentCard() {
  return (
    <div className="flex items-start bg-primary/10 p-5 rounded-md">
      <div className="min-w-1/4 flex flex-col items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/028d/876f/860b37071cf37a00aa00bf27c1c1982e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gTkvW-owXrd-qfgKatiBO4pnTXDXxgoLSViSml9S3NF-~ntvzdlgng7v0k~oXuRpelPfHaT3qdU93ql4DFXwHUEB4LhNzy~EXePnkE9FEj6GuedHL9COAK73DAOYPxpxn0wI985XACBP-nKUJM1lq79NV2YGPsWWjduZa5KT7BFpUn1mLBO5Tm8R7MHjZy7teZOahSFKhoFVQh23YS6TPl0sKTwHx7EFldKnvuJxBtc7PkahFidF1m0awQ9BT3hA7B6bkadbyfmX545skcYG4UfOEUuUeICvIwEz7QDzuYcrcW5shaW-mxpqCxUbhMoAFTXCAOF7ziskFPomGq0UGQ__"
          alt=""
          width={60}
          height={60}
          className="rounded-full mb-2"
        />
        <h4>Ralph Wilhelm</h4>
      </div>
      <div>
        <div className='flex gap-2 items-center'>
          <p>4</p>
          <RateIcon />
          <RateIcon />
          <RateIcon />
          <RateIcon />
        </div>
        <p>
          This water park is ideal for adventure seekers. The Poseidon's Revenge
          is adrenaline-pumping, and Aquaconda, Zoomerango and Slitherine are
          loads of fun. You can also explore the Lost Chambers Aquarium and swim
          with sharks.
        </p>
      </div>
    </div>
  );
}
