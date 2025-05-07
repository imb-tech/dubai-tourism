import { CustomCarousel } from 'components/custom/carousel';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { SHOPPING_GOLDS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import { cn } from 'lib/utils';
import Link from 'next/link';
import React from 'react';
import ShoppingCard from 'views/shopping/shopping-card';

export type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ShoppingId({ params, searchParams }: PageProps) {
  console.log(searchParams);

  const { id } = params;

  const shopping = await fetchData<Shopping>(`${SHOPPING_GOLDS}/${id}`);

  const slides = shopping?.similar?.map((item) => (
    <ShoppingCard key={item.id} item={item} />
  ));

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title={shopping?.name || 'Shopping page'} />
        <div className="hidden lg:block">
          <DrawerImagesView images={shopping?.images || []} />
        </div>
        <div className="lg:hidden">
          <SliderComponents images={shopping?.images || []} showCout={true} />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-8 lg:font-normal font-semibold">
          <div
            className={cn(
              'rounded-xl lg:p-6 p-4 flex flex-col items-start lg:gap-4 gap-2 self-stretch bg-white  border border-[#E1E1E1] lg:col-span-2 col-span-1'
            )}
          >
            <h1 className="lg:text-3xl text-2xl font-semibold">
              {shopping?.name}
            </h1>
            <div className="flex items-center gap-3">
              {shopping?.category?.id ? (
                <Link
                  href={'#'}
                  className="rounded-2xl bg-[#FFDDD6] text-orange-500 text-xs py-1 px-2"
                >
                  #{shopping?.category?.name}
                </Link>
              ) : null}
              {shopping?.best_seller ? (
                <div className="p-2 text-white text-xs font-medium rounded-sm bg-[#FF7043]">
                  Best seller
                </div>
              ) : null}
            </div>
            <p className="lg:text-[#121212] lg:text-[16px] text-sm">
              {shopping?.description}
            </p>
          </div>
          {shopping?.properties?.map((item, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl lg:p-6 p-4 flex flex-col items-start lg:gap-4 gap-2 self-stretch bg-white  border border-[#E1E1E1]'
              )}
            >
              <h1 className="lg:text-3xl text-2xl font-semibold">
                {item.title}
              </h1>
              <p className="lg:text-[#121212] lg:text-[16px] text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F5F8FC] lg:py-10 py-5 my-12">
        <div className="container mx-auto lg:px-0 px-3">
          <h1 className="font-semibold lg:text-3xl  text-2xl">See more</h1>
          <div className="hidden md:grid lg:grid-cols-4 mt-5 mb-8 md:grid-cols-2  gap-5">
            {slides}
          </div>
          <div className="sm:hidden my-5 ">
            <CustomCarousel items={slides || []} />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Shopping Questions" service="shopping" />
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
