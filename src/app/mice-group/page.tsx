import Questions from 'components/questions/questions';
import SectionDetailsHeading from 'components/ui/page-heading';
import { MICE_SERVICES } from 'constants/api-endpoints';
import { fetchData } from 'lib/fetchData';
import React from 'react';
import MiceGroupCard from 'views/mice-group/card';

async function page() {
  const data = await fetchData<MiceGroupResults>(MICE_SERVICES);


  return (
    <div className="container mx-auto lg:px-0 px-3">
      <SectionDetailsHeading title="MICE group services" />
      <div className="space-y-3">
        {data?.results?.map((item) => (
          <MiceGroupCard data={item} key={item.id} />
        ))}
      </div>
      <Questions title="MICE Group questions" service="mice_services" />
    </div>
  );
}

export default page;
