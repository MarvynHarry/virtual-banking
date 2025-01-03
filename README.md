# Virtual Banking Widgets

Este proyecto contiene dos widgets diseñados para integrarse fácilmente en aplicaciones web. Los widgets se comunican en tiempo real utilizando WebSockets.

## Requisitos

- Node.js >= 14.x
- npm o yarn

## Instalación de Dependencias

### Widget A

1. Navega al directorio del Widget A:
 
   ```bash
   cd widgets/widget-a

2. Instala las dependencias necesarias:
   ```bash
     npm install

### Widget B

1. Navega al directorio del Widget B:

    ```bash
     cd widgets/widget-b

3. Instala las dependencias necesarias:

    ```bash
     npm install

### Servdor

1. Navega al directorio del servidor:
 
   ```bash
   cd server

2. Instala las dependencias necesarias:

    ```bash
     npm install

## Iniciar el Entorno

### Iniciar el Servidor WebSocket

1. Desde el directorio server, ejecuta el siguiente comando:

    ```bash
   node index.js

3. El servidor estará disponible en http://localhost:3000.


## Construcción y Ejecución de los Widgets

### Widget A

1. Navega al directorio del Widget A:

    ```bash
   cd widgets/widget-a

3. Construye el Widget A:

    ```bash
     npm run build
   
2. Copia el archivo generado widget-a.umd.js desde la carpeta dist a la carpeta public del servidor:

    ```bash
     cp dist/widget-a.umd.js ../../public/

### Widget B

1. Navega al directorio del Widget B:

    ```bash
   cd widgets/widget-b

3. Construye el Widget B:

    ```bash
     npm run build
   
2. Copia el archivo generado widget-b.umd.js desde la carpeta dist a la carpeta public del servidor:

   ```bash
     cp dist/widget-b.umd.js ../../public/


## Probar la Comunicación

1. Asegúrate de que el servidor WebSocket esté corriendo.
2. Abre los siguientes archivos en tu navegador:
    - Widget A: http://localhost:3000/html-a.html
    - Widget B: http://localhost:3000/html-b.html
3. En Widget A, envía un mensaje y verifica que se muestre en tiempo real en Widget B.

## Notas

- Si hay problemas con las dependencias, utiliza:

    ```bash
   npm install --legacy-peer-deps
- Si necesitas cambiar el puerto del servidor, edítalo en el archivo server/index.js

## Licencia

Este proyecto está bajo la Licencia MIT.
