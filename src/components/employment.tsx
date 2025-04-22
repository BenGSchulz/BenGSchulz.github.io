import * as React from 'react';

type EmploymentData = {
  id: number;
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: Array<{
    id: number;
    content: string | React.DetailedReactHTMLElement<{}, HTMLLIElement>;
  }>;
};

const employmentData: Array<EmploymentData> = [
  {
    id: 0,
    company: 'Nextworld',
    title: 'Software Engineer 2',
    location: 'Denver, CO',
    dates: 'Nov 2019 – Jun 2024',
    bullets: [
      {
        id: 0,
        content:
          'Built expertise in Angular, TypeScript, and RxJS to drive product direction and execution of sustainable, feature-rich UI components and scalable, event-driven systems powering a no-code enterprise application platform.',
      },
      {
        id: 1,
        content:
          'Spearheaded long-term re-architecture of crucial features such as datatable infrastructure, advanced filtering components, and multi-step forms with a focus on improving performance, capabilities, and code standards.',
      },
      {
        id: 4,
        content:
          'Achieved 2x improvement to LCP and reduced technical debt by modernizing legacy templating middleware into reusable and extensible components.',
      },
      {
        id: 5,
        content:
          'Exponent of intensive testing culture to achieve improved code quality, using Jasmine + WebdriverIO to build comprehensive suites and additionally implementing recorded interactions for no-code test automation.',
      },
      {
        id: 3,
        content:
          'Improved critical filtering response times by 30% after partnering with backend team to design and uptake enhanced API methods with a huge reduction in payload size.',
      },
      {
        id: 3.5,
        content:
          'Maintained WCAG AA standards and i18n compliance in all my work to ensure inclusivity across the platform, particularly identified the need for and implemented a standardized keyboard navigation framework for multifaceted interfaces.',
      },
      {
        id: 7,
        content:
          'Recognized as a "go-to" team member and project lead by mentoring junior engineers, driving pair programming and code review sessions, and participating in healthy feedback culture.',
      },
    ],
  },
  {
    id: 1,
    company: 'Spotpost',
    title: 'Software Development Intern',
    location: 'Denver, CO / Remote',
    dates: 'Feb 2019 – Jul 2019',
    bullets: [
      {
        id: 0,
        content:
          'Built a digital advertisement and bulletin board platform from the ground up with a cross-functional team.',
      },
      {
        id: 1,
        content:
          'Designed RESTful API methods and implemented the frontend authentication flow using React + JWT, ensuring secure user access.',
      },
      {
        id: 2,
        content:
          'Proposed new product features, technologies, and process optimizations to improve team efficiency and product quality.',
      },
    ],
  },
  {
    id: 2,
    company: 'DSST Public Schools',
    title: 'Creative Coding Elective Teacher',
    location: 'Denver, CO',
    dates: 'Aug 2018 – Nov 2018',
    bullets: [
      {
        id: 0,
        content: React.createElement(
          'li',
          { key: 0 },
          'Designed a trimester curriculum focused on creative coding and CS fundamentals using OpenProcessing/p5.js : ',
          React.createElement(
            'a',
            {
              href: 'https://openprocessing.org/class/58336',
              target: '_blank',
              className: 'underline',
            },
            'Class Page'
          ),
          '.'
        ),
      },
      {
        id: 1,
        content:
          'Cultivated interest in my passion to use coding for creative expression and human-computer interaction.',
      },
      {
        id: 2,
        content:
          'Evolved my leadership and mentoring skills through instruction and collaboration with 38 students, grades 9 - 11.',
      },
    ],
  },
];

const Employment: React.FC = () => {
  return (
    <>
      {employmentData.map((data) => (
        <div key={data.id}>
          <div className="flex flex-col md:flex-row print:flex-row md:justify-between print:justify-between text-base">
            <span className="flex flex-col md:inline print:inline">
              <span className="font-semibold">{data.company}</span>

              <span className="hidden md:inline print:inline">, </span>
              <span className="italic">{data.title}</span>
              <span className="text-sm">
                <span className="hidden md:inline print:inline"> - </span>
                {data.location}
              </span>
            </span>
            <span className="text-base">{data.dates}</span>
          </div>
          <ul className="list-disc pl-4 text-sm">
            {data.bullets.map((bullet) => {
              return typeof bullet.content === 'string' ? (
                <li key={bullet.id}>{bullet.content}</li>
              ) : (
                bullet.content
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Employment;
