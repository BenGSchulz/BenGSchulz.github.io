import RootWrapper from './src/components/root-wrapper';
import React from 'react';

export const wrapRootElement = ({ element }) => (
  <RootWrapper>{element}</RootWrapper>
);
