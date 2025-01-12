import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = () => <div>Loading...</div>;
const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ListPage = lazy(() => import("../pages/todo/ListPage"));
const IndexPage = lazy(() => import("../pages/todo/IndexPage"));

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
    {
        path: "/todo",
        element: (
            <Suspense fallback={<Loading />}>
                <IndexPage />
            </Suspense>
        ),
        children: [
            {
                path: "list",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ListPage />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default router;
