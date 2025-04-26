import React from 'react';

export default function WtpMap() {
  return (
    <div className="p-6 rounded-lg border mt-5">
      <h2 className="text-2xl font-semibold mb-3">
        Atlantis Aquaventure Waterpark Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d321.98712541444945!2d69.23603555442904!3d41.20093632800717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1745214332280!5m2!1suz!2s"
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
