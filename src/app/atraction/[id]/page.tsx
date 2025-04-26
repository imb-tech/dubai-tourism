import WtpComments from 'views/atraction/atraction-comments';
import WtpFeatures from 'views/atraction/atraction-features';
import WtpForm from 'views/atraction/atraction-form';
import WtpMap from 'views/atraction/atraction-map';
import React from 'react';
import { SliderComponents } from 'components/slider/page';
import { images } from 'services/data';

export default function wtp() {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <h1 className="text-center text-4xl my-8">
        Atlantis Aquaventure Waterpark
      </h1>
      <SliderComponents images={images} />
      <WtpForm />
      <WtpMap/>
      <WtpFeatures />
      <WtpComments/>

    </div>
  );
}

