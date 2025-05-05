import SectionDetailsHeading from 'components/ui/page-heading';
import React from 'react';
import MiceGroupCard from 'views/mice-group/card';

const data = [
  {
    id: 1,
    name: 'Travel and Tourism',
    image: '/vip.png',
    desc: "Maxsus tadbirlar va yig'ilishlar uchun joylarni tashkil qilish, restoranlarda joylarni oldindan bron qilish.",
    comment:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
    comment2:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
  },
  {
    id: 2,
    image: '/vip.png',
    name: 'Travel and Tourism',
    desc: "Maxsus tadbirlar va yig'ilishlar uchun joylarni tashkil qilish, restoranlarda joylarni oldindan bron qilish.",
    comment:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
    comment2:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
  },
  {
    id: 3,
    image: '/vip.png',
    name: 'Travel and Tourism',
    desc: "Maxsus tadbirlar va yig'ilishlar uchun joylarni tashkil qilish, restoranlarda joylarni oldindan bron qilish.",
    comment:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
    comment2:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
  },
  {
    id: 4,
    image: '/vip.png',
    name: 'Travel and Tourism',
    desc: "Maxsus tadbirlar va yig'ilishlar uchun joylarni tashkil qilish, restoranlarda joylarni oldindan bron qilish.",
    comment:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
    comment2:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
  },
  {
    id: 5,
    image: '/vip.png',
    name: 'Travel and Tourism',
    desc: "Maxsus tadbirlar va yig'ilishlar uchun joylarni tashkil qilish, restoranlarda joylarni oldindan bron qilish.",
    comment:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
    comment2:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
  },
  {
    id: 6,
    image: '/vip.png',
    name: 'Travel and Tourism',
    desc: "Maxsus tadbirlar va yig'ilishlar uchun joylarni tashkil qilish, restoranlarda joylarni oldindan bron qilish.",
    comment:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
    comment2:
      'Private Jet Charters: Arranging luxury private jet services for seamless travel to and from Dubai.',
  },
];

function page() {
  return (
    <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title='MICE group services'/>
      <div className="space-y-3">
        {data.map((item) => (
          <MiceGroupCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default page;
