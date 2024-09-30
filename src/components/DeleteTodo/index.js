// esse e responsavel por deletar a tarefa fazendo o fetch com o method DELETE

import { DeleteTodo } from "../../service/deleteTodo";

import "./style.css";

export function DeleteTodoButton({ id }) {
  async function handleDelete() {
    try {
      // aqui e chamada a funcao que deleta uma tarefa passando o id da tarefa
      await DeleteTodo({ id });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button className="delete-button" onClick={handleDelete}>
      🗑️
    </button>
  );
}
