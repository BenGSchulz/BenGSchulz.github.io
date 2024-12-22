import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFileDownload,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Employment from '../components/employment';
import SEO from '../components/seo';
import resume from '../files/BenSchulzResume.pdf';

const headerLinkData = [
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
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex pt-2 pb-2">
      {/* Left Filler */}
      <div className="flex-1" />

      {/* Centered Content */}
      <div className="p-6 max-w-[1100px] flex flex-col basis-full shadow shadow-current print:shadow-none">
        {/* Header */}
        <div className="flex flex-col items-start whitespace-nowrap border-b border-current sm:flex-row sm:justify-between sm:items-end">
          <span className="text-3xl sm:text-5xl">BEN SCHULZ</span>
          <span className="text-xl sm:text-3xl">SOFTWARE DEVELOPER</span>
        </div>
        {/* Links */}
        <div className="flex items-center justify-between p-2 sm:p-1">
          <a
            className="print:hidden flex gap-1 items-center"
            href={resume}
            download="BenSchulzResume.pdf"
          >
            <FontAwesomeIcon
              icon={faFileDownload}
              className="text-2xl sm:text-base"
            />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a
            className="hidden print:flex gap-1 items-center"
            href="https://benschulz.dev"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGlobe} className="text-2xl sm:text-base" />
            <span className="hidden sm:inline">benschulz.dev</span>
          </a>
          {headerLinkData.map((item) => (
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
        <Employment />

        {/* Education */}
        <div className="flex flex-col pt-4 gap-2">
          <div className="text-2xl border-b border-current">EDUCATION</div>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between text-base sm:text-lg">
              <span>UNIVERSITY OF DENVER</span>
              <span>Sep. 2015 - Mar. 2019</span>
            </div>
            <ul className="list-disc pl-6 text-sm">
              <li>B.S. Computer Science - 3.9 GPA</li>
              <li>Minors: Emergent Digital Practices, Mathematics</li>
              <li>Dean's list and Hornsbeck Scholar</li>
              <li>Outstanding First Year Writing Award</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col pt-4 gap-2">
          <div className="text-2xl border-b border-current">PROJECTS</div>
          <div>
            <a
              className="text-lg underline"
              href="https://github.com/BenGSchulz/WebCookbook"
            >
              Recipe Sharing SPA
            </a>
            <ul className="list-disc pl-6 text-sm">
              <li>Full-stack SPA built with Mongo, Express, Angular, Node.</li>
              <li>Responsive front-end implemented with Bootstrap UI.</li>
              <li>Utilized Docker + Compose for containerization.</li>
            </ul>
          </div>
          <div>
            <a
              className="text-lg underline"
              href="https://sundy.itch.io/blankcanvas"
            >
              Blank Canvas
            </a>
            <ul className="list-disc pl-6 text-sm">
              <li>
                Developed full game from concept pitch to beta release in Unreal
                Engine 4.
              </li>
              <li>
                Tackled a variety of design + engineering roles: Gameplay, AI,
                UI, animations, audio, level design, and story development.
              </li>
              <li>Presented game with live demo at capstone showcase.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col pt-4 gap-2">
          <div className="text-2xl border-b border-current">SKILLS</div>
          <ul className="list-disc pl-4 text-sm">
            <li>TypeScript/JavaScript, HTML+CSS, Java</li>
            <li>
              Angular, RxJS, Jasmine, React, Node.js/Express, MongoDB/Mongoose,
              Jest/Enzyme, Git+GitHub
            </li>
            <li>
              Agile, Jira, written+verbal communication, collaborative problem
              solving
            </li>
          </ul>
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
