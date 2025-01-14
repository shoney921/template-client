import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>;
const ListPage = lazy(() => import("../pages/todo/ListPage"));

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
];

export default todoRouter;