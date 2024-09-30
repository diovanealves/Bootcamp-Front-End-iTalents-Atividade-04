// Aqui e um Card aonde iremos mostrar o nome da tarefa como tambem implementaremos o componente de Checkbox e o componente de DeleteTodoButton

import { useState } from "react";

import { Checkbox } from "../Checkbox";
import { DeleteTodoButton } from "../DeleteTodo";

import "./style.css";

export function TodoCard({ todo }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  // Função que é chamada toda vez que o checkbox é clicado e muda o estado do isChecked para mudar a cor da bordar e a estlização do nome da tarefa
  const handleCheckboxChange = (newCheckedState) => {
    setIsChecked(newCheckedState);
  };

  return (
    <div className="todo" style={{ borderColor: isChecked && "#00ff00" }}>
      <div className="todo-item">
        <Checkbox
          id={todo.id}
          completed={todo.completed}
          onCheckboxChange={handleCheckboxChange}
        />
        <p
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {todo.task}
        </p>
      </div>

      <DeleteTodoButton id={todo.id} />
    </div>
  );
}
