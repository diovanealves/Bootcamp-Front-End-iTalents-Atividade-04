// aqui ira ser renderizado um menu lateral caso o usuario clique no botão de adicionar nova tarefa

import "./style.css";

export function Sidebar({ children, isOpen, onClose }) {
  // temos um botão para fechar o menu lateral que vai retornar para o App.js uma função que ira mudar o estado do menu lateral para false
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      {children}
    </aside>
  );
}
