import { Outlet } from "react-router-dom";
import "../../styles/TodoPage.css";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage: React.FC = () => {
    return (
        <BasicLayout>
            <div className="todo-index-page-title">
                <div> TODO LIST </div>
            </div>
            <div className="todo-index-page-content">
                <Outlet />
            </div>
        </BasicLayout>
    );
}

export default IndexPage;