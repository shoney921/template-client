import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout"

const MainPage = () => {
    return (
        <BasicLayout>
            <div className="text-3xl font-extrabold m-3 p-3">
                Welcome to My Website
            </div>
            <div className="flex">
                <Link to="/about">About 페이지로 이동</Link>
            </div>
        </BasicLayout>
    );
};

export default MainPage;
