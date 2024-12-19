import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import SEO from '../components/seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>BENSCHULZ.DEV</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <SEO />
    <title>Home Page</title>
  </>
);
