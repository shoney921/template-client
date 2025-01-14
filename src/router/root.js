import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = () => <div>Loading...</div>;
const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
// const ListPage = lazy(() => import("../pages/todo/ListPage")); // 이전 코드 (리다이렉트 하기전)
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
                <IndexPage />
            </Suspense>
        ),
        children: todoRouter,
    },
]);

export default router;
