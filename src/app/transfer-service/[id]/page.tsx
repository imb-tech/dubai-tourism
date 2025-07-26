import React from 'react';
import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import TransferDetail from 'views/transfer-service/transfer-detail';
import { fetchData } from 'lib/fetchData';
import { TRANSFERS } from 'constants/api-endpoints';


export default async function RentId({ params, searchParams }: PageProps) {
  const { id } =  params;

  const data = await fetchData<Transfer>(`${TRANSFERS}/${id}`);
  if (!data) return null;

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="Transfer service purchase details" />
        <TransferDetail
          data={data}
          searchParams={searchParams}
        />
      </div>
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Transfer Services Questions" service="transfers" />
      </div>
    </React.Fragment>
  );
}
