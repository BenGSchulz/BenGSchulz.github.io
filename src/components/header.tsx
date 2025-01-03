import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFileDownload,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import resume from '../files/BenSchulzResume.pdf';

const headerLinkData = [
  {
    id: 0,
    text: 'BenGSchulz',
    link: 'https://github.com/BenGSchulz',
    icon: faGithub,
  },
  {
    id: 1,
    text: 'BenGSchulz',
    link: 'https://linkedin.com/in/BenGSchulz',
    icon: faLinkedin,
  },
  {
    id: 2,
    text: 'mail@benschulz.dev',
    link: 'mailto:mail@benschulz.dev',
    icon: faEnvelope,
  },
  {
    id: 3,
    text: '307-413-8377',
    link: 'tel:307-413-8377',
    icon: faPhone,
  },
  {
    id: 4,
    text: 'Jackson, WY',
    link: 'https://maps.app.goo.gl/CTZTZcRjVkG4j2d26',
    icon: faMapMarkerAlt,
  },
];

type HeaderProps<NavType extends string> = {
  navValue: NavType;
  navOptions: Array<NavType>;
  handleNav: (navTarget: NavType) => void;
};

function Header<NavType extends string>(
  props: React.PropsWithChildren<HeaderProps<NavType>>
) {
  function handleNavSelect(navTarget: string): void {
    // Cast here is okay because the only values available in the select will be of NavType.
    props.handleNav(navTarget as NavType);
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-start whitespace-nowrap border-b border-current lg:flex-row lg:justify-between lg:items-end print:flex-row print:justify-between print:items-end">
        <span className="text-3xl lg:text-5xl print:text-5xl">BEN SCHULZ</span>
        <span className="text-xl lg:text-3xl print:text-3xl">
          SOFTWARE DEVELOPER
        </span>

        {/* Nav */}
        <div className="flex justify-center text-2xl print:hidden">
          <select
            className="bg-transparent"
            name="section"
            onChange={(e) => handleNavSelect(e.target.value)}
          >
            {props.navOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center justify-between p-2 lg:p-1 print:p-1">
        <a
          className="print:hidden flex gap-1 items-center"
          href={resume}
          download="BenSchulzResume.pdf"
        >
          <FontAwesomeIcon
            icon={faFileDownload}
            className="text-2xl lg:text-base print:text-base"
          />
          <span className="hidden lg:inline print:inline">Resume</span>
        </a>
        <a
          className="hidden print:flex gap-1 items-center"
          href="https://benschulz.dev"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-2xl lg:text-base print:text-base"
          />
          <span className="hidden lg:inline print:inline">benschulz.dev</span>
        </a>
        {headerLinkData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex gap-1 items-center"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-2xl lg:text-base print:text-base"
            />
            <span className="hidden lg:inline print:inline">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
