(function () {
    const socket = io("http://localhost:3000"); // Conexión al servidor WebSocket
  
    const WidgetB = {
      renderWidgetB: function (containerId) {
        const container = document.querySelector(containerId);
        if (!container) {
          console.error("No se encontró el contenedor:", containerId);
          return;
        }
  
        const widget = document.createElement("div");
        widget.style.padding = "1rem";
        widget.style.border = "1px solid #ccc";
  
        const title = document.createElement("h3");
        title.textContent = "Widget B";
        widget.appendChild(title);
  
        const messageDisplay = document.createElement("p");
        messageDisplay.textContent = "Esperando mensajes...";
        widget.appendChild(messageDisplay);
  
        container.appendChild(widget);
  
        // Escuchar mensajes desde el servidor WebSocket
        socket.on("receive_message", (message) => {
          console.log("Mensaje recibido en Widget B:", message);
          messageDisplay.textContent = `Mensaje recibido: ${message}`;
        });
      },
    };
  
    // Exponer WidgetB como global
    window.WidgetB = WidgetB;
  })();
  