import { useParams } from "react-router-dom";

const ReadPage = () => {
    const { id } = useParams();

    return (
        <div>
            Read Page {id}
        </div>
    )
}

export default ReadPage;