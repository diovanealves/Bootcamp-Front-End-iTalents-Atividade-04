// serviço responsavel por buscar todas as tarefas cadastrada no db.json

export async function getTodo() {
  const response = await fetch("http://localhost:3004/todo");
  const data = await response.json();

  return { data };
}
