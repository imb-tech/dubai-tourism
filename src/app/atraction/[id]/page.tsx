import WtpComments from 'views/wtp/wtp-comments';
import WtpFeatures from 'views/wtp/wtp-features';
import WtpForm from 'views/wtp/wtp-form';
import WtpMap from 'views/wtp/wtp-map';
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

