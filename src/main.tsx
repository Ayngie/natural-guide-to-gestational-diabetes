import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
// import App from './App.tsx'
import './index.scss'

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/pages/Home";
import { AboutProject } from "./components/pages/AboutProject";
import { FoodAdvice } from "./components/pages/FoodAdvice";
import { LifeAdvice } from "./components/pages/LifeAdvice";
import { RecipeTips } from "./components/pages/RecipeTips";
import { SearchFood } from "./components/pages/SearchFood";
import { TrainingAdvice } from "./components/pages/TrainingAdvice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/natural-guide-to-gestational-diabetes",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/natural-guide-to-gestational-diabetes/life",
        element: <LifeAdvice></LifeAdvice>,
      },
      {
        path: "/natural-guide-to-gestational-diabetes/training",
        element: <TrainingAdvice></TrainingAdvice>,
      },
      {
        path: "/natural-guide-to-gestational-diabetes/food",
        element: <FoodAdvice></FoodAdvice>,
      },
      {
        path: "/natural-guide-to-gestational-diabetes/recipes",
        element: <RecipeTips></RecipeTips>,
      },
      {
        path: "/natural-guide-to-gestational-diabetes/search",
        element: <SearchFood></SearchFood>,
      },
      {
        path: "/natural-guide-to-gestational-diabetes/about",
        element: <AboutProject></AboutProject>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
