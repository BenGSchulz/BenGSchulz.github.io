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
    company: 'NEXTWORLD',
    title: 'Software Engineer 2',
    location: 'Denver, CO',
    dates: 'Nov. 2019 - Jun. 2024',
    bullets: [
      {
        id: 0,
        content:
          'Drove product direction and execution of scalable, event-driven systems powering a no-code enterprise application platform.',
      },
      {
        id: 0.5,
        content:
          'Built expertise using TypeScript + RxJS to develop sustainable, feature-rich UI components for diverse audiences.',
      },
      {
        id: 1,
        content:
          'Spearheaded long-term re-architecture of critical features with a focus on improving performance, capabilities, and code standards.',
      },
      {
        id: 4,
        content:
          'Reduced technical debt by modernizing legacy middleware into reusable components, achieving 80% reduction in served file size.',
      },
      {
        id: 4.5,
        content:
          'Owned full lifecycle for my projects by managing requirements, design, documentation, and support beyond the implementation.',
      },
      {
        id: 5,
        content:
          'Exponent of intensive testing culture to achieve improved code quality, using Jasmine + WebdriverIO to build comprehensive suites.',
      },
      {
        id: 2,
        content:
          'Proactively collaborated with stakeholders to achieve confidence in implementation as requirements evolve through project lifecycle.',
      },
      {
        id: 3,
        content:
          'Partnered with back-end team to design and uptake enhanced API methods, decreasing payload sizes up to 90%.',
      },
      {
        id: 6,
        content:
          'Mentored junior engineers, driving pair programming and code review sessions to encourage teamwork and knowledge sharing.',
      },
      {
        id: 7,
        content:
          'Recognized as a "go-to" team member and project lead by learning quickly, being flexible, demonstrating consistent quality, showing forward-thinking, and taking feedback seriously.',
      },
    ],
  },
  {
    id: 1,
    company: 'SPOTPOST',
    title: 'Software Development Intern',
    location: 'Denver, CO / Remote',
    dates: 'Feb. 2019 - Jul. 2019',
    bullets: [
      {
        id: 0,
        content:
          'Built a product from the ground up with a cross-functional team, collaborating on design, architecture, and implementation.',
      },
      {
        id: 1,
        content:
          'Designed RESTful API methods and implemented the front-end authentication flow using React + JWT, ensuring secure user access.',
      },
      {
        id: 2,
        content:
          'Proposed new product features and process optimizations, streamlining workflows and enhancing engineering efficiency.',
      },
    ],
  },
  {
    id: 2,
    company: 'DSST PUBLIC SCHOOLS',
    title: 'Creative Coding Elective Teacher',
    location: 'Denver, CO',
    dates: 'Aug. 2018 - Nov. 2018',
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
    <div className="flex flex-col gap-2 pt-4">
      <div className="text-2xl border-b border-current">EXPERIENCE</div>
      {employmentData.map((data) => (
        <div key={data.id}>
          <div className="flex flex-col md:flex-row print:flex-row md:justify-between print:justify-between text-base md:text-lg print:text-lg">
            <span className="flex flex-col md:inline print:inline">
              <span>
                {data.company}
                <span className="hidden md:inline print:inline">, </span>
              </span>
              <span className="italic">
                {data.title}
                <span className="hidden md:inline print:inline"> : </span>
              </span>
              <span>{data.location}</span>
            </span>
            <span>{data.dates}</span>
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
    </div>
  );
};

export default Employment;
