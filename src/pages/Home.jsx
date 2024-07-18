import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import MainTemplate from "../templates/MainTemplate";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch("https://programacionfrontendbackend.onrender.com/api/tasks");
        const json = await data.json();

        setTasks(json);
      }

      fetchData();
    }, []);

    return (
        <MainTemplate>
          <h1 className="text-2xl mb-4">Tareas</h1>
          <input type="text" placeholder="Buscar tarea..." />

          <Tasks tasks={tasks} />  
        </MainTemplate>
    );
};

export default Home;