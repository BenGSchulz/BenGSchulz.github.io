import React from 'react';

import SEO from '../components/seo';

const NotFoundPage = () => (
  <div className="messageContainer">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist :( </p>
    <a href="/" className="homeLink">
      Home
    </a>
  </div>
);

export default NotFoundPage;
