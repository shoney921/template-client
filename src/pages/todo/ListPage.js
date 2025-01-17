import { useSearchParams } from "react-router-dom";
const ListPage = () => {
    const [searchParams] = useSearchParams();

    const page = searchParams.get("page") || 1;
    const size = searchParams.get("size") || 10;

    return (
        <div className="todo-list-page">
            Todo List Component {page} - {size}
        </div>
    )
}

export default ListPage;