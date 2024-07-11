import MainTemplate from "../templates/MainTemplate";

const TasksPage = () => {
  return (
    <MainTemplate>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Tareas</h1>
        <input type="text" placeholder="Buscar tarea..." />
      </div>
    </MainTemplate>
  );
};

export default TasksPage;
