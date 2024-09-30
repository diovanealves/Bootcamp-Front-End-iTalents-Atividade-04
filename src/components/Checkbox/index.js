// aqui um componente de checkbox que e utilizado para marcar uma tarefa como concluida ou deixar ela em aberto

import { useState } from "react";

import { CompletedTodo } from "../../service/completedTodo";

import "./style.css";

export function Checkbox({ id, completed, onCheckboxChange }) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = async () => {
    // aqui e chamada a funcao que marca uma tarefa como concluida passando o id da tarefa e o valor do checkbox sendo true para concluida e false para aberta
    const updatedTodo = await CompletedTodo({ id, isChecked });
    setIsChecked(updatedTodo.completed);
    onCheckboxChange(updatedTodo.completed);
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
}
