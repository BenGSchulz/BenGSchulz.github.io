import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Header from '../components/header';
import PaperFloatWrapper from '../components/paper-float-wrapper';
import SEO from '../components/seo';
import { Section } from '../constants/section';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <PaperFloatWrapper>
        <Header navValue={Section.About} />
        <main className="flex flex-col pt-4 gap-2">
          <p className="px-2 py-1">To Whom It May Concern,</p>
          <p className="px-2 py-1">
            You've reached the personal website of Ben Schulz. In the spirit of
            prototyping and iteration, this is a placeholder to give you an
            introduction to myself and my background while I develop a more
            interactive and detailed experience. Stay tuned to see what I am
            cooking up :) You can also check out the V1 of my website here:{' '}
            <a href="https://benschulz.dev/WebsiteV1/" className="underline">
              benschulz.dev V1
            </a>
            .
          </p>
          <p className="px-2 py-1">Here's my professional pitch:</p>
          <p className="px-2 py-1">
            I am a passionate and skilled developer driven by the challenge of
            turning ideas into impactful products. With a strong focus on
            collaboration, technical innovation, and creating user-friendly
            systems, I thrive on building solutions that make a real-world
            impact. My work is guided by a commitment to excellence,
            adaptability, and continuous improvement.
          </p>
          <p className="px-2 py-1">
            Throughout my career, I have built a reputation as a dependable and
            collaborative engineer who takes ownership of projects from initial
            design to rollout and beyond. I value fostering a team environment
            grounded in mutual learning and trust. I enjoy mentoring junior
            engineers and peers through constructive code reviews and peer
            programming, emphasizing both team performance and individual
            growth. By prioritizing strong relationships and feedback ecosystems
            in diverse groups, I aim to deliver the best possible products for
            all users. My approach involves maintaining open and broad
            communication channels to ensure decisions are informed,
            transparent, and aligned with user needs, while staying adaptable to
            evolving requirements through iterative development.
          </p>
          <p className="px-2 py-1">
            Building on this foundation of teamwork, I can apply my technical
            skills to produce powerful results. I am well-versed in driving
            product direction for highly interactive and impactful UI features
            within data-heavy, enterprise-scale codebases. I have a keen eye for
            detail and enjoy combining my technical skills with design knowledge
            to create elegant and efficient interfaces. I am also experienced in
            implementing accessibility standards to ensure inclusivity across a
            platform. Along with producing an outstanding end user experience I
            also prioritize my fellow developers as I implement maintainable and
            extensible systems with high quality code standards.
          </p>
          <p className="px-2 py-1">
            While my recent professional experience has focused on Angular,
            TypeScript, HTML, and CSS, I have a solid understanding of
            component-based UI architecture and am confident in my ability to
            quickly adapt to other frameworks and technologies. My history of
            extensive collaboration with back-end engineers to develop and
            uptake efficient APIs leaves me prepared to take on server-side
            responsibilities too. Furthermore, my hands-on experience includes
            Git, AI prompting, CI/CD practices, and unit and E2E testing
            frameworks. In all, my goal is to continually grow as a developer
            while delivering meaningful technical contributions that align with
            user and business needs.
          </p>
          <p className="px-2 py-1">
            Outside of all of that, I like to get out hiking, backpacking,
            biking, skiing, travelling, and making gear for those activities. Of
            course I also enjoy music, video games, film, and tv and I'm trying
            to read more.
          </p>
          <p className="px-2 pt-2">That's it for now.</p>
          <p className="px-2 pt-2">Thanks for your attention,</p>
          <p className="px-2">Ben Schulz</p>
        </main>
      </PaperFloatWrapper>
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
