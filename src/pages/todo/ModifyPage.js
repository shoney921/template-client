import { useParams } from "react-router-dom";

const ModifyPage = () => {
    const { id } = useParams();
    return (
        <div className="todo-modify-page">
            Modify Page {id}
        </div>
    )
}

export default ModifyPage;