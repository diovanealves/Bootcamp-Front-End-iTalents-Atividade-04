// serviço responsavel por adicionar uma nova tarefa

export async function addTodo({ task }) {
  const response = await fetch(`http://localhost:3004/todo/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: task,
      completed: false,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add the todo");
  }

  const newTodo = await response.json();
  return newTodo;
}
