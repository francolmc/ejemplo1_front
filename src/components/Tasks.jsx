import PropType from "prop-types";

const Tasks = ({ tasks }) => {
    return (
        <div>
            { tasks.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th>Completado</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map((task) => {
                            return (
                                <tr key={task.id}>
                                    <td>{ task.id }</td>
                                    <td>{ task.title }</td>
                                    <td>{ task.completed ? "Si" : "No" }</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No hay tareas para mostrar.</p>
            )}
        </div>
    );
};

Tasks.propTypes = {
    tasks: PropType.arrayOf(
        PropType.shape(
            {
                id: PropType.number,
                title: PropType.string,
                completed: PropType.bool
            }
        )
    )
};

export default Tasks;