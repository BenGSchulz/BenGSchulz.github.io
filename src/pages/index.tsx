import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import SEO from '../components/seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex pt-2 pb-2">
      {/* Left Filler */}
      <div className="flex-1" />

      {/* Centered Content */}
      <div className="p-4 max-w-[1100px] flex flex-col basis-full shadow shadow-current print:shadow-none">
        {/* Header */}
        <div className="flex flex-col items-start whitespace-nowrap border-b border-current sm:flex-row sm:justify-between sm:items-end">
          <span className="text-3xl sm:text-5xl">BEN SCHULZ</span>
          <span className="text-xl sm:text-3xl"> SOFTWARE DEVELOPER</span>
        </div>
        {/* Links */}
        <div className="flex items-center justify-between p-2 sm:p-1">
          {[
            {
              text: 'BenGSchulz',
              link: 'https://github.com/BenGSchulz',
              icon: faGithub,
            },
            {
              text: 'BenGSchulz',
              link: 'https://linkedin.com/in/BenGSchulz',
              icon: faLinkedin,
            },
            {
              text: 'mail@benschulz.dev',
              link: 'mailto:mail@benschulz.dev',
              icon: faEnvelope,
            },
            { text: '307-413-8377', link: 'tel:307-413-8377', icon: faPhone },
            {
              text: 'Jackson, WY',
              link: 'https://maps.app.goo.gl/CTZTZcRjVkG4j2d26',
              icon: faMapMarkerAlt,
            },
          ].map((item) => (
            <a
              href={item.link}
              className="flex gap-1 items-center"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-2xl sm:text-base"
              />
              <span className="hidden sm:inline">{item.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right Filler */}
      <div className="flex-1" />
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
