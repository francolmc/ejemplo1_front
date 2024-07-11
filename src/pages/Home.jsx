import Tasks from "../components/Tasks";
import MainTemplate from "../templates/MainTemplate";

const Home = () => {
    fetch('https://programacionfrontendbackend.onrender.com/api/tasks/3', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
    const taskList = [
        {
          "completed": false,
          "id": 1,
          "title": "Mi primera tarea"
        },
        {
          "completed": false,
          "id": 3,
          "title": "Tarea de prueba"
        }
      ];
    return (
        <MainTemplate>
            <Tasks tasks={taskList} />
        </MainTemplate>
    );
};

export default Home;