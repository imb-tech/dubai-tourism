import Link from 'next/link';
import Navbar from './navbar';
import Image from 'next/image';
import ServicesButton from './services-button';

export default function Header() {
  return (
    <header className="bg-transparent z-10 relative">
      <div className="container lg:px-0 px-3 py-4 mx-auto flex items-center justify-center gap-[10px] flex-col">
        <div className="flex items-center self-stretch justify-between gap-12">
          <Link href="/" className=" lg:w-40 w-32">
            <Image
              priority
              height={79}
              width={192}
              src={'/logo.png'}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </Link>
          <Navbar />
          <div className="flex flex-col items-start gap-1">
            <a href="tel:+998900002323" className="font-bold text-white">
              {' '}
              +998 90 000-23-23
            </a>
            <a href="#" className="text-sm text-gray-300">
              OAE, Dubai, 12 block, 12 street
            </a>
          </div>
        </div>
        <ServicesButton />
      </div>
    </header>
  );
}
