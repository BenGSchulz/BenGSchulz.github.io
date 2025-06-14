import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFaceSmile,
  faFileDownload,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Section } from '../constants/section';
import { useAudience } from '../context/AudienceContext';
import resume from '../files/BenSchulzResume.pdf';

type HeaderProps<NavType extends string> = {
  navValue: NavType;
};

function Header<NavType extends string>(
  props: React.PropsWithChildren<HeaderProps<NavType>>
) {
  const { config } = useAudience();

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-start whitespace-nowrap border-b border-current md:flex-row md:justify-between md:items-end print:flex-row print:justify-between print:items-end">
        <span className="text-3xl md:text-4xl print:text-4xl">
          {config.title}
        </span>
        <span className="text-2xl md:text-3xl print:text-3xl">
          {config.subtitle}
        </span>
      </div>

      {/* Links */}
      <div className="flex items-center justify-between p-1 pb-0">
        <a
          className="print:hidden flex gap-1 items-center"
          href={props.navValue === Section.About ? '/resume' : resume}
        >
          <FontAwesomeIcon
            icon={faFileDownload}
            className="text-xl lg:text-base print:text-base"
          />
          <span className="hidden lg:inline">
            {props.navValue === Section.About ? 'Resume' : 'Download'}
          </span>
        </a>
        {props.navValue !== Section.About && (
          <a className="print:hidden flex gap-1 items-center" href="/">
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="text-xl lg:text-base print:text-base"
            />
            <span className="hidden lg:inline">About</span>
          </a>
        )}
        <a
          className="hidden print:flex gap-1 items-center"
          href="https://benschulz.dev"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-xl lg:text-base print:text-base"
          />
          <span className="hidden lg:inline print:inline">benschulz.dev</span>
        </a>
        {config.headerLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex gap-1 items-center"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-xl lg:text-base print:text-base"
            />
            <span className="hidden lg:inline print:inline">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
