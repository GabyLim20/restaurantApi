# 🎮 Restaurante 👾  


Este proyecto tiene como objetivo desarrollar una aplicación web para gestionar pedidos y menús en un restaurante, destacando el uso de **JavaScript**, **HTML** y **CSS**. La aplicación permite a los usuarios agregar productos a su pedido, gestionar cantidades y visualizar un resumen de su orden. Utilizando **JavaScript** para manejar la lógica de los pedidos y la interacción con el usuario, y **HTML** y **CSS** para una interfaz sencilla y atractiva. Además, el proyecto hace uso de **Git** y **GitHub** para el control de versiones, lo que facilita la colaboración y el mantenimiento del código.


## Estructura del Proyecto ✨🤓

#### 📁 RestaurantApi
| Estructura                     | Descripción                                                           |
|--------------------------------|-----------------------------------------------------------------------|
| 📁 public                 | Contiene los archivos frontend con la comunicación del script.         |
| └─ 📁 assets         | Recursos como imágenes, fuentes o íconos.
  |
| └─ 📑 index.html        | Página principal del frontend.
  |
| └─ 📑 script.js       | Lógica de interacción en el frontend.
  |
| └─ 📑 style.css      | Estilos para la interfaz del usuario..
  |
| 📁 src                      | Carpeta principal del backend.|
| 📁 controllers                 | Contiene los controladores para manejar la lógica del restaurant.          |
| └─ 📑 orderController.js          | Controlador para gestionar las órdenes.  |
| └─ 📑 userController.js         | Controlador para manejar usuarios.  |
| 📁 data                 | Almacena datos en formato JSON.          |
| └─ 📑 order.json         | Base de datos temporal de órdenes.  |
| └─ 📑 user.json         | Base de datos temporal de usuarios.  |
| 📁 middleware           | Middlewares para validaciones y autenticación.          |
| └─ 📑 authMiddleware.js        | Middleware para autenticación.  |
| └─ 📑 validateMiddleware.js      | Middleware para validar datos generales. |
| └─ 📑 validateUserMiddleware.js       | Middleware para validar datos de usuario.  |
| 📁 models           | Modelos que representan las entidades del sistema.          |
| └─ 📄 orderModel.js          | Modelo para la estructura de las órdenes.               |
| └─ 📄 userModel.js              | Modelo para la estructura de los usuarios.  
| 📁 routes           | Contiene las rutas del servidor.          |
| └─ 📄 orderRoute.js         | Rutas relacionadas con pedidos.              |
| └─ 📄 userRoute.js              | Rutas relacionadas con usuarios.              |
| └─ 📄 index.js                   | Punto de entrada del proyecto.                                       |
| └─ 📄 .env                   | Archivo de configuración de variables de entorno.                                       |
| README.md                      | Instrucciones y detalles del proyecto.                               |
| package.json                   | Archivo de configuración del proyecto.                               |


## 🎯🚀 Skills

- Javascript
- MVC
- JSON: Manejo de datos estructurados en formato JSON.
- NodeJS
- Programación Asíncrona



##  👩🏻‍💻📓✍🏻💡 Como configurar el Proyecto
### Pasos a seguir en consola**
Ejecuta el siguiente bloque de comandos en tu terminal para configurar el proyecto:

**1. Instalar la dependencia**
```bash
  npm install
```
**2. Inicializar el proyecto**
```bash
  npm init -y
```
**3. Instalar la dependencia**
```bash
npm install express cors body-parser bcrypt jsonwebtoken dotenv
```

#### 📜🛠️ Ejecución
El proyecto inicializa con:
```bash
node index.js
```
##  👩🏻✍🏻💡 Documentación de api
Se utilizó postman [este archivo](ApiPostman.json).


## Recursos Utilizados

[Bootstrap](https://getbootstrap.com/docs/4.0/examples/)

[Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)


Desarrollado con 💜 por Gaby by [Ada](https://adaitw.org/)