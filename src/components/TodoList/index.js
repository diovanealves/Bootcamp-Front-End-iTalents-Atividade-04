// Componente responsavel por fazer um map em todas as tarefas e renderizar o componente TodoCard para cada uma delas

import { TodoCard } from "../TodoCard";

import "./style.css";

export function TodoList({ todos }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
