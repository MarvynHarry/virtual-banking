import React from "react";
import ReactDOM from "react-dom";

const WidgetA = () => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
      <h3>Widget A</h3>
      <input type="text" placeholder="Escribe algo..." />
      <button>Enviar</button>
    </div>
  );
};

// Exponer WidgetA como un objeto global
if (typeof window !== "undefined") {
  window.WidgetA = {
    renderWidgetA: (containerId) => {
      ReactDOM.render(<WidgetA />, document.querySelector(containerId));
    },
  };
}

export default WidgetA;
