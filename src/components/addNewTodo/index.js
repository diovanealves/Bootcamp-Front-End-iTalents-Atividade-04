// Componente responsavel por adicionar uma nova meta utilizando outros componente dentro delete

import { useState } from "react";

import { Button } from "../Button";
import { Form } from "../Form";
import { Sidebar } from "../Sidebar";

import { addTodo } from "../../service/addTodo";

export function AddNewTodo({ isOpen, onClose }) {
  // aqui e armazenado o valor do nome da tarefa
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // aqui e chamada a funcao que adiciona uma nova tarefa
    await addTodo({ task });
    window.location.reload();
  };

  return (
    // aqui e renderizado o componente sidebar que e responsavel por abrir um menu lateral e o formulario para adicionar uma nova tarefa com o botão para cadastrar
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <Form
          htmlFor="task"
          title="Meta"
          type="text"
          onChange={(e) => setTask(e.target.value)}
        />

        <Button style={{ width: "100%", marginTop: "auto" }}>
          <p>Cadastrar Meta</p>
        </Button>
      </form>
    </Sidebar>
  );
}
