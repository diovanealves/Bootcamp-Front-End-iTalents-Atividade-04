import { useEffect, useState } from "react";

import { Button } from "./components/Button";
import { EmptyState } from "./components/EmptyState";
import { TodoList } from "./components/TodoList";

import { getTodo } from "./service/getTodo";

import { AddNewTodo } from "./components/addNewTodo";
import "./style.css";

function App() {
  // aqui e armazenado todas as tarefas que são retornadas da api
  const [todos, setTodos] = useState();
  // aqui e armazenado o estado do menu lateral sendo aberto como true ou fechado como false
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // aqui fazemos a busca de todas as tarefas e armazenamos no estado todos
    const fetchTodos = async () => {
      try {
        const todosData = await getTodo();
        setTodos(todosData.data);
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    };

    fetchTodos();
  }, []);

  // função que muda o estado do menu lateral para o contrario do estado atual
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // função que muda o estado do menu lateral para false quando o usuario clicar no botão de fechar dentro do sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="sidebar-toggle">
        <Button onClick={toggleSidebar}>
          <p>Adicionar meta</p>
        </Button>
      </div>

      <AddNewTodo isOpen={isSidebarOpen} onClose={closeSidebar} />
      {todos && todos.length > 0 ? <TodoList todos={todos} /> : <EmptyState />}
    </>
  );
}

export default App;
