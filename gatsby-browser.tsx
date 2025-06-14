import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import RootWrapper from './src/components/root-wrapper';
import './src/styles/global.css';
import React from 'react';

// Disable CSS being added by FontAwesome at runtime, which causes a flash of large icons.
config.autoAddCss = false;

export const wrapRootElement = ({ element }) => (
  <RootWrapper>{element}</RootWrapper>
);
