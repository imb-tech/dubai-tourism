import CheckoutMain from 'views/checkout/checkout-main';
import React from 'react';
import Questions from 'components/questions/questions';
import { childData } from 'services/data';

export default function page() {
  return (
    <React.Fragment>
      <CheckoutMain />
      <div className='container mx-auto lg:px-0 px-3'>
        <Questions
          title="Frequently asked questions"
          parentData={['Vip Concierge  Questions']}
          childData={childData}
        />
      </div>
    </React.Fragment>
  );
}
