import React from 'react';

export default function WtpMap({
  location,
  name,
}: {
  location: string;
  name: string;
}) {
  return (
    <div className="p-6 rounded-lg border mt-5">
      <h2 className="text-2xl font-semibold mb-3">
        {name}
      </h2>
      <iframe
        src={location}
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md"
      ></iframe>
    </div>
  );
}
