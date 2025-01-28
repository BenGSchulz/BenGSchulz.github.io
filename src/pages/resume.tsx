import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Employment from '../components/employment';
import Header from '../components/header';
import PaperFloatWrapper from '../components/paper-float-wrapper';
import SEO from '../components/seo';
import { Section } from '../constants/section';

const ResumePage: React.FC<PageProps> = () => {
  return (
    <main>
      <PaperFloatWrapper>
        <Header navValue={Section.Resume} />
        <main>
          <Employment />

          {/* Education */}
          <div className="flex flex-col pt-2 gap-2">
            <div className="text-2xl border-b border-current">EDUCATION</div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between text-base md:text-lg print:flex-row print:justify-between print:text-lg">
                <span>UNIVERSITY OF DENVER</span>
                <span>Sep. 2015 - Mar. 2019</span>
              </div>
              <ul className="list-disc pl-4 text-sm">
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
                href="https://aibenschulzdev.vercel.app/"
                target="_blank"
              >
                Personal Advocate Chatbot
              </a>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Built my own professional advocate using retrieval-augmented
                  generation powered by Next.js, Vercel AI + OpenAI, and Neon
                  Postgres + Drizzle ORM.
                </li>
                <li>
                  Utilized pgvector and OpenAI embeddings API for efficient
                  content embedding, enabling real-time contextual
                  conversations.
                </li>
                <li>
                  Designed a fluid interface using Tailwind CSS and Motion
                  animations, ensuring an engaging user experience.
                </li>
              </ul>
            </div>
            <div>
              <a
                className="text-lg underline"
                href="https://sundy.itch.io/blankcanvas"
                target="_blank"
              >
                Blank Canvas
              </a>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Designed and developed a game alongside a small team using
                  Unreal Engine 4 with C++ and Blueprints.
                </li>
                <li>
                  Tackled a variety of design + engineering roles: Gameplay, AI,
                  UI, animations, audio, level design, and story development.
                </li>
                <li>
                  Presented a live beta showcase, demonstrating the ability to
                  take a complex project from ideation to polished execution.
                </li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col pt-4 gap-2">
            <div className="text-2xl border-b border-current">SKILLS</div>
            <ul className="list-disc pl-4 text-sm">
              <li>TypeScript, JavaScript, HTML, CSS, Java, C++</li>
              <li>
                Angular, RxJS, React.js, Next.js, Tailwind, Node.js, Express,
                MongoDB, Mongoose, Jasmine, WebDriverIO, Jest, Enzyme, Git,
                GitHub, Jenkins
              </li>
              <li>
                System Architecture, Project Management, Accessibility,
                Mentoring, Agile, Jira, Confluence, Figma, Draw.io,
                Communication, Collaborative Problem Solving
              </li>
            </ul>
          </div>
        </main>
      </PaperFloatWrapper>
    </main>
  );
};

export default ResumePage;

export const Head: HeadFC = () => (
  <>
    <SEO />
    <title>Resume Page</title>
  </>
);
