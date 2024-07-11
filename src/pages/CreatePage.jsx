import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await addTask({ title, description, completed: false });
    navigate("/");
  };

  return (
    <MainTemplate>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Crear Tarea</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            required
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

export default CreatePage;
