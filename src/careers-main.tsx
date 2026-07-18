import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import CareerApplication from './pages/CareerApplication.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CareerApplication />
  </StrictMode>,
);
