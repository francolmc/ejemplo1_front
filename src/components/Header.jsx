import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-blue-600 text-white p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl">Administrador de tareas</h1>
                <nav>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/tasks/create" className="mr-4">Crear tarea</Link>
                    <Link to="/contador" className="mr-4">Contador</Link>
                    <Link to="/about" className="mr-4">Sobre nosotros...</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;