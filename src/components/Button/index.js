// aqui fica um botão simples com uma estlização padrão que pode ser utilizada em qualquer lugar do projeto

import "./style.css";

export function Button({ type, onClick, children, style }) {
  return (
    <button type={type} onClick={onClick} className={`button`} style={style}>
      {children}
    </button>
  );
}
