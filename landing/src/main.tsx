import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import './theme/global.css';
import './theme/responsive.css';
import './theme/motion.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
