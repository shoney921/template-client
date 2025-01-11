import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = () => <div>Loading...</div>;
const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <AboutPage />
      </Suspense>
    ),
  },
]);

export default router;
