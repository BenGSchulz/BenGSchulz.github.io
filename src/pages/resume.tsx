import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Header from '../components/header';
import PaperFloatWrapper from '../components/paper-float-wrapper';
import SEO from '../components/seo';
import { Section } from '../constants/section';
import { useAudience } from '../context/AudienceContext';

const ResumePage: React.FC<PageProps> = () => {
  const { config } = useAudience();
  return (
    <main>
      <PaperFloatWrapper>
        <Header navValue={Section.Resume} />
        <main>
          {/* Summary */}
          <div className="flex flex-col gap-1 pt-1">
            <div className="text-lg border-b border-current">SUMMARY</div>
            <div className="text-sm">{config.summary}</div>
          </div>

          {/* Skills */}
          <div className="flex flex-col pt-1 gap-1">
            <div className="text-lg border-b border-current">SKILLS</div>
            <ul className="list-disc pl-4 text-sm">
              {config.skills.map((skillGroup, index) => (
                <li key={index}>
                  <span className="font-semibold">{skillGroup.category}:</span>{' '}
                  {skillGroup.skills}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-1 pt-1">
            <div className="text-lg border-b border-current">EXPERIENCE</div>
            {config.employment.map((data) => (
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
          </div>

          {/* Projects */}
          {config.showProjects && (
            <div className="flex flex-col pt-1 gap-1">
              <div className="text-lg border-b border-current">PROJECTS</div>
              {config.projects.map((project) => (
                <div key={project.id}>
                  <a
                    className="text-base underline"
                    href={project.link}
                    target="_blank"
                  >
                    {project.title}
                  </a>
                  <ul className="list-disc pl-4 text-sm">
                    {project.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          <div className="flex flex-col pt-1 gap-1">
            <div className="text-lg border-b border-current">EDUCATION</div>
            {config.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex flex-col md:flex-row print:flex-row md:justify-between print:justify-between text-base">
                  <span className="flex flex-col md:inline print:inline">
                    <span className="font-semibold">{edu.institution}</span>
                    <span className="hidden md:inline print:inline">, </span>
                    <span className="italic">{edu.degree}</span>
                    {edu.specialization && (
                      <>
                        <span className="hidden md:inline print:inline">
                          {' '}
                          :{' '}
                        </span>
                        <span className="text-sm italic">
                          {edu.specialization}
                        </span>
                      </>
                    )}
                  </span>
                  <span className="text-base">{edu.date}</span>
                </div>
                {edu.details && (
                  <ul className="list-disc pl-4 text-sm">
                    {edu.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
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
