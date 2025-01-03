import * as React from 'react';
import Employment from '../components/employment';

const Resume: React.FC = () => {
  return (
    <>
      <Employment />

      {/* Education */}
      <div className="flex flex-col pt-4 gap-2">
        <div className="text-2xl border-b border-current">EDUCATION</div>
        <div>
          <div className="flex flex-col lg:flex-row lg:justify-between text-base lg:text-lg print:flex-row print:justify-between print:text-lg">
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
              Tackled a variety of design + engineering roles: Gameplay, AI, UI,
              animations, audio, level design, and story development.
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
    </>
  );
};

export default Resume;
