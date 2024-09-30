// serviço responsavel por marcar uma tarefa como concluida ou caso esteja concluida mudar para em aberto

export async function CompletedTodo({ id, isChecked }) {
  const response = await fetch(`http://localhost:3004/todo/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: !isChecked,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update the todo");
  }

  const updatedTodo = await response.json();
  return updatedTodo;
}
