import React from 'react';
import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import TransferDetail from 'views/transfer-service/transfer-detail';

export default function RentId() {
  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="Transfer service purchase details" />
        <TransferDetail />
      </div>
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Transfer Services Questions" service="transfers" />
      </div>
    </React.Fragment>
  );
}
