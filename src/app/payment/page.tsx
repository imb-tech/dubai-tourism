import Questions from 'components/questions/questions';
import React from 'react';
import { childData } from 'services/data';
import PaymentMain from 'views/payment/payment-main';

export default function page() {
  return (
    <React.Fragment>
      <PaymentMain />
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
