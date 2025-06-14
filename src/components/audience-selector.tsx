import React from 'react';
import { AudienceType, useAudience } from '../context/AudienceContext';

interface AudienceSelectorProps {
  className?: string;
  style?: React.CSSProperties;
}

const AudienceSelector: React.FC<AudienceSelectorProps> = ({
  className = '',
  style = {},
}) => {
  const { currentAudience, setAudience } = useAudience();

  const handleAudienceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAudience(event.target.value as AudienceType);
  };

  return (
    <div
      className={`fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 print:hidden ${className}`}
      style={{
        fontSize: '12px',
        opacity: 0.8,
        ...style,
      }}
    >
      <label
        htmlFor="audience-select"
        className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300"
      >
        Target Audience (Dev Only):
      </label>
      <select
        id="audience-select"
        value={currentAudience}
        onChange={handleAudienceChange}
        className="text-xs p-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value={AudienceType.General}>General</option>
        <option value={AudienceType.Tech}>Tech</option>
        <option value={AudienceType.NonTech}>Non-Tech</option>
        <option value={AudienceType.Academia}>Academia</option>
        <option value={AudienceType.Startup}>Startup</option>
      </select>
    </div>
  );
};

export default AudienceSelector;
