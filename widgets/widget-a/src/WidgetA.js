(function () {
    const socket = io("http://localhost:3000"); // Conexión al servidor WebSocket
  
    const WidgetA = {
      renderWidgetA: function (containerId) {
        const container = document.querySelector(containerId);
        if (!container) {
          console.error("No se encontró el contenedor:", containerId);
          return;
        }
  
        const widget = document.createElement("div");
        widget.style.padding = "1rem";
        widget.style.border = "1px solid #ccc";
  
        const title = document.createElement("h3");
        title.textContent = "Widget A";
        widget.appendChild(title);
  
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Escribe algo...";
        widget.appendChild(input);
  
        const button = document.createElement("button");
        button.textContent = "Enviar";
        button.addEventListener("click", () => {
          const message = input.value.trim();
          if (message) {
            console.log("Mensaje enviado:", message);
            socket.emit("send_message", message); // Enviar mensaje al servidor WebSocket
            input.value = "";
          }
        });
        widget.appendChild(button);
  
        container.appendChild(widget);
      },
    };
  
    // Exponer WidgetA como global
    window.WidgetA = WidgetA;
  })();
  