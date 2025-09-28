'use client';
import Image from 'next/image';
import lightImage from '../../public/error/light-404.png';
import Link from 'next/link';

import { Button } from 'components/ui/button';
const ErrorBlock = () => {
  return (
    <div className="min-h-screen  overflow-y-auto flex justify-center items-center p-10">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[740px]">
          <Image
            src={lightImage}
            alt="error image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-16 text-center">
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-default-900">
          Oops! Page not found
          </div>
          <div className="mt-3 text-default-600 text-sm md:text-base">
           The page you are looking for may have been deleted, renamed, or temporarily unavailable.
          </div>
          <Link href={'/'}>
            <Button className="mt-9  md:min-w-[300px]" size="lg">
             Go to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorBlock;
