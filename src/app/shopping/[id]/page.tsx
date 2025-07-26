import { CustomCarousel } from 'components/custom/carousel';
import Modal from 'components/custom/modal';
import DrawerImagesView from 'components/drawer/page';
import Questions from 'components/questions/questions';
import { SliderComponents } from 'components/slider/page';
import SectionDetailsHeading from 'components/ui/page-heading';
import { SHOPPING_GOLDS } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import ApplicationFormShoppping from 'views/shopping/application-form';
import ShoppingCard from 'views/shopping/shopping-card';
import ShoppingInfo from 'views/shopping/shopping-info'; 


export default async function ShoppingId({ params }: PageProps) {
  const { id } =  params;
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
        {shopping ? <ShoppingInfo shopping={shopping} /> : null}
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
      <Modal
        modalKey="shopping"
        title={'Submit an application'}
        titleClass="lg:text-3xl font-semibold text-2xl"
      >
        <ApplicationFormShoppping />
      </Modal>
    </React.Fragment>
  );
}
