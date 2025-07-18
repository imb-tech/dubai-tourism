import React from 'react';
import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import TransferDetail from 'views/transfer-service/transfer-detail';
import { fetchData } from 'lib/fetchData';
import { TRANSFERS } from 'constants/api-endpoints';

export type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RentId({ params }: PageProps) {
  const { id } = await params;

  const data = await fetchData<Transfer>(`${TRANSFERS}/${id}`);
  console.log(data);

  return (
    <React.Fragment>
      <div className="container mx-auto lg:px-0 px-3">
        <SectionDetailsHeading title="Transfer service purchase details" />
        {data && <TransferDetail data={data} />}
      </div>
      <div className="container mx-auto lg:px-0 px-3">
        <Questions title="Transfer Services Questions" service="transfers" />
      </div>
    </React.Fragment>
  );
}
