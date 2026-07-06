import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ReviewFunnel from './pages/ReviewFunnel.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReviewFunnel />
  </StrictMode>,
);
