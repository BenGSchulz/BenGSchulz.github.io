import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Header from '../components/header';
import PaperFloatWrapper from '../components/paper-float-wrapper';
import Resume from '../components/resume';
import SEO from '../components/seo';
import About from '../components/about';

enum Section {
  About = 'About',
  Resume = 'Resume',
}

const IndexPage: React.FC<PageProps> = () => {
  const [activeSection, setActiveSelection] = React.useState(Section.Resume);

  function handleSectionSelect(navTarget: Section): void {
    setActiveSelection(navTarget);
  }

  return (
    <main>
      <PaperFloatWrapper>
        <Header
          navValue={activeSection}
          navOptions={[Section.Resume, Section.About]}
          handleNav={handleSectionSelect}
        />
        {activeSection === Section.About ? (
          <div className="fade-in">
            <About />
          </div>
        ) : activeSection === Section.Resume ? (
          <div className="fade-in-alt">
            <Resume />
          </div>
        ) : null}
      </PaperFloatWrapper>
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
