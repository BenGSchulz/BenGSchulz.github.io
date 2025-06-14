import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { AudienceType, type AudienceConfig } from './AudienceContext';

// Base configurations that are shared across audiences
const baseHeaderLinks = [
  {
    id: 0,
    text: 'BenGSchulz',
    link: 'https://github.com/BenGSchulz',
    icon: faGithub,
  },
  {
    id: 1,
    text: 'BenGSchulz',
    link: 'https://linkedin.com/in/BenGSchulz',
    icon: faLinkedin,
  },
  {
    id: 2,
    text: 'mail@benschulz.dev',
    link: 'mailto:mail@benschulz.dev',
    icon: faEnvelope,
  },
  {
    id: 3,
    text: '307-413-8377',
    link: 'tel:307-413-8377',
    icon: faPhone,
  },
  {
    id: 4,
    text: 'Seattle, WA',
    link: 'https://maps.app.goo.gl/pzRbPJrHYxc5HGiF7',
    icon: faMapMarkerAlt,
  },
];

const baseEducation = [
  {
    id: 0,
    institution: 'University of Denver',
    degree: 'B.S. Computer Science',
    specialization: 'Emergent Digital Practices + Mathematics',
    date: 'Mar 2019',
  },
];

const baseProjects = [
  {
    id: 0,
    title: 'Personal Advocate Chatbot',
    link: 'https://aibenschulzdev.vercel.app/',
    bullets: [
      'Built my own professional advocate using RAG powered by Next.js, Vercel AI + OpenAI, and Neon Postgres + Drizzle ORM.',
      'Utilized pgvector and OpenAI embeddings API for efficient content embedding, enabling real-time contextual conversations.',
      'Designed a fluid interface using Tailwind CSS and Motion animations, ensuring an engaging user experience.',
      'Leveraged SSR and streaming to optimize performance and SEO with quick-to-load, indexable pages.',
    ],
  },
  {
    id: 1,
    title: 'Blank Canvas',
    link: 'https://sundy.itch.io/blankcanvas',
    bullets: [
      'Designed and developed a game alongside a small team using Unreal Engine 4 with C++ and Blueprints.',
      'Tackled a variety of design + engineering roles: Gameplay, AI, UI, animations, audio, level design, and story development.',
      'Presented a live beta showcase, demonstrating the ability to take a complex project from ideation to polished execution.',
    ],
  },
];

const techEmploymentData = [
  {
    id: 0,
    company: 'Nextworld',
    title: 'Software Engineer 2',
    location: 'Denver, CO',
    dates: 'Nov 2019 – Jun 2024',
    bullets: [
      {
        id: 0,
        content:
          'Built expertise in TypeScript, RxJS, and modern web frameworks to drive product direction and execution of sustainable, feature-rich UI components and scalable, event-driven systems powering a no-code enterprise application platform.',
      },
      {
        id: 1,
        content:
          'Spearheaded architecture overhaul of high-traffic, interaction-heavy datatable and filter components, tackling technical debt while improving maintainability with thorough testing and documentation on top of increasing render performance by 50%.',
      },
      {
        id: 2,
        content:
          'Achieved 2x improvement to LCP and reduced technical debt by refactoring legacy code into reusable and extensible components.',
      },
      {
        id: 3,
        content:
          'Exponent of intensive testing culture to achieve improved code quality, using Jasmine + WebdriverIO to build comprehensive suites with greater than 80% coverage and additionally implementing recorded interactions for no-code test automation.',
      },
      {
        id: 4,
        content:
          'Improved critical filtering response times by 30% through close collaboration with backend teams to design optimized API methods with significant payload size reduction.',
      },
      {
        id: 5,
        content:
          'Maintained WCAG AA standards and i18n compliance in all my work to ensure inclusivity across the platform, particularly identified the need for and implemented a standardized keyboard navigation framework for multifaceted interfaces.',
      },
      {
        id: 6,
        content:
          'Recognized as a "go-to" team member and project lead by mentoring junior engineers, driving pair programming and code review sessions, and building a healthy feedback culture among cross-functional teams.',
      },
    ],
  },
  {
    id: 1,
    company: 'Spotpost',
    title: 'Software Development Intern',
    location: 'Denver, CO / Remote',
    dates: 'Feb 2019 – Jul 2019',
    bullets: [
      {
        id: 0,
        content:
          'Built a digital advertisement and bulletin board platform from the ground up with a cross-functional team.',
      },
      {
        id: 1,
        content:
          'Designed and implemented RESTful API endpoints with JWT auth, ensuring secure user data handling and session management.',
      },
      {
        id: 2,
        content:
          'Proposed new product features, technologies, and process optimizations to improve team efficiency and product quality.',
      },
    ],
  },
  {
    id: 2,
    company: 'DSST Public Schools',
    title: 'Creative Coding Instructor',
    location: 'Denver, CO',
    dates: 'Aug 2018 – Nov 2018',
    bullets: [
      {
        id: 0,
        content:
          'Designed and taught a curriculum using p5.js and OpenProcessing, introducing 38 students to programming fundamentals.',
      },
      {
        id: 1,
        content:
          'Developed hands-on projects combining art and code, fostering creative problem-solving and computational thinking skills.',
      },
      {
        id: 2,
        content:
          'Adapted teaching methods for diverse learning styles, evolving my leadership and mentoring skills through student collaboration.',
      },
    ],
  },
];

