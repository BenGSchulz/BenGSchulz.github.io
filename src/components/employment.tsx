import * as React from 'react';

type EmploymentData = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: Array<string | React.DetailedReactHTMLElement<{}, HTMLLIElement>>;
};

const employmentData: Array<EmploymentData> = [
  {
    company: 'NEXTWORLD',
    title: 'Software Engineer 2',
    location: 'Denver, CO',
    dates: 'Nov. 2019 - Jun. 2024',
    bullets: [
      'Contributed to enterprise-scale Angular codebase across multiple product areas serving business-to-business needs.',
      'Collaborated closely with customers, product owners, and other engineers to deliver more effective, sustainable, and powerful products.',
      'Worked closely with back-end team to design and uptake API methods for new functionality and improve existing API for performance.',
      'Took lead developer role in two long-term rearchitecting projects with a large focus on improving code standards and best-practices. Largely reduced dependency on deprecated JTwig templating by rebuilding features as efficient, reusable components and service methods.',
      'Participated in intensive testing culture, using Jasmine and WebdriverIO to achieve high coverage results in unit and e2e tests and improve code quality.',
      'Mentored interns and junior engineers, acting as a lead on projects and driving pair programming + code review sessions to encourage teamwork and knowledge sharing.',
      'Became a "go-to" team member and project lead by demonstrating consistent quality, showing forward-thinking, and taking feedback seriously.',
    ],
  },
  {
    company: 'SPOTPOST',
    title: 'Software Developer Intern',
    location: 'Denver, CO / Remote',
    dates: 'Feb. 2019 - Jul. 2024',
    bullets: [
      'Built a product from the ground up as part of a small cross-functional team.',
      'Designed RESTful API methods and implemented the front-end onboarding flow for a web app using React.',
      'Conceptualized new product features and process optimizations for the engineering team.',
    ],
  },
  {
    company: 'DSST PUBLIC SCHOOLS',
    title: 'Creative Coding Elective Teacher',
    location: 'Denver, CO',
    dates: 'Aug. 2018 - Nov. 2018',
    bullets: [
      React.createElement(
        'li',
        null,
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
      'Cultivated interest in my passion to use coding for creative expression and human-computer interaction.',
      'Evolved my leadership and mentoring skills through instruction and collaboration with 38 students, grades 9 - 11.',
    ],
  },
];

const Employment: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <div className="text-2xl border-b border-current">EMPLOYMENT</div>
      {employmentData.map((data) => (
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between text-base sm:text-lg">
            <span className="flex flex-col sm:inline">
              <span>
                {data.company}
                <span className="hidden sm:inline">, </span>
              </span>
              <span className="italic">
                {data.title}
                <span className="hidden sm:inline"> : </span>
              </span>
              <span>{data.location}</span>
            </span>
            <span>{data.dates}</span>
          </div>
          <ul className="list-disc pl-6 text-sm">
            {data.bullets.map((bullet) => {
              return typeof bullet === 'string' ? <li>{bullet}</li> : bullet;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Employment;
