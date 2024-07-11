import MainTemplate from "../templates/MainTemplate";
import { Link } from 'react-router-dom';
import { useState } from "react";
import TaskList from "../components/TaskList";

function Home() {
    const [search, setSearch] = useState('');

  return (
    <MainTemplate>
        <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Administrar Tareas</h1>
        <input
            type="text"
            placeholder="Buscar tareas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
        />
        <TaskList tasks={[]} />
        <Link to="/create" className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block">
            Crear nueva tarea
        </Link>
        </div>
    </MainTemplate>
  );
}

export default Home;
