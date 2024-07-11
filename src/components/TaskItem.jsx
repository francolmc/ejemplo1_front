import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/dist";

const TaskItem = ({ task }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="border p-4 mb-2 rounded flex justify-between items-center">
      <div>
        <h2 className="text-xl">{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className="flex items-center">
        <Link to={`/edit/${task.id}`} className="bg-yellow-500 text-white py-2 px-4 rounded mr-2">
          Edit
        </Link>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>Estas seguro de eliminar la tarea?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded mr-2"
              >
                Confirmar
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    );
}

TaskItem.propTypes = {
  task: {
    id: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  }
}

export default TaskItem;