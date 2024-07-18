import MainTemplate from "../templates/MainTemplate";

const CreateTask = () => {
    return (
        <MainTemplate>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl mb-4">Crear Tarea</h1>
                <form>
                <input
                    type="text"
                    placeholder="Title"
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <textarea
                    placeholder="Description"
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

export default CreateTask;