import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { StyledLoader } from './components/styles/search/StyledLoader';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<StyledLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
