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
          {/* Summary */}
          <div className="flex flex-col gap-1 pt-1">
            <div className="text-lg border-b border-current">SUMMARY</div>
            <div className="text-sm">
              Frontend Engineer with 5 years of experience transforming complex
              ideas into user-centered products using modern web technologies. I
              take ownership from requirements through rollout and beyond,
              driving high-impact initiatives that serve diverse audiences. I
              combine technical expertise with collaborative communication to
              build maintainable systems that power exceptional experiences.
              Eager to solve meaningful problems with a mission-driven team that
              values continuous learning and has a high standard for quality.
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col pt-1 gap-1">
            <div className="text-lg border-b border-current">SKILLS</div>
            <ul className="list-disc pl-4 text-sm">
              <li>
                <span className="font-semibold">Languages:</span> TypeScript,
                JavaScript, HTML, CSS, Java, C++
              </li>
              <li>
                <span className="font-semibold">Frontend:</span> Angular, RxJS,
                React.js, Next.js, Tailwind, Webpack, esbuild
              </li>
              <li>
                <span className="font-semibold">Testing:</span> WebDriverIO,
                Jasmine, Jest, Enzyme, Testing Library
              </li>
              <li>
                <span className="font-semibold">Backend:</span> Node.js,
                Express, REST APIs, GraphQL, PostgreSQL, MongoDB
              </li>
              <li>
                <span className="font-semibold">Tools:</span> Git, GitHub, Zsh,
                Jenkins, Sonar, Lighthouse, Jira, Confluence, Figma
              </li>
              <li>
                <span className="font-semibold">Core Competencies:</span> System
                Architecture, Async, OOP, FP, Performance Optimization,
                Debugging, Accessibility, Project Management, Technical
                Mentorship, Communication, Cross-functional Collaboration,
                Attention to Detail, Agile Methodology
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-1 pt-1">
            <div className="text-lg border-b border-current">EXPERIENCE</div>
            <Employment />
          </div>

          {/* Projects */}
          <div className="flex flex-col pt-1 gap-1">
            <div className="text-lg border-b border-current">PROJECTS</div>
            <div>
              <a
                className="text-base underline"
                href="https://aibenschulzdev.vercel.app/"
                target="_blank"
              >
                Personal Advocate Chatbot
              </a>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Built my own professional advocate using RAG powered by
                  Next.js, Vercel AI + OpenAI, and Neon Postgres + Drizzle ORM.
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
                <li>
                  Leveraged SSR and streaming to optimize performance and SEO
                  with quick-to-load, indexable pages.
                </li>
              </ul>
            </div>
            <div>
              <a
                className="underline"
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

          {/* Education */}
          <div className="flex flex-col pt-1 gap-1">
            <div className="text-lg border-b border-current">EDUCATION</div>
            <div className="flex flex-col md:flex-row print:flex-row md:justify-between print:justify-between text-base">
              <span className="flex flex-col md:inline print:inline">
                <span>
                  University of Denver
                  <span className="hidden md:inline print:inline">, </span>
                </span>
                <span className="italic">B.S. Computer Science</span>
                <span className="hidden md:inline print:inline"> : </span>
                <span className="text-sm italic">
                  Emergent Digital Practices + Mathematics
                </span>
              </span>
              <span className="text-base">Mar 2019</span>
            </div>
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
