import React from 'react';

import SEO from '../components/seo';

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist :( </p>
    <a href="/" className="underline">
      Home
    </a>
  </div>
);

export default NotFoundPage;
