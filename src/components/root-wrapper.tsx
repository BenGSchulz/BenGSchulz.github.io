import React from 'react';
import { AudienceProvider } from '../context/AudienceContext';

interface RootWrapperProps {
  children: React.ReactNode;
}

const RootWrapper: React.FC<RootWrapperProps> = ({ children }) => {
  return <AudienceProvider>{children}</AudienceProvider>;
};

export default RootWrapper;