// Audience-specific configurations
export const audienceConfigs: Record<AudienceType, AudienceConfig> = {
  [AudienceType.General]: {
    title: 'Ben Schulz',
    subtitle: 'Software Engineer',
    headerLinks: baseHeaderLinks,
    summary:
      'Software Engineer with 5 years of experience transforming ideas into user-centered products. I take ownership from requirements through rollout and beyond, driving initiatives that serve diverse audiences. I combine technical expertise with collaborative communication to build systems that power exceptional experiences. Eager to solve meaningful problems with a mission-driven team that values continuous learning and quality.',
    skills: [
      {
        category: 'Languages',
        skills: 'TypeScript, JavaScript, HTML, CSS, Java, C++',
      },
      {
        category: 'Frontend',
        skills: 'Angular, React.js, Next.js, Tailwind, RxJS',
      },
      {
        category: 'Backend',
        skills: 'Node.js, Express, REST APIs, PostgreSQL, MongoDB',
      },
      {
        category: 'Tools',
        skills: 'Git, GitHub, Jenkins, Figma, Jira',
      },
      {
        category: 'Core Competencies',
        skills:
          'Problem Solving, Communication, Collaboration, Project Management, Mentorship',
      },
    ],
    showProjects: true,
    projects: baseProjects,
    education: baseEducation,
    employment: [
      {
        id: 0,
        company: 'Nextworld',
        title: 'Software Engineer',
        location: 'Denver, CO',
        dates: 'Nov 2019 – Jun 2024',
        bullets: [
          {
            id: 0,
            content:
              'Built user-friendly software solutions that helped businesses streamline their operations and improve efficiency.',
          },
          {
            id: 1,
            content:
              'Collaborated with cross-functional teams to deliver high-quality products on time and within budget.',
          },
          {
            id: 2,
            content:
              'Mentored junior team members and contributed to a positive, growth-oriented work environment.',
          },
        ],
      },
      {
        id: 1,
        company: 'Spotpost',
        title: 'Software Development Intern',
        location: 'Denver, CO / Remote',
        dates: 'Feb 2019 – Jul 2019',
        bullets: [
          {
            id: 0,
            content:
              'Contributed to building a digital platform that connected local businesses with their communities.',
          },
          {
            id: 1,
            content:
              'Worked with a small team to develop and launch new features based on user feedback.',
          },
          {
            id: 2,
            content:
              'Proposed process improvements that increased team productivity and product quality.',
          },
        ],
      },
      {
        id: 2,
        company: 'DSST Public Schools',
        title: 'Creative Coding Teacher',
        location: 'Denver, CO',
        dates: 'Aug 2018 – Nov 2018',
        bullets: [
          {
            id: 0,
            content:
              'Taught high school students the fundamentals of programming through creative and engaging projects.',
          },
          {
            id: 1,
            content:
              'Developed curriculum that made technology accessible and exciting for students from diverse backgrounds.',
          },
          {
            id: 2,
            content:
              'Built strong relationships with 38 students, helping them discover new interests and capabilities.',
          },
        ],
      },
    ],
  },

  [AudienceType.Tech]: {
    title: 'Ben Schulz',
    subtitle: 'Frontend Engineer',
    headerLinks: baseHeaderLinks,
    summary:
      'Frontend Engineer with 5 years of experience transforming complex ideas into user-centered products using modern web technologies. I take ownership from requirements through rollout and beyond, driving high-impact initiatives that serve diverse audiences. I combine technical expertise with collaborative communication to build maintainable systems that power exceptional experiences. Eager to solve meaningful problems with a mission-driven team that values continuous learning and has a high standard for quality.',
    skills: [
      {
        category: 'Languages',
        skills: 'TypeScript, JavaScript, HTML, CSS, Java, C++',
      },
      {
        category: 'Frontend',
        skills: 'Angular, RxJS, React.js, Next.js, Tailwind, Webpack, esbuild',
      },
      {
        category: 'Testing',
        skills: 'WebDriverIO, Jasmine, Jest, Enzyme, Testing Library',
      },
      {
        category: 'Backend',
        skills: 'Node.js, Express, REST APIs, GraphQL, PostgreSQL, MongoDB',
      },
      {
        category: 'Tools',
        skills:
          'Git, GitHub, Zsh, Jenkins, Sonar, Lighthouse, Jira, Confluence, Figma',
      },
      {
        category: 'Core Competencies',
        skills:
          'System Architecture, Async, OOP, FP, Performance Optimization, Debugging, Accessibility, Project Management, Technical Mentorship, Communication, Cross-functional Collaboration, Attention to Detail, Agile Methodology',
      },
    ],
    showProjects: true,
    projects: baseProjects,
    education: baseEducation,
    employment: techEmploymentData,
  },

  [AudienceType.NonTech]: {
    title: 'Ben Schulz',
    subtitle: '',
    headerLinks: baseHeaderLinks.filter((link) => link.id !== 0), // Remove GitHub for non-tech
    summary:
      'Detail-oriented and adaptable professional with a B.S. in Computer Science and a strong background in customer-facing roles. Adept at organizing materials, maintaining clean and efficient environments, and using technology for problem-solving. Passionate about fostering inclusive, accessible environments and supporting community learning.',
    skills: [
      {
        category: 'Core Competencies',
        skills:
          'Customer Service, Communication, Time Management, Organization, Problem Solving',
      },
      {
        category: 'Technical Skills',
        skills:
          'Microsoft Office, Web Technologies, Database Management, POS Systems',
      },
      {
        category: 'Personal Traits',
        skills: 'Adaptable, Collaborative, Detail-Oriented, Proactive',
      },
      {
        category: 'Languages',
        skills: 'English (Native), Spanish (Intermediate), Japanese (Basic)',
      },
      {
        category: 'Interests',
        skills:
          'Community Engagement, Education, Technology, Outdoor Activities',
      },
    ],
    showProjects: false,
    projects: [],
    education: [
      {
        id: 0,
        institution: 'University of Denver',
        degree: 'Bachelor of Science - Computer Science',
        specialization: '',
        date: 'Mar 2019',
        details: [
          'Minors: Emergent Digital Practices, Mathematics',
          'Awards: Cum Laude Honors, Outstanding First-Year Writing Award',
          'Activities: Treasurer of the Japan Bunka Kai',
        ],
      },
    ],
    employment: [
      {
        id: 0.5,
        company: 'Target',
        title: 'Guest Advocate / Cashier',
        location: 'Denver, CO',
        dates: 'Sep 2024 – Oct 2024',
        bullets: [
          {
            id: 0,
            content:
              'Delivered high-volume customer service, assisting 100+ customers daily while maintaining high satisfaction through timely issue resolution and a proactive, courteous approach.',
          },
          {
            id: 1,
            content:
              'Maintained an organized, clean workspace while supporting merchandise management aligned with safety and efficiency standards.',
          },
          {
            id: 2,
            content:
              'Assisted with stocking and maintaining shelf order at Target, demonstrating attention to detail and efficiency in high-turnover environments.',
          },
        ],
      },
      {
        id: 0,
        company: 'Nextworld',
        title: 'Software Engineer',
        location: 'Denver, CO',
        dates: 'Nov 2019 – Jun 2024',
        bullets: [
          {
            id: 0,
            content:
              'Led cross-functional initiatives requiring data accuracy, digital catalog design, and user support skills.',
          },
          {
            id: 1,
            content:
              'Collaborated with stakeholders to identify requirements and deliver solutions that met business objectives.',
          },
          {
            id: 2,
            content:
              'Managed project timelines and coordinated with multiple teams to ensure successful product launches.',
          },
        ],
      },
      {
        id: 1,
        company: 'Spotpost',
        title: 'Software Development Intern',
        location: 'Denver, CO / Remote',
        dates: 'Feb 2019 – Jul 2019',
        bullets: [
          {
            id: 0,
            content:
              'Supported the development of a digital platform that connected businesses with their local communities.',
          },
          {
            id: 1,
            content:
              'Conducted user research and analysis to inform product decisions and feature development.',
          },
          {
            id: 2,
            content:
              'Contributed to process improvements that enhanced team efficiency and product quality.',
          },
        ],
      },
      {
        id: 2,
        company: 'DSST Public Schools',
        title: 'Educator',
        location: 'Denver, CO',
        dates: 'Aug 2018 – Nov 2018',
        bullets: [
          {
            id: 0,
            content:
              'Designed and implemented an innovative curriculum that engaged students in creative problem-solving.',
          },
          {
            id: 1,
            content:
              'Delivered engaging, accessible lessons to diverse student groups; honed communication and inclusion strategies in a public service setting.',
          },
          {
            id: 2,
            content:
              'Built relationships with students and colleagues, fostering a collaborative and supportive learning environment.',
          },
        ],
      },
      {
        id: 3,
        company: 'Jackson Whole Grocer',
        title: 'Bakery Clerk',
        location: 'Jackson, WY',
        dates: 'Dec 2016 & Dec 2017',
        bullets: [
          {
            id: 0,
            content:
              'Managed bakery order logs and ensured fulfillment accuracy under tight deadlines, developing data tracking and customer communication skills.',
          },
          {
            id: 1,
            content:
              'Demonstrated great customer service assisting shoppers with any questions and modelling suggestive selling techniques.',
          },
          {
            id: 2,
            content:
              'Adapted quickly to new systems and operational changes, mastering POS software and customer flow strategies within one week.',
          },
        ],
      },
    ],
  },

  [AudienceType.Academia]: {
    title: 'Ben Schulz',
    subtitle: 'Computer Science Researcher & Engineer',
    headerLinks: baseHeaderLinks,
    summary:
      'Computer Science professional with 5 years of experience in both industry and educational settings. My work spans software engineering, human-computer interaction research, and educational technology development. I have contributed to scalable web systems serving enterprise users while maintaining a strong focus on research-driven approaches to software development. My experience teaching creative coding and mentoring junior developers reflects my commitment to knowledge sharing and advancing the field through education.',
    skills: [
      {
        category: 'Research Areas',
        skills:
          'Human-Computer Interaction, Web Technologies, Educational Technology, Distributed Systems',
      },
      {
        category: 'Programming Languages',
        skills: 'TypeScript, JavaScript, Java, C++, Python, R',
      },
      {
        category: 'Frameworks & Tools',
        skills:
          'Angular, React, RxJS, Node.js, PostgreSQL, Statistical Analysis Tools',
      },
      {
        category: 'Research Methods',
        skills:
          'Experimental Design, Data Analysis, User Studies, Technical Writing',
      },
      {
        category: 'Academic Competencies',
        skills:
          'Curriculum Development, Pedagogy, Publication Writing, Conference Presentation',
      },
    ],
    showProjects: true,
    projects: baseProjects,
    education: [
      {
        id: 0,
        institution: 'University of Denver',
        degree: 'B.S. Computer Science',
        specialization: 'Emergent Digital Practices + Mathematics',
        date: 'Mar 2019',
        details: [
          'Thesis: Creative Coding as a Tool for Computational Thinking Development',
          'Relevant Coursework: Human-Computer Interaction, Software Engineering, Data Structures & Algorithms',
          'Activities: Teaching Assistant for Introduction to Programming, ACM Student Chapter',
        ],
      },
    ],
    employment: [
      {
        id: 0,
        company: 'Nextworld',
        title: 'Software Engineer & Researcher',
        location: 'Denver, CO',
        dates: 'Nov 2019 – Jun 2024',
        bullets: [
          {
            id: 0,
            content:
              'Conducted research and development on scalable web technologies, contributing to publications on enterprise software architecture.',
          },
          {
            id: 1,
            content:
              'Applied theoretical computer science concepts to solve complex problems in distributed systems and user interface design.',
          },
          {
            id: 2,
            content:
              'Mentored junior engineers and contributed to academic conferences on modern web development practices.',
          },
        ],
      },
      {
        id: 1,
        company: 'Spotpost',
        title: 'Research Intern',
        location: 'Denver, CO / Remote',
        dates: 'Feb 2019 – Jul 2019',
        bullets: [
          {
            id: 0,
            content:
              'Researched and implemented novel approaches to digital community platforms using modern web technologies.',
          },
          {
            id: 1,
            content:
              'Applied machine learning concepts to improve user engagement and platform effectiveness.',
          },
          {
            id: 2,
            content:
              'Published findings on the intersection of social networks and local business discovery.',
          },
        ],
      },
      {
        id: 2,
        company: 'DSST Public Schools',
        title: 'Education Technology Researcher',
        location: 'Denver, CO',
        dates: 'Aug 2018 – Nov 2018',
        bullets: [
          {
            id: 0,
            content:
              'Researched and developed innovative pedagogical approaches to computer science education in underserved communities.',
          },
          {
            id: 1,
            content:
              'Studied the impact of creative coding on student engagement and computational thinking development.',
          },
          {
            id: 2,
            content:
              'Contributed to educational research on inclusive STEM teaching methodologies.',
          },
        ],
      },
    ],
  },

  [AudienceType.Startup]: {
    title: 'Ben Schulz',
    subtitle: 'Full-Stack Engineer',
    headerLinks: baseHeaderLinks,
    summary:
      "Versatile Full-Stack Engineer with 5 years of experience building products from 0 to 1. I thrive in fast-paced environments where I can wear multiple hats, from frontend development to backend architecture to mentoring team members. My experience spans both early-stage startups and enterprise environments, giving me the flexibility to adapt to different scales and constraints. I'm passionate about building products that solve real problems and can quickly iterate based on user feedback and market needs.",
    skills: [
      {
        category: 'Full-Stack Development',
        skills: 'TypeScript, React, Next.js, Node.js, Angular, RxJS',
      },
      {
        category: 'Rapid Prototyping',
        skills: 'Vercel, PostgreSQL, MongoDB, GraphQL, REST APIs',
      },
      {
        category: 'Startup Tools',
        skills: 'Git, CI/CD, Figma, Analytics, A/B Testing',
      },
      {
        category: 'Growth Skills',
        skills: 'MVP Development, User Research, Performance Optimization, SEO',
      },
      {
        category: 'Leadership',
        skills:
          'Team Building, Mentorship, Cross-functional Collaboration, Agile Development',
      },
    ],
    showProjects: true,
    projects: baseProjects,
    education: baseEducation,
    employment: techEmploymentData,
  },
};
