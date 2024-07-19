import { useNavigate, useParams } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import { useEffect, useState } from "react";

const EditTask = () => {
    // Obtener el parametro id que viene por url
    const { id } = useParams();
    // Definir state para los input y textarea
    const [ title, setTitle ] = useState();
    const [ description, setDescription ] = useState();
    // hook para ir a otras paginas
    const navigation = useNavigate();

    // Cargar los datos de la tarea segun el ID
    useEffect(() => {
        const fetchTask = async () => {
            // Por metodo get obtenemos los datos de la tarea
            const data = await fetch(`https://programacionfrontendbackend.onrender.com/api/tasks/${id}`);
            const json = await data.json();
            setTitle(json.title);
            setDescription(json.description);
        };

        fetchTask();
    }, [id]); // Como el parametro ID cambia, puede controlar el estado de este useEffect

    const submitForm = async (e) => {
        e.preventDefault();
        await fetch(`https://programacionfrontendbackend.onrender.com/api/tasks/${id}`, { 
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
            })
        });
        navigation("/"); // ir a la pagina principal
    };

    return (
        <MainTemplate>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl mb-4">Edit Task: { id }</h1>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        placeholder="Title"
                        className="mb-4 p-2 border rounded w-full"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                        className="mb-4 p-2 border rounded w-full"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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