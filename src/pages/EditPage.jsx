import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";

function EditPage() {
  const { id } = useParams();
  const [task, setTask] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    //const taskToEdit = tasks.find((task) => task.id === parseInt(id));
    //if (taskToEdit) {
    //  setTask(taskToEdit);
    //}
  }, [id, task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await updateTask(task.id, task);
    navigate("/");
  };

  return (
    <MainTemplate>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Edit Task</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="mb-4 p-2 border rounded w-full"
            required
          />
          <textarea
            placeholder="Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
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
}

export default EditPage;
