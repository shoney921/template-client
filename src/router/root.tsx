import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const Loading: React.FC = () => <div>Loading...</div>;
const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage")); 
const TodoIndexPage = lazy(() => import("../pages/todo/IndexPage"));

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
        path: "about",
        element: (
            <Suspense fallback={<Loading />}>
                <AboutPage />
            </Suspense>
        ),
    },
    {
        path: "todo",
        element: (
            <Suspense fallback={<Loading />}>
                <TodoIndexPage />
            </Suspense>
        ),
        children: todoRouter,
    },
] as RouteObject[]);

export default router;
