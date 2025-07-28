export const dynamic = 'force-dynamic';
import EmptyBox from 'components/custom/empty-box';
import Questions from 'components/questions/questions';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { BANNERS, SHOPPING_GOLDS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import ShoppingCard from 'views/shopping/shopping-card';
import SHoppingFilter from 'views/shopping/shopping-filter';

const Shopping = async ({ searchParams }: PageProps) => {
  const banners = await fetchData<Banner[]>(BANNERS, {
    params: { service: 'shopping' },
  });

  const shopping = await fetchData<ShoppingData>(SHOPPING_GOLDS, {
    params: searchParams,
  });

  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="Atlantis Aquaventure Waterpark" />

      <SliderComponents images={banners || []} />
      <div className="my-5">
        <SHoppingFilter />
      </div>
      <h1 className="font-semibold lg:text-3xl  text-2xl">Best seller</h1>
      <div className="grid lg:grid-cols-4 mt-5 mb-8 md:grid-cols-2 grid-cols-1 gap-5">
        {shopping?.results?.map((item) => (
          <ShoppingCard key={item.id} item={item} />
        ))}
      </div>
        {shopping?.results.length === 0 && <EmptyBox />}
      <Questions title="Shopping Questions" service="shopping" />
    </div>
  );
};

export default Shopping;
