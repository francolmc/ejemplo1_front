import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <p>No se encontraron tareas.</p>
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default TaskList;
