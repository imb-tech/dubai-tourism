import React from 'react';
import Questions from 'components/questions/questions';
import { childData } from 'services/data';
import { CreativeCommons } from 'lucide-react';
import { Button } from 'components/ui/button';
import SectionDetailsHeading from 'components/ui/page-heading';
import TransferDetail from 'views/transfer-service/transfer-detail';

export const images: ShoppingImage[] = [
  {
    id: 1,
    url: '/image-shopping.png',
  },
  {
    id: 2,
    url: '/image-shopping.png',
  },
  {
    id: 3,
    url: '/image-shopping.png',
  },
  {
    id: 4,
    url: '/image-shopping.png',
  },
  {
    id: 5,
    url: '/image-shopping.png',
  },
];

export default function RentId() {
  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="Transfer service purchase details" />

        <TransferDetail />
      </div>
      <div className="container mx-auto lg:px-0 px-3">
        <Questions
          title="Frequently asked questions"
          parentData={['Vip Concierge  Questions']}
          childData={childData}
        />
      </div>
    </React.Fragment>
  );
}
