/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ErrorPage404 } from './components/pages/ErrorPage404';

// Lazy-load with default exports
const Home = React.lazy(() => import('./components/pages/Home'));
const LifeAdvice = React.lazy(() => import('./components/pages/LifeAdvice'));
const TrainingAdvice = React.lazy(
  () => import('./components/pages/TrainingAdvice')
);
const FoodAdvice = React.lazy(() => import('./components/pages/FoodAdvice'));
const RecipeTips = React.lazy(() => import('./components/pages/RecipeTips'));
const SearchFood = React.lazy(() => import('./components/pages/SearchFood'));
const AboutProject = React.lazy(
  () => import('./components/pages/AboutProject')
);

const childRoutes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
  { path: 'life', element: <LifeAdvice /> },
  { path: 'training', element: <TrainingAdvice /> },
  { path: 'food', element: <FoodAdvice /> },
  { path: 'recipes', element: <RecipeTips /> },
  { path: 'search', element: <SearchFood /> },
  { path: 'about', element: <AboutProject /> },
];

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage404 />,
    children: childRoutes,
  },
];

export const router = createBrowserRouter(routes, {
  basename: '/natural-guide-to-gestational-diabetes',
});
