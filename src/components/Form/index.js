// esse e um formulario simples aonde o usuario ira preencher o nome da tarefa

import "./style.css";

export function Form({ htmlFor, title, onChange }) {
  return (
    <div className="form">
      <label htmlFor={htmlFor}>{title}</label>
      <input id={htmlFor} type="text" onChange={onChange} required />
    </div>
  );
}
