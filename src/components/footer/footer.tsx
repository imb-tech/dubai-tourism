import { FaceBookIcon, InstagramIcon, TelegramIcon } from 'components/icons';
import Link from 'next/link';

const data = [
  {
    id: 1,
    title: 'Information',
    children: [
      {
        id: 1,
        title: 'About the company',
        href: '/',
      },
      {
        id: 2,
        title: 'Contact information',
        href: '/',
      },
      {
        id: 3,
        title: 'User Agreement',
        href: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Services',
    children: [
      {
        id: 1,
        title: 'Tours and Activities',
        href: '/',
      },
      {
        id: 2,
        title: 'Transfers',
        href: '/',
      },
      {
        id: 3,
        title: 'MICE Groups',
        href: '/',
      },
      {
        id: 4,
        title: 'Real Estate',
        href: '/',
      },
      {
        id: 5,
        title: 'VIP Concierge',
        href: '/',
      },
      {
        id: 6,
        title: 'Tour Packages',
        href: '/',
      },
      {
        id: 7,
        title: 'Renta car',
        href: '/',
      },
      {
        id: 8,
        title: 'Shopping',
        href: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Vip services',
    children: [
      {
        id: 1,
        title: 'Yatch rental',
        href: '/',
      },
      {
        id: 2,
        title: 'Private restaurant',
        href: '/',
      },
      {
        id: 3,
        title: 'Transver service',
        href: '/',
      },
      {
        id: 4,
        title: 'Helicopter tour',
        href: '/',
      },
      {
        id: 5,
        title: 'Safari tour',
        href: '/',
      },
    ],
  },
];

const socialData = [
  {
    id: 1,
    image: InstagramIcon,
    name: 'instagram',
    link: '',
  },
  {
    id: 2,
    image: TelegramIcon,
    name: 'telegram',
    link: '',
  },
  {
    id: 3,
    image: FaceBookIcon,
    name: 'facebook',
    link: '',
  },
];
export default function Footer() {
  return (
    <footer className="pb-6 bg-[#F5F8FC] lg:pt-14 pt-6">
      <div className="container mx-auto lg:px-0 px-3">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
          {data.map((item) => (
            <div key={item.id} className='flex flex-col sm:items-start items-center mb-5 sm:mb-0 sm:justify-start justify-center'>
              <h1 className="text-[24px] text-black lg:mb-8 mb-5 ">{item.title}</h1>
              <ul className="inline-flex flex-col items-center sm:items-start gap-4">
                {item.children.map((el) => (
                  <li key={el.id} className="text-[#727474]">
                    <Link href={el.href}>{el.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className=' mb-5 sm:mb-0 flex flex-col justify-center sm:justify-start items-center sm:items-start'>
            <h1 className="text-[24px] text-black sm:mb-8 mb-5">Contacts </h1>
            <ul className="inline-flex flex-col items-start gap-4">
              <li className="text-[#727474] flex items-center gap-2 ">
                <span>Phone:</span>
                <Link href={'tel:+998712007002'}>+998 (71) 200-70-02</Link>
              </li>
              <li className="text-[#727474]">
                <Link href={'/'}>Tashkent, ul. Coratosh, 106</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:inline-flex flex justify-center  mt-3 sm:items-start gap-6 ">
          {socialData?.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="bg-[#D1E4FD] text-primary p-2 rounded-full"
            >
              <item.image />
            </Link>
          ))}
        </div>
        <div className="w-full border border-[#EBEBEB] my-8"></div>
        <p className="text-[#727474] sm:text-start text-center">
          © 2025 M Tours. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
