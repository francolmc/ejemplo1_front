import { useParams } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";

const EditTask = () => {
    const { id } = useParams();

    return (
        <MainTemplate>
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Edit Task: { id }</h1>
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <textarea
                    placeholder="Description"
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-yellow-500 text-white py-2 px-4 rounded"
                >
                    Update Task
                </button>
            </form>
        </div>
    </MainTemplate>
    );
};

export default EditTask;