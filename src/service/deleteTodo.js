// serviço responsavel por deletar uma tarefa pelo id

export async function DeleteTodo({ id }) {
  const response = await fetch(`http://localhost:3004/todo/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete the todo");
  }

  return id;
}
