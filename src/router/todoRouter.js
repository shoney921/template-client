import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>;
const ListPage = lazy(() => import("../pages/todo/ListPage"));
const ReadPage = lazy(() => import("../pages/todo/ReadPage"));

const todoRouter = [
    {
        path: "list",
        element: (
            <Suspense fallback={Loading}>
                <ListPage />
            </Suspense>
        ),
    },
    {
        path: "",
        element: <Navigate replace to="list" />,
    },
    {
        path: "read/:id",
        element: (
            <Suspense fallback={Loading}>
                <ReadPage />
            </Suspense>
        ),
    },
];

export default todoRouter;