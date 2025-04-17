import { Button } from 'components/ui/button';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div>
    <div
      className="container mx-auto p-10 mb-6  h-[400px] rounded-2xl w-full bg-cover bg-center"
      style={{
        backgroundImage: `url("/images/contact-info.png")`,
      }}
    >
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h1 className="font-semibold text-3xl text-white">Savolingiz bormi?</h1>
        <p className="text-white">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio matt
        </p>
        <Link
          href={'tel:+998901682272'}
          className="font-semibold text-3xl text-white"
        >
          +998 (90) 168-22-72{' '}
        </Link>
        <div>
          <Button className="text-[#FF7043] bg-white hover:bg-white px-24 cursor-pointer">
            Bepul maslahat
          </Button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Contact;
