import Image from 'next/image';
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
    image: '/social-icons/instagram.png',
    name: 'instagram',
    link: '',
  },
  {
    id: 2,
    image: '/social-icons/telegram.png',
    name: 'telegram',
    link: '',
  },
  {
    id: 3,
    image: '/social-icons/face.png',
    name: 'facebook',
    link: '',
  },
];
export default function Footer() {
  return (
    <footer className="pb-6 bg-[#F5F5F5] pt-14">
      <div className="container mx-auto lg:px-0 px-3">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
          {data.map((item) => (
            <div key={item.id}>
              <h1 className="text-[24px] text-black mb-8 ">{item.title}</h1>
              <ul className="inline-flex flex-col items-start gap-4">
                {item.children.map((el) => (
                  <li key={el.id} className="text-[#727474]">
                    <Link href={el.href}>{el.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h1 className="text-[24px] text-black mb-8">Contacts </h1>
            <ul className="inline-flex flex-col items-start gap-4">
              <li className="text-[#727474] flex items-center gap-2">
                <span>Phone:</span>
                <Link href={'tel:+998712007002'}>+998 (71) 200-70-02</Link>
              </li>
              <li className="text-[#727474]">
                <Link href={'/'}>Tashkent, ul. Coratosh, 106</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="inline-flex items-start gap-6">
          {socialData?.map((item) => (
            <Link key={item.id} href={item.link}>
              <Image
                priority
                width={40}
                height={40}
                alt={item.name}
                src={item.image}
              />
            </Link>
          ))}
        </div>
        <div className="w-full border border-[#EBEBEB] my-8"></div>
        <p className="text-[#727474]">
          © 2025 M Tours. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
