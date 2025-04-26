import { cn } from 'lib/utils';
import Link from 'next/link';
import React from 'react';
import ShopppingImages from 'views/shopping/shopping-images';
import ShoppingCard from 'views/shopping/shopping-card';


export default function ShoppingId() {
  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <h1 className="text-center text-4xl my-8">Ring</h1>
        <ShopppingImages />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl p-6 flex flex-col items-start gap-4 self-stretch bg-white  border border-[#E1E1E1]',
                index === 0 ? 'col-span-2' : 'col-span-1'
              )}
            >
              <h1 className="text-3xl font-semibold">{item.title}</h1>
              <div className="flex items-center gap-3">
                {item.tag ? (
                  <Link
                    href={'#'}
                    className="rounded-2xl bg-amber-100 text-primary text-xs py-1 px-2"
                  >
                    #{item.tag}
                  </Link>
                ) : null}
                {item.sold ? (
                  <div className="p-2 text-white text-xs font-medium rounded-sm bg-[#FF7043]">
                    {item.sold}
                  </div>
                ) : null}
              </div>
              <p className="text-[#121212] text-[16px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#F5F8FC] py-10 my-12'>
        <div className="container mx-auto lg:px-0 px-3">
          <h1 className="font-semibold lg:text-3xl  text-2xl">See more</h1>
          <div className="grid lg:grid-cols-4 mt-5 mb-8 md:grid-cols-3 grid-cols-3 gap-5">
            {dataShoppping.slice(0,4).map((item) => (
              <ShoppingCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const data = [
  {
    id: 1,
    title: 'The Allure of Tanzanite: A Unique Gemstone',
    description:
      'Found in only one place on earth, Tanzanite is a relatively recent discovery, first unearthed in 1967 in Tanzania. Named by Tiffany & Co, this blue-violet variety of zoisite quickly gained popularity for its vivid color, high clarity, and potential for large cut stones. Tanzanite crystals display different colors depending on the viewing direction, allowing cutters to fashion gems with a range of colors from violetish blue to bluish-violet, depending on the desired weight retention from the rough stone.',
    sold: 'Best seller',
    tag: 'weddingring',
  },
  {
    id: 2,
    title: 'Chakras Aligned with Tanzanite',
    description:
      'Found in only one place on earth, Tanzanite is a relatively recent discovery, first unearthed in 1967 in Tanzania. Named by Tiffany & Co, this blue-violet variety of zoisite quickly gained popularity for its vivid color, high clarity, and potential for large cut stones. Tanzanite crystals display different colors depending on the viewing direction, allowing cutters to fashion gems with a range of colors from violetish blue to bluish-violet, depending on the desired weight retention from the rough stone.',
  },
  {
    id: 3,
    title: 'Benefits of Tanzanite Gemstone',
    description:
      'Found in only one place on earth, Tanzanite is a relatively recent discovery, first unearthed in 1967 in Tanzania. Named by Tiffany & Co, this blue-violet variety of zoisite quickly gained popularity for its vivid color, high clarity, and potential for large cut stones. Tanzanite crystals display different colors depending on the viewing direction, allowing cutters to fashion gems with a range of colors from violetish blue to bluish-violet, depending on the desired weight retention from the rough stone.',
  },
  {
    id: 4,
    title: 'Spiritual Benefits',
    description:
      'Found in only one place on earth, Tanzanite is a relatively recent discovery, first unearthed in 1967 in Tanzania. Named by Tiffany & Co, this blue-violet variety of zoisite quickly gained popularity for its vivid color, high clarity, and potential for large cut stones. Tanzanite crystals display different colors depending on the viewing direction, allowing cutters to fashion gems with a range of colors from violetish blue to bluish-violet, depending on the desired weight retention from the rough stone.',
  },
  {
    id: 5,
    title: 'Discover Tanzanite at NG Emirates Jewellery',
    description:
      'Found in only one place on earth, Tanzanite is a relatively recent discovery, first unearthed in 1967 in Tanzania. Named by Tiffany & Co, this blue-violet variety of zoisite quickly gained popularity for its vivid color, high clarity, and potential for large cut stones. Tanzanite crystals display different colors depending on the viewing direction, allowing cutters to fashion gems with a range of colors from violetish blue to bluish-violet, depending on the desired weight retention from the rough stone.',
  },
];

const dataShoppping = [
  {
    id: 1,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 2,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 3,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 4,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 5,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 6,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 7,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 8,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 9,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 10,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 11,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
  {
    id: 12,
    name: 'Eternity Engraved Diamond Huggies',
    tag: 'weddingring',
    sold: 'Best seller',
    image: '/uzuk.png',
  },
];
