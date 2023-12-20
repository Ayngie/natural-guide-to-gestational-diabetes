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
    // @ts-expect-error vs code issue
    basename: "/natural-guide-to-gestational-diabetes",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/life",
        element: <LifeAdvice></LifeAdvice>,
      },
      {
        path: "/training",
        element: <TrainingAdvice></TrainingAdvice>,
      },
      {
        path: "/food",
        element: <FoodAdvice></FoodAdvice>,
      },
      {
        path: "/recipes",
        element: <RecipeTips></RecipeTips>,
      },
      {
        path: "/search",
        element: <SearchFood></SearchFood>,
      },
      {
        path: "/about",
        element: <AboutProject></AboutProject>,
      },
    ],
  },
]);