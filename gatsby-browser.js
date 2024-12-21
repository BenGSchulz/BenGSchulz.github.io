import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './src/styles/global.css';

// Disable CSS being added by FontAwesome at runtime, which causes a flash of large icons.
config.autoAddCss = false;
