import { useState } from "react";
import MainTemplate from "../templates/MainTemplate";

const Counter = () => {
    const [contador, setContador] = useState(1);

    const contar = () => {
        setContador(contador + 1);
    };

    return (
        <MainTemplate>
            <div>
                Contandor: {contador}
            </div>
            <button onClick={contar}>Contar uno</button>
        </MainTemplate>
    );
};

export default Counter;