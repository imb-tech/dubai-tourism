import Questions from 'components/questions/questions';
import React from 'react';
import PaymentMain from 'views/payment/payment-main';

export default function page() {
  return (
    <React.Fragment>
      <PaymentMain />
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Payment  questions" service="mice_services" />
      </div>
    </React.Fragment>
  );
}
