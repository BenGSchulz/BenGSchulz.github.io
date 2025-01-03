import * as React from 'react';

const paragraphs = [
  'To Whom It May Concern,',
  "I'm a versatile and enthusiastic developer passionate about creating powerful interactive experiences. I love bringing ideas to life on a screen and I'm excited to progress my career doing it. My proficiency lies in crafting front-end interactions using frameworks like Angular and React. I'm also experienced in full-stack development using noSQL databases and Node.js. I've made games with Unity and Unreal Engine too. When I'm not working on software or learning new tools for it, I'm getting inspired by the outdoors, books, music, and film & TV.",
];

const About: React.FC = () => {
  return (
    <div className="flex flex-col pt-4 gap-2">
      {paragraphs.map((paragraph) => (
        <p className="px-2 py-1">{paragraph}</p>
      ))}
      <p className="px-2 pt-2">Sincerely,</p>
      <p className="px-2">Ben Schulz</p>
    </div>
  );
};

export default About;
