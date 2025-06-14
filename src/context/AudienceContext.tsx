import React, { createContext, useContext, useState } from 'react';

export enum AudienceType {
  General = 'general',
  Tech = 'tech',
  NonTech = 'non-tech',
  Academia = 'academia',
  Startup = 'startup',
}

export type HeaderLink = {
  id: number;
  text: string;
  link: string;
  icon: any;
};

export type SkillCategory = {
  category: string;
  skills: string;
};

export type EmploymentData = {
  id: number;
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: Array<{
    id: number;
    content: string | React.ReactElement;
  }>;
};

export type ProjectData = {
  id: number;
  title: string;
  link: string;
  bullets: string[];
};

export type EducationData = {
  id: number;
  institution: string;
  degree: string;
  specialization?: string;
  date: string;
  details?: string[];
};

export interface AudienceConfig {
  // Header configuration
  title: string;
  subtitle: string;
  headerLinks: HeaderLink[];

  // Resume configuration
  summary: string;
  skills: SkillCategory[];
  showProjects: boolean;
  projects: ProjectData[];
  education: EducationData[];

  // Employment configuration
  employment: EmploymentData[];
}

export interface AudienceContextType {
  currentAudience: AudienceType;
  setAudience: (audience: AudienceType) => void;
  config: AudienceConfig;
}

const AudienceContext = createContext<AudienceContextType | undefined>(
  undefined
);

export const useAudience = (): AudienceContextType => {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error('useAudience must be used within an AudienceProvider');
  }
  return context;
};

export const AudienceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentAudience, setCurrentAudience] = useState<AudienceType>(
    AudienceType.Tech
  );

  const setAudience = (audience: AudienceType) => {
    setCurrentAudience(audience);
  };

  // This will be populated with the actual configurations
  const config = getAudienceConfig(currentAudience);

  return (
    <AudienceContext.Provider value={{ currentAudience, setAudience, config }}>
      {children}
    </AudienceContext.Provider>
  );
};

// Configuration getter function
const getAudienceConfig = (audience: AudienceType): AudienceConfig => {
  // Import configurations dynamically to avoid circular dependency
  const { audienceConfigs } = require('./AudienceConfigs');
  return audienceConfigs[audience];
};
