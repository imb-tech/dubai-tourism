import CheckoutMain from 'views/checkout/checkout-main';
import React from 'react';
import Questions from 'components/questions/questions';

export default function page() {
  return (
    <React.Fragment>
      <CheckoutMain />
      <div className='container mx-auto lg:px-0 px-3'>
        <Questions
          title="Checkout  Questions"
          service='concierges'
        />
      </div>
    </React.Fragment>
  );
}
