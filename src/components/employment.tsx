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
          'Contributed to enterprise-scale Angular codebase across multiple product areas serving business-to-business needs.',
      },
      {
        id: 1,
        content:
          'Lead developer in two long-term rearchitecting projects with a focus on improving performance, capabilities, and code standards.',
      },
      {
        id: 2,
        content:
          'Collaborated with customers, product owners, and other engineers to deliver more effective, sustainable, and powerful products.',
      },
      {
        id: 3,
        content:
          'Partnered with back-end team to design and uptake API methods for new functionality and improve existing API for performance.',
      },
      {
        id: 4,
        content:
          'Largely reduced dependency on deprecated JTwig templating by rebuilding features as efficient, reusable components and service methods.',
      },
      {
        id: 5,
        content:
          'Participated in intensive testing culture, using Jasmine and WebdriverIO to achieve high coverage results in unit and e2e tests and improve code quality.',
      },
      {
        id: 6,
        content:
          'Mentored interns and junior engineers, acting as a lead on projects and driving pair programming + code review sessions to encourage teamwork and knowledge sharing.',
      },
      {
        id: 7,
        content:
          'Became a "go-to" team member and project lead by demonstrating consistent quality, showing forward-thinking, and taking feedback seriously.',
      },
    ],
  },
  {
    id: 1,
    company: 'SPOTPOST',
    title: 'Software Developer Intern',
    location: 'Denver, CO / Remote',
    dates: 'Feb. 2019 - Jul. 2019',
    bullets: [
      {
        id: 0,
        content:
          'Built a product from the ground up as part of a small cross-functional team.',
      },
      {
        id: 1,
        content:
          'Designed RESTful API methods and implemented the front-end onboarding flow for a web app using React.',
      },
      {
        id: 2,
        content:
          'Conceptualized new product features and process optimizations for the engineering team.',
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
          )
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
      <div className="text-2xl border-b border-current">EMPLOYMENT</div>
      {employmentData.map((data) => (
        <div key={data.id}>
          <div className="flex flex-col lg:flex-row print:flex-row lg:justify-between print:justify-between text-base lg:text-lg print:text-lg">
            <span className="flex flex-col lg:inline print:inline">
              <span>
                {data.company}
                <span className="hidden lg:inline print:inline">, </span>
              </span>
              <span className="italic">
                {data.title}
                <span className="hidden lg:inline print:inline"> : </span>
              </span>
              <span>{data.location}</span>
            </span>
            <span>{data.dates}</span>
          </div>
          <ul className="list-disc pl-6 text-sm">
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
