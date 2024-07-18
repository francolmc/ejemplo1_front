import { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const titleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await fetch("https://programacionfrontendbackend.onrender.com/api/tasks", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": title,
                "description": description
            })
        });
        navigate("/");
    };

    return (
        <MainTemplate>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl mb-4">Crear Tarea</h1>
                <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Title"
                    className="mb-4 p-2 border rounded w-full"
                    required
                    value={title}
                    onChange={(e) => titleOnChange(e)}
                />
                <textarea
                    placeholder="Description"
                    className="mb-4 p-2 border rounded w-full"
                    required
                    value={description}
                    onChange={(e) => descriptionOnChange(e)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Agregar Tarea
                </button>
                </form>
            </div>
        </MainTemplate>
    );
}

export default CreateTask;