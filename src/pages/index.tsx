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
            interactive and detailed experience. Stay tuned to see what I am{' '}
            <a
              href="https://aibenschulzdev.vercel.app/"
              className="underline"
              target="_blank"
            >
              cooking up
            </a>{' '}
            :) You can also check out the V1 of my website here:{' '}
            <a
              href="https://benschulz.dev/WebsiteV1/"
              className="underline"
              target="_blank"
            >
              benschulz.dev V1
            </a>
            .
          </p>
          <p className="px-2 py-1">Here's my professional pitch:</p>
          <p className="px-2 py-1">
            As a maker at heart, I thrive on transforming ideas into impactful,
            user-centered products. I am eager to join an innovative workplace
            where I can have fun solving important problems alongside a
            dedicated team that help each other to grow. I hope to contribute my
            focus on collaboration, quality, and continuous improvement to a
            meaningful project that will drive positive change.
          </p>
          <p className="px-2 py-1">
            Throughout my career, I have built a reputation as a dependable and
            collaborative engineer who takes ownership of projects from initial
            design to rollout and beyond. I value a team environment grounded in
            mutual learning and trust. I promote constructive code reviews and
            peer programming as a means to achieve higher team performance and
            individual growth. By prioritizing strong relationships and feedback
            ecosystems in diverse groups, I aim to deliver the best possible
            products for all users. My approach involves maintaining open and
            broad communication channels to ensure decisions are informed,
            transparent, and aligned with user needs, while staying adaptable to
            evolving requirements through iterative development.
          </p>
          <p className="px-2 py-1">
            Building on this foundation of teamwork and flexibility, I can apply
            my technical skills to produce powerful results. I am well-versed in
            driving product direction for highly interactive and impactful UI
            features within data-heavy, enterprise-scale applications. I have a
            keen eye for detail and enjoy combining my technical skills with
            design knowledge to create elegant and efficient interfaces. I am
            also experienced in implementing accessibility standards to ensure
            inclusivity across a platform. Along with producing an outstanding
            end user experience I also prioritize my fellow developers as I
            implement maintainable and extensible systems with high quality code
            standards and documentation.
          </p>
          <p className="px-2 py-1">
            My recent professional work has focused on frontend responsibilities
            using Angular + RxJS. I've built an expertise in component-based UI
            as well as complex asynchronous system architecture and I am
            confident in my ability to quickly adapt to other frameworks and
            technologies. My history of extensive collaboration with back-end
            engineers to develop and uptake efficient APIs leaves me prepared to
            take on server-side responsibilities too. Furthermore, my hands-on
            experience includes React, Next.js, Vercel, Git, AI prompting, CI/CD
            practices, and unit and E2E testing frameworks. In all, my goal is
            to continually grow as a developer while delivering meaningful
            technical contributions that align with user and business needs.
          </p>
          <p className="px-2 py-1">
            Outside of all of that, I like to get out hiking, backpacking,
            biking, skiing, traveling, and making gear for those activities. Of
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
