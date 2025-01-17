import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import "../../styles/TodoPage.css";

const IndexPage = () => {
    return (
        <BasicLayout>
            <div className="todo-index-page">
                <div> LIST </div>
            </div>
            <div className="todo-index-page-content">
                <Outlet />
            </div>
        </BasicLayout>
    );
}

export default IndexPage;