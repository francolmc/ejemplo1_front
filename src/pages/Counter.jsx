import { useState } from "react";
import MainTemplate from "../templates/MainTemplate";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const contar = () => {
    setContador(contador + 1);
  };

  return (
    <MainTemplate>
      <div>Contandor: {contador}</div>
      <button
        onClick={contar}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block"
      >
        Contar uno
      </button>
    </MainTemplate>
  );
};

export default Counter;
